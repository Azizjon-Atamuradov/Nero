import "./Footer.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* column 1 */}
        <div className="footer-col">
          <h4>Products</h4>
          <p>New Arrivals</p>
          <p>Best Sellers</p>
          <p>Sale</p>
          <p>Men</p>
          <p>Women</p>
          <p>Kids</p>
        </div>

        <div className="footer-col">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Careers</p>
          <p>News</p>
        </div>

        <div className="footer-col">
          <h4>Support</h4>
          <p>Contact Us</p>
          <p>Shipping</p>
          <p>Returns</p>
          <p>FAQ</p>
        </div>

        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <FaInstagram />
            <FaFacebook />
            <FaXTwitter />
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>
      <div className="footer-bottom">
        <p>© 2026 Nero. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
