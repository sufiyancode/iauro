import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
const RootLayout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default RootLayout;
