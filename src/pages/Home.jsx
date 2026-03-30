import React from "react";
import Hero from "../components/Hero";
import Categories from "../components/Categories/Categories";
import NewArrivals from "../components/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div>
      <Hero />
      <Categories />
      <NewArrivals/>
    </div>
  );
};

export default Home;
