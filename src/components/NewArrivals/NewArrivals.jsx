import { products } from "../../data/products";
import "./NewArrivals.css";

const NewArrivals = () => {
  return (
    <div className="arrivals-container">
      <div className="arrivals-header">
        <h1> NEW ARRIVALS</h1>
        <p>Discover the latest styles just dropped this week.</p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.img} alt={product.name} />
            <div className="product-details">
              
                    <h3>${product.price}</h3>
                    <p>{product.name}</p>
            </div>

            {/* <button>View Product</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
