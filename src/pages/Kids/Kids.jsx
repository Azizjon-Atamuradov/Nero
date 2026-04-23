import "./Kids.css";
import { products } from "../../data/products";
import { useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Kids = () => {
  const kidsProducts = products.filter((item) => item.gender === "kids");
  const [visibleCount, setVisibleCount] = useState(16);
  const visibleProducts = kidsProducts.slice(0, visibleCount);

  return (
    <div className="kids">
      <div className="kids-header">
        <h1 className="kids-title">KIDS COLLECTION</h1>
        <p className="kids-description">
          Built for play. Designed for growing energy.
        </p>
      </div>

      <ProductGrid products={visibleProducts} />

      {visibleCount < kidsProducts.length && (
        <div className="view-all">
          <button onClick={() => setVisibleCount((prev) => prev + 8)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Kids;
