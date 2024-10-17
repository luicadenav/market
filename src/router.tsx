import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, LoginPage, CharacterPage } from "./pages/";
import RouterLayout from "./common/RouterLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<RouterLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:id" element={<CharacterPage />} />
      </Route>
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
