import "./Men.css";

import { products } from "../../data/products";
const Men = () => {
  const menProducts = products.filter((item) => item.category === "men");

  return (
    <div className="men">
      <div className="men-header">
        <h1 className="men-title">MEN'S COLLECTION</h1>
        <p className="men-description">
          Discover premium essentials designed for performance, comfort and
          style.
        </p>
      </div>

      <div className="men-grid">
        {menProducts.map((product) => (
          <div className="product-card" key={product.id}>
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
    </div>
  );
};

export default Men;

 

 