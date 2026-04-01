import React from "react";
import categories_men from "../../assets/categories_men.jpg";
import categories_women from "../../assets/categories_women.jpg";
import categories_kids from "../../assets/categories_kids.jpg";
import "./Categories.css";
import { useNavigate } from "react-router-dom";

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories-container">
      <div className="category-card">
        <img src={categories_men} alt="" />
        <button className="categories-btn" onClick={() => navigate("/men")}>
          Shop Men
        </button>
      </div>
      <div className="category-card">
        <img src={categories_women} alt="" />
        <button className="categories-btn" onClick={() => navigate("/women")}>
          Shop Women
        </button>
      </div>
      <div className="category-card">
        <img src={categories_kids} alt="" />
        <button className="categories-btn" onClick={() => navigate("/kids")}>
          Shop Kids{" "}
        </button>
      </div>
    </div>
  );
};

export default Categories;
