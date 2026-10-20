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

  const [savedProfile, setSavedProfile] = useState({
    name: localStorage.getItem("name") || "Alex Johnson",
    email: localStorage.getItem("email") || "alex@example.com",
    phone: localStorage.getItem("phone") || "(412) 555-0123",
  });

  const handleSave = () => {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);

    setSavedProfile({
      name,
      email,
      phone,
    });
  };

  return (
    <div className="profile-page">
      <h1> Profile</h1>

      <div className="profile-field">
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="profile-field">
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="profile-field">
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <button onClick={handleSave}>Save Profile</button>
      <p>{savedProfile.name}</p>
      <p>{savedProfile.email}</p>
      <p>{savedProfile.phone}</p>
    </div>
  );
};

export default Profile;
