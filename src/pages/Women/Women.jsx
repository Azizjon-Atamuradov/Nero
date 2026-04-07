import "./Women.css";
import { products } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
          Discover premium essentials designed for performance, comfort and
          style.
        </p>
      </div>

      <div className="women-grid">
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
              <h3 className="product-price">{product.price}</h3>
              <p className="product-name">{product.name}</p>
            </div>
          </div>
        ))}
      </div>

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
