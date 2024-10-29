import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { boolean } from "yup";

interface isAuth {
  isAuth: boolean;
}
const initialState: isAuth = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    changeAuth: (state) => {
      state.isAuth = !state.isAuth;
    },
  },
});
export const { changeAuth } = authSlice.actions;
