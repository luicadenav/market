import React from "react";
import NavBar from "./NavBar";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";

const RouterLayout = () => {
  const { isAuth } = useAppSelector((state) => state.authReducer);
  return isAuth ? (
    <div>
      <NavBar />
      <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default RouterLayout;
