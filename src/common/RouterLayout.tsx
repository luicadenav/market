import React from "react";
import NavBar from "./NavBar";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import Cookies from "js-cookie";

const RouterLayout = () => {
  const { isAuth, isExpired, accessToken } = useAppSelector(
    (state) => state.authReducer
  );

  React.useEffect(() => {
    if (accessToken) {
      Cookies.set("accessToken", accessToken);
    }
  }, [accessToken]);

  React.useEffect(() => {
    if (isExpired) {
      Cookies.remove("accessToken");
    }
  }, [isExpired]);

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
