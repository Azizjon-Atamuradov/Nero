import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories/Categories";
import NewArrivals from "../components/NewArrivals/NewArrivals";
import BestSellers from "../components/BestSellers/BestSellers";
import Sale from "../components/Sale/Sale";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals />
      <Sale />
      <BestSellers />
    </div>
  );
};

export default Home;
