import logo from "../../assets/nero-logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <NavLink to="/">
          <img src={logo} alt="Nero Logo" className="logo" />{" "}
        </NavLink>
      </div>

      <ul className={`nav-center ${menuOpen ? "active-menu" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/men"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Men
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/women"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Women
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/kids"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Kids
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <FaSearch />

        <div className="user-menu" onClick={() => setIsOpen((prev) => !prev)}>
          <FaUser />

          {isOpen && (
            <div className="dropdown">
              <p>My Profile</p>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          )}
        </div>

        <FaShoppingBag />
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
        <FaBars />
      </div>
    </nav>
  );
};

export default Navbar;
