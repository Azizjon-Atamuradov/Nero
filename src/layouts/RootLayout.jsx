import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Shipping from "../components/Shipping/Shipping";
import Footer from "../components/Footer/Footer";

const RootLayout = () => {
  return (
    <div>
      <Shipping />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
