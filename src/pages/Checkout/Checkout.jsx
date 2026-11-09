const Checkout = () => {
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
      
      console.log({
          email,
          phone,
          fullName,
          streetAddress,
          city,
          state,
          zipCode
     }); 
  };

  return (
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

        <button type="submit">Continue</button>
      </div>
    </form>
  );
};

export default Checkout;
