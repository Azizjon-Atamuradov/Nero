import React, { useState } from "react";
import "./Search.css";
import { products } from "../../data/products";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cleanSearchTerm = searchTerm.trim().toLowerCase();

  const result = products.filter(
    (product) =>
      cleanSearchTerm.length > 1 &&
      (product.name?.toLowerCase().includes(cleanSearchTerm) ||
        product.category?.toLowerCase() === cleanSearchTerm),
  );

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div>
        {result.map((p) => (
          <li key={p.id}>
            <h1>{p.name}</h1>
            <img src={p.img} alt={p.name} />
            <p>{p.price}$</p>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Search;
