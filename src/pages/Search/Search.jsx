import React, { useState } from "react";
import "./Search.css";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <p>{searchTerm}</p>
    </div>
  );
};

export default Search;
