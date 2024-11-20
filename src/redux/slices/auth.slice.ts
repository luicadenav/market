import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "../thunks/auth.thunk";
import Cookies from "js-cookie";
import { expirationTokenAuth, tokenDecode } from "../../utils/decodeToken";
import { TokenFirebase } from "../../interfaces/firebase.interfaces";

interface AuthState {
  isAuth: boolean;
  success: boolean;
  error: string | null;
  userData: {
    email: string | null;
    uid: string | null;
  } | null;
  loading: boolean;
  accessToken: string | null;
  isExpired: boolean | null;
}

interface FirebaseAuthError {
  code: string;
  message: string;
}

const accessToken = Cookies.get("accessToken");

const initialState: AuthState = {
  isAuth: accessToken !== undefined && !expirationTokenAuth(accessToken),
  success: accessToken !== undefined,
  error: null,
  userData: accessToken
    ? {
        email: tokenDecode<TokenFirebase>(accessToken).email,
        uid: tokenDecode<TokenFirebase>(accessToken).sub,
      }
    : null,
  loading: false,
  accessToken: accessToken || null,
  isExpired:
    accessToken !== undefined ? expirationTokenAuth(accessToken) : null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
      state.loading = false;
      state.success = false;
      state.error = null;
      state.userData = null;
      state.accessToken = null;
      state.isExpired = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(authThunk.pending, (state) => {
      state.loading = true;
      state.error = null;
    });

    builder.addCase(authThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.success = true;
      state.accessToken = action.payload.accessToken;
      state.isAuth = true;
      state.isExpired = false;
      state.userData = action.payload.userData;
    });

    builder.addCase(authThunk.rejected, (state, action) => {
      const error = action.payload as FirebaseAuthError;
      state.loading = false;
      state.error = error.code;
      state.isAuth = false;
      state.success = false;
      state.userData = null;
      state.accessToken = null;
      state.isExpired = false;
    });
  },
});
export const { login, logout } = authSlice.actions;
