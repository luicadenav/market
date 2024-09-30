import React from "react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const RouterLayout: React.FC<{}> = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RouterLayout;
