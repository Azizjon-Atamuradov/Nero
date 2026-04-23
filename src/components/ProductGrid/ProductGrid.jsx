import "./ProductGrid.css";
import { useNavigate } from "react-router-dom";

const ProductGrid = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div className="product-grid">
      {products.map((product) => (
        <div
          className="product-card"
          key={product.id}
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <div className="product-image">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-info">
            <p className="product-price">${product.price}</p>
            <p className="product-name">{product.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
