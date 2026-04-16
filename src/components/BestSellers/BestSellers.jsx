import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import "./BestSellers.css";
import ProductGrid from "../ProductGrid/ProductGrid";

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

      <ProductGrid products={bestSellers} />

      <div className="view-all">
        <button onClick={() => navigate("/best-sellers")}>View All</button>
      </div>
    </section>
  );
};

export default BestSellers;
