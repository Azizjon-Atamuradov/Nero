import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Bag = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h1>My Bag</h1>

      {cart.length === 0 ? (
        <p>Your bag is empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={item.name} width="100" />
            <p>{item.name}</p>
            <p>${item.price}</p>
            <p>Size: {item.selectedSize}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Bag; 