import "./NewArrivals.css";

import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

const NewArrivals = () => {
  const navigate = useNavigate();

  return (
    <div className="arrivals-container">
      <div className="arrivals-header">
        <h1> NEW ARRIVALS</h1>
        <p>Discover the latest styles just dropped this week.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
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
    </div>
  );
};

export default NewArrivals;
