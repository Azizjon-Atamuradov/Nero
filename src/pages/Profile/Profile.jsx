import "./Profile.css";
import { useState } from "react";

const Profile = () => {
  const [name, setName] = useState(
    localStorage.getItem("name") || "Alex Johnson",
  );
  const [email, setEmail] = useState(
    localStorage.getItem("email") || "alex@example.com",
  );
  const [phone, setPhone] = useState(
    localStorage.getItem("phone") || "(412) 555-0123",
  );

  const [message, setMessage] = useState("");

  const handleSave = (event) => {
    event.preventDefault();

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanPhone = phone.trim();

    if (cleanName.length === 0 || cleanPhone.length === 0) {
      setMessage("Please fill in all fields");
      return;
    }

    localStorage.setItem("name", cleanName);
    localStorage.setItem("email", cleanEmail);
    localStorage.setItem("phone", cleanPhone);

    setMessage("Profile saved successfully");
  };

  return (
    <form className="profile-page" onSubmit={handleSave}>
      <h1> Profile</h1>

      <div className="profile-field">
        <label htmlFor="name">Full Name</label>

        <input
          id="name"
          type="text"
          value={name}
          required
          onChange={(e) => {
            setName(e.target.value);
            setMessage("");
          }}
        />
      </div>

      <div className="profile-field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          required
          onChange={(e) => {
            setEmail(e.target.value);
            setMessage("");
          }}
        />
      </div>

      <div className="profile-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          required
          onChange={(e) => {
            setPhone(e.target.value);
            setMessage("");
          }}
        />
      </div>

      <button type="submit" className="profile-button">
        Save Profile
      </button>
      <div className="profile-message"> {message && <p>{message}</p>}</div>
    </form>
  );
};

export default Profile;
