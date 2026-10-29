import logo from "../../assets/nero-logo.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { FaSearch, FaUser, FaShoppingBag, FaBars } from "react-icons/fa";
import { useState, useContext, useEffect, useRef } from "react";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useContext(CartContext);
  const userMenuRef = useRef(null);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

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
        <li>
          <NavLink
            to="/sale"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            Sale
          </NavLink>
        </li>
      </ul>

      <div className="nav-right">
        <NavLink to="/search" className="search-icon">
          <FaSearch />
        </NavLink>

        <div className="user-menu" ref={userMenuRef}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Open profile menu"
            aria-expanded={isOpen}
          >
            <FaUser />
          </button>

          {isOpen && (
            <div className="dropdown">
              <NavLink
                to="/profile"
                className="profile"
                onClick={() => setIsOpen(false)}
              >
                <p>My Profile</p>
              </NavLink>
              <p>Orders</p>
              <p>Logout</p>
            </div>
          )}
        </div>
        <NavLink to="/bag" className="bag-icon">
          <FaShoppingBag />
          {totalItems > 0 && <span className="bag-count">{totalItems}</span>}
        </NavLink>

        <div className="menu-icon" onClick={() => setMenuOpen((prev) => !prev)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


