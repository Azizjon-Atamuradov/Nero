import "./Kids.css";
import { products } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Kids = () => {
  const kidsProducts = products.filter((item) => item.category === "kids");
  const [visibleCount, setVisibleCount] = useState(16);
  const visibleProducts = kidsProducts.slice(0, visibleCount);
  const navigate = useNavigate();

  return (
    <div className="kids">
      <div className="kids-header">
        <h1 className="kids-title">KIDS COLLECTION</h1>
        <p className="kids-description">
          Built for play. Designed for growing energy.
        </p>
      </div>


      <div className="kids-grid">
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
