import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Shipping from "../components/Shipping/Shipping";

const RootLayout = () => {
  return (
    <div>
      <Shipping />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default RootLayout;
