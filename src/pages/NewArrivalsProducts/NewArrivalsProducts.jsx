import React from "react";
import { products } from "../../data/products";
import "./NewArrivalsProducts.css";
import { useNavigate } from "react-router-dom";

const NewArrivalsProducts = () => {
  const navigate = useNavigate();
  const visibleNewArrivals = products.filter((product) => product.isNew);

  return (
    <section className="new-arrivals container">
      <div className="new-arrivals-grid">
        {visibleNewArrivals.map((product) => (
          <div
            key={product.id}
            className="new-arrivals-product"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.img} alt={product.name} />
            <div className="product-details">
              <h3>${product.price}</h3>
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivalsProducts;
