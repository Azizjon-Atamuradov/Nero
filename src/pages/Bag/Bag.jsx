import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Bag.css";
import { FaRegTrashCan } from "react-icons/fa6";

const Bag = () => {
  const { cart, addToCart, decreaseQty, removeFromCart } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const TAX_RATE = 0.07;
  const DELIVERY_FEE = 4.99;

  const totalTax = totalPrice * TAX_RATE;
  const totalSummary = totalPrice + totalTax + DELIVERY_FEE;

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
        <h1>YOUR BAG</h1>

        {cart.map((item) => (
          <div key={`${item.id}-${item.selectedSize}`} className="bag-card">
            <div className="bag-image">
              <img src={item.img} alt={item.name} className="bag-image" />
            </div>

            <div className="bag-info">
              <h3>{item.name}</h3>
              <p>Size: {item.selectedSize}</p>

              <div className="qty-box">
                <button onClick={() => decreaseQty(item.id, item.selectedSize)}>
                  -
                </button>
                <span>{item.quantity}</span>
                <button onClick={() => addToCart(item, item.selectedSize)}>
                  +
                </button>
              </div>
            </div>

            <div className="bag-right-side">
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id, item.selectedSize)}
              >
                <FaRegTrashCan className="trash-icon" />
              </button>

              <div className="bag-price">
                <p>${item.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bag-summary">
        <h2>Order Summary</h2>
        <div className="summary-row">
          <span>{totalItems} items</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Sales Tax</span>
          <span>${totalTax.toFixed(2)}</span>
        </div>
        <div className="summary-row">
          <span>Delivery</span>
          <span>${DELIVERY_FEE}</span>
        </div>

        <div className="summary-row-total">
          <span>Total</span>
          <span>${totalSummary.toFixed(2)}</span>
        </div>
        <button className="checkout-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Bag;


