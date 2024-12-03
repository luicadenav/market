import { authThunk } from "./auth.thunk";
import { createAsyncThunk } from "@reduxjs/toolkit";
import * as auth from "firebase/auth";
//import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase } from "../../config/firebase";

export const registerThunk = createAsyncThunk(
  "firebase/auth",
  async (
    { username, password }: { username: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      const authGenerate = await auth.createUserWithEmailAndPassword(
        authFirebase,
        username,
        password
      );

      console.log(authGenerate);

      const { email, uid } = authGenerate.user;
      const { token: accessToken, expirationTime } =
        await authGenerate.user.getIdTokenResult();
      console.log();

      return {
        accessToken,
        expirationTime,
        userData: {
          email,
          uid,
        },
      };
    } catch (error: any) {
      return rejectWithValue({
        code: error.code,
        message: error.message,
      });
    }
  }
);
