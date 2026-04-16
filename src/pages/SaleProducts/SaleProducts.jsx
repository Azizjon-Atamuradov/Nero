import "./SaleProducts.css";
import { products } from "../../data/products";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SaleProducts = () => {
  const saleProducts = products.filter((item) => item.isOnSale);
  const [visibleCount, setVisibleCount] = useState(4);
  const visibleProducts = saleProducts.slice(0, visibleCount);
  const navigate = useNavigate();

  return (
    <div className="sale">
      <div className="sale-header">
        <h1 className="sale-title">SALE</h1>
        <p className="sale-description">Limited Time Offers</p>
      </div>

      <div className="product-grid">
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
              <p className="product-price-sale">${product.salePrice} </p>
              <p className="product-price-org">${product.price} Original price</p>
              <p className="product-name">{product.name}</p>
            </div>
          </div>
        ))}
      </div>

      {visibleCount < saleProducts.length && (
        <div className="view-all">
          <button onClick={() => setVisibleCount((prev) => prev + 8)}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default SaleProducts;
