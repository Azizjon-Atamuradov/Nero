import logo from "../../assets/nero-logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Nero Logo" className="logo" />
      </div>

      <ul className="nav-center">
        <li>Home</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <div className="nav-right"></div>
    </nav>
  );
};

export default Navbar;
