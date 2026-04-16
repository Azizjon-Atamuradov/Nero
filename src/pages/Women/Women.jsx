import "./Women.css";
import { products } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Women = () => {
  const womenProducts = products.filter((item) => item.category === "women");
  const [visibleCount, setVisibleCount] = useState(16);
  const visibleProducts = womenProducts.slice(0, visibleCount);
  const navigate = useNavigate();

  return (
    <div className="women">
      <div className="women-header">
        <h1 className="women-title">WOMEN'S COLLECTION</h1>
        <p className="women-description">
          Built for performance. Refined for everyday style.
        </p>
      </div>

      <ProductGrid products={visibleProducts} />

      {visibleCount < womenProducts.length && (
        <div className="view-all">
          <button onClick={() => setVisibleCount((prev) => prev + 8)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Women;
