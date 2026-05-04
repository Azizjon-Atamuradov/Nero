import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Bag.css";

const Bag = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="bag-page empty-bag">
        <h1>Your Bag</h1>
        <p>Your bag is empty.</p>
      </div>
    );
  }

  return (
    <div className="bag-page">
      <div className="bag-items">
        <h1>Your Bag</h1>

        {cart.map((item) => (
          <div key={`${item.id}-${item.selectedSize}`} className="bag-card">
            <img src={item.img} alt={item.name} className="bag-image" />
            <div className="bag-info">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>
              <p>Price: ${item.price}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id, item.selectedSize)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item, item.selectedSize)}>
                  +
                </button>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.selectedSize)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="bag-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>
        <div className="summary-row">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Bag;
