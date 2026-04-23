import "./Men.css";
import { products } from "../../data/products";
import { useState } from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Men = () => {
  const menProducts = products.filter((item) => item.gender === "men");
  const [visibleCount, setVisibleCount] = useState(16);
  const visibleProducts = menProducts.slice(0, visibleCount);

  return (
    <div className="men">
      <div className="men-header">
        <h1 className="men-title">MEN'S COLLECTION</h1>
        <p className="men-description">
          Discover premium essentials designed for performance, comfort and
          style.
        </p>
      </div>

      <ProductGrid products={visibleProducts} />

      {visibleCount < menProducts.length && (
        <div className="view-all">
          <button onClick={() => setVisibleCount((prev) => prev + 8)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Men;
