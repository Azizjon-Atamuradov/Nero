import React from "react";
import categories_men from "../../assets/categories_men.jpg";
import categories_women from "../../assets/categories_women.jpg";
import categories_kids from "../../assets/categories_kids.jpg";
import "./Categories.css";

const Categories = () => {
  return (
    <div className="categories-container">
      <div className="category-card-men">
              <img src={categories_men} alt="" />
               <button className="categories-btn">Shop Men</button>
      </div>
      <div className="category-card-women">
              <img src={categories_women} alt="" />
              <button className="categories-btn">Shop Women</button>
      </div>
      <div className="category-card-kids">
              <img src={categories_kids} alt="" />
              <button className="categories-btn">Shop Kids</button>
      </div>
    </div>
  );
};

export default Categories;
