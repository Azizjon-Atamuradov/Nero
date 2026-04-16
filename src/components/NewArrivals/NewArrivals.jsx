import "./NewArrivals.css";

import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";
import ProductGrid from "../ProductGrid/ProductGrid";

const NewArrivals = () => {
  const navigate = useNavigate();
  const visibleProducts = products.slice(0, 8);

  if (!products.length) {
    return <p>No products available</p>;
  }

  return (
    <section className="arrivals-container">
      <div className="arrivals-header">
        <h1>NEW ARRIVALS</h1>
        <p>Latest drops. Designed for movement and everyday style. </p>
      </div>

      <ProductGrid products={visibleProducts} />

      <div className="view-all">
        <button onClick={() => navigate("/new-arrivals")}>View All</button>
      </div>
    </section>
  );
};

export default NewArrivals;
