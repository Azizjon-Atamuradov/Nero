
import { useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../../data/products";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <h2 className="not-found">Product not found</h2>;
  }

   const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);
 
  return (
    <div className="product-details">
   
      <div className="left-side">
        <div className="product-details-image">
          <img src={product.img} alt={product.name} />
        </div>
      </div>

      <div className="right-side">
        <p className="product-details-category">
          {capitalize(product.gender)}'s • {capitalize(product.category)}
        </p>

        <h1 className="product-details-title">{product.name}</h1>
        <p className="product-details-price">${product.price}</p>

        <div className="size-section">
          <p>Select Size</p>

          <div className="size-grid">
            {[7, 8, 9, 10, 11].map((size) => (
              <button
                key={size}
                className={selectedSize === size ? "active-size" : ""}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="add-to-bag">Add to Bag</button>
      </div>
    </div>
  );
};

export default ProductDetails;


 