import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  LoginPage,
  CharacterPage,
  RegisterPage,
  ProfilePage,
} from "./pages/";
import RouterLayout from "./common/RouterLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
};

export default AppRouter;
