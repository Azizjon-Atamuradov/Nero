 import "./Sale.css";
import { useNavigate } from "react-router-dom";

const Sale = () => {
  const navigate = useNavigate();

  return (
    <section className="sale-container">
      <div className="sale-content">
        <p className="sale-subtitle">LIMITED TIME OFFER</p>

        <h1 className="sale-title">30% OFF</h1>

        <p className="sale-description">
          On selected styles this season. Don’t miss out.
        </p>

        <button onClick={() => navigate("/sale")}>
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Sale;