import "./Men.css";

import { products } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Men = () => {
  const menProducts = products.filter((item) => item.category === "men");
  const [visibleCount, setVisibleCount] = useState(12);
  const visibleProducts = menProducts.slice(0, visibleCount);
  const navigate = useNavigate();

  return (
    <div className="men">
      <div className="men-header">
        <h1 className="men-title">MEN'S COLLECTION</h1>
        <p className="men-description">
          Discover premium essentials designed for performance, comfort and
          style.
        </p>
      </div>

      <div className="men-grid">
        {visibleProducts.map((product) => (
          <div
            className="product-card"
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>

            <div className="product-info">
              <h3 className="product-price">${product.price}</h3>
              <p className="product-name">{product.name}</p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < menProducts.length && (
        <div className="view-all">
          <button onClick={() => setVisibleCount((prev) => prev + 12)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Men;
