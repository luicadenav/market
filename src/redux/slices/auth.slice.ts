import { createSlice } from "@reduxjs/toolkit";
import { authThunk } from "../thunks/auth.thunk";
import { SerializedError } from "@reduxjs/toolkit";

interface AuthState {
  isAuth: boolean;
  success: boolean;
  error: SerializedError | null;
  userData: {
    email: string | null;
    uid: string | null;
  } | null;
  loading: boolean;
  accessToken: string | null;
  isExpired: boolean | null;
}

const initialState: AuthState = {
  isAuth: false,
  success: false,
  error: null,
  userData: null,
  loading: false,
  accessToken: null,
  isExpired: false,
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
      state.loading = false;
      state.error = action.error as SerializedError;
      state.isAuth = false;
      state.success = false;
      state.userData = null;
      state.accessToken = null;
      state.isExpired = false;
    });
  },
});
export const { login, logout } = authSlice.actions;
