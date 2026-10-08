import React, { useState } from "react";
import "./Search.css";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cleanSearchTerm = searchTerm.trim().toLowerCase();

  const result = products.filter(
    (product) =>
      cleanSearchTerm.length > 1 &&
      (product.name?.toLowerCase().includes(cleanSearchTerm) ||
        product.category?.toLowerCase() === cleanSearchTerm),
  );
  const navigate = useNavigate();

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="product-grid">
        {result.map((p) => (
          <div
            className="product-card"
            key={p.id}
            onClick={() => navigate(`/product/${p.id}`)}
          >
            <div className="product-image">
              <img src={p.img} alt={p.name} />
            </div>
            <div className="product-info">
              <p className="product-price">${p.price}</p>
              <p className="product-name">{p.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;

