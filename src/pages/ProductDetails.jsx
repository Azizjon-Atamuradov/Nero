import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div>
      <img src={product.img} alt="" />
      <div>
        <h3>${product.price}</h3>
        <p>{product.name}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
