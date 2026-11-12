// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";
// import "./Checkout.css";

// const Checkout = () => {
//   const { cart } = useContext(CartContext);

//   const totalPrice = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0,
//   );
//   const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//   const TAX_RATE = 0.07;
//   const DELIVERY_FEE = 4.99;
//   const totalTax = totalPrice * TAX_RATE;
//   const totalSummary =
//     cart.length > 0 ? totalPrice + totalTax + DELIVERY_FEE : 0;

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log("Checkout form submitted!");

//     const formData = new FormData(event.target);
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const fullName = formData.get("fullName");
//     const streetAddress = formData.get("streetAddress");
//     const city = formData.get("city");
//     const state = formData.get("state");
//     const zipCode = formData.get("zipCode");
//     const payment = formData.get("payment");

//     console.log({
//       email,
//       phone,
//       fullName,
//       streetAddress,
//       city,
//       state,
//       zipCode,
//       payment,
//     });
//   };

//   return cart.length > 0 ? (
//     <form className="checkout-page" onSubmit={handleSubmit}>
//       <h1>Checkout</h1>
//       <div className="contact-information">
//         <h2>Contact Information</h2>

//         <label htmlFor="email">Email Address</label>
//         <input type="email" required id="email" name="email" />

//         <label htmlFor="phone">Phone</label>
//         <input type="tel" required id="phone" name="phone" />
//       </div>
//       <div className="shipping-address">
//         <h2>Shipping Address</h2>
//         <label htmlFor="full-name">Full Name</label>
//         <input type="text" required id="full-name" name="fullName" />
//         <label htmlFor="street-address">Street Address</label>
//         <input type="text" required id="street-address" name="streetAddress" />
//         <label htmlFor="city">City</label>
//         <input type="text" required id="city" name="city" />
//         <label htmlFor="state">State</label>
//         <input type="text" required id="state" name="state" />
//         <label htmlFor="zip-code">Zip Code</label>
//         <input type="text" required id="zip-code" name="zipCode" />
//       </div>

//       <div className="payment-method">
//         <h2>Payment Method</h2>
//         <label htmlFor="card">
//           <input type="radio" name="payment" value="card" id="card" required />{" "}
//           Card
//         </label>
//         <label htmlFor="cash">
//           <input type="radio" name="payment" value="cash" id="cash" /> Cash
//         </label>
//       </div>

//       <div className="order-summary">
//         <h2>Order Summary</h2>
//         <div className="order-row">
//           <span>{totalItems} items</span>
//           <span>${totalPrice.toFixed(2)}</span>
//         </div>
//         <div className="order-row">
//           <span>Sales Tax</span>
//           <span>${totalTax.toFixed(2)}</span>
//         </div>
//         <div className="order-row">
//           <span>Delivery</span>
//           <span>${DELIVERY_FEE.toFixed(2)}</span>
//         </div>

//         <div className="order-row-total">
//           <span>Total</span>
//           <span>${totalSummary.toFixed(2)}</span>
//         </div>
//       </div>

//       <button type="submit">Continue</button>
//     </form>
//   ) : (
//     <div className="empty-cart">
//       <h2>Your bag is empty</h2>
//       <p>Please add products before checkout</p>
//     </div>
//   );
// };

// export default Checkout;


import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Checkout.css"



const Checkout = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const TAX_RATE = 0.07;
  const DELIVERY_FEE = 4.99;
  const totalTax = totalPrice * TAX_RATE;
  const totalSummary = cart.length > 0 ? totalPrice + totalTax + DELIVERY_FEE : 0;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Checkout form submitted!");

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const phone = formData.get("phone");
    const fullName = formData.get("fullName");
    const streetAddress = formData.get("streetAddress");
    const city = formData.get("city");
    const state = formData.get("state");
    const zipCode = formData.get("zipCode");
    const payment = formData.get("payment");

    console.log({
      email,
      phone,
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
      payment,
    });
  };

  return (
   
    cart.length > 0 ? 
   
    <form className="checkout-page" onSubmit={handleSubmit}>
      <h1>Checkout</h1>
      <div className="contact-information">
        <h2>Contact Information</h2>

        <label htmlFor="email">Email Address</label>
        <input type="email" required id="email" name="email" />

        <label htmlFor="phone">Phone</label>
        <input type="tel" required id="phone" name="phone" />
      </div>
      <div className="shipping-address">
        <h2>Shipping Address</h2>
        <label htmlFor="full-name">Full Name</label>
        <input type="text" required id="full-name" name="fullName" />
        <label htmlFor="street-address">Street Address</label>
        <input type="text" required id="street-address" name="streetAddress" />
        <label htmlFor="city">City</label>
        <input type="text" required id="city" name="city" />
        <label htmlFor="state">State</label>
        <input type="text" required id="state" name="state" />
        <label htmlFor="zip-code">Zip Code</label>
        <input type="text" required id="zip-code" name="zipCode" />
      </div>

      <div className="payment-method">
        <h2>Payment Method</h2>
        <label htmlFor="card">
          <input type="radio" name="payment" value="card" id="card" required />{" "}
          Card
        </label>
        <label htmlFor="cash">
          <input type="radio" name="payment" value="cash" id="cash" /> Cash
        </label>
      </div>

      <div className="order-summary">
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <ul key={`${item.id}-${item.selectedSize}`}>
            <li>{item.name}</li>
            <li>Size: {item.selectedSize}</li>
            <li>Quantity: {item.quantity}</li>
            <li>Price: ${(item.price * item.quantity).toFixed(2)}</li>
          </ul>
        ))}

        <p>Items: {totalItems}</p>
        <p>Subtotal: ${totalPrice.toFixed(2)}</p>
        <p>Tax: ${totalTax.toFixed(2)}</p>
        <p>Delivery: ${DELIVERY_FEE.toFixed(2)}</p>
        <p>Total: ${totalSummary.toFixed(2)}</p>
      </div>

      <button type="submit">Continue</button>
      </form> : <div className="empty-cart">
        <h2>Your bag is empty</h2>
        <p>Please add  products before checkout</p>
    </div>
  );
};

export default Checkout;

