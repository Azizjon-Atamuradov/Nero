import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import "./BestSellers.css";

const BestSellers = () => {
  const navigate = useNavigate();

  const bestSellers = products
    .filter((product) => product.isBestSeller)
    .slice(0, 4);

  return (
    <section className="best-container">
      <div className="best-header">
        <h1>BEST SELLERS</h1>
        <p>Our most popular products loved by customers.</p>
      </div>

      <div className="best-grid">
        {bestSellers.map((product) => (
          <div
            key={product.id}
            className="best-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.img} alt={product.name} />
            <div className="best-details">
              <h3>${product.price}</h3>
              <p>{product.name}</p>
            </div>
          </div>
        ))}
      </div>
        <div className="view-all">
        <button onClick={() => navigate("/best-sellers")}>
          View All
        </button>
      </div>
    </section>
  );
};

export default BestSellers;
