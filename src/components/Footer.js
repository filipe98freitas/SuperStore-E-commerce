import React from "react";
import "../css/Footer.css";
import logoFooter from "../images/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={logoFooter} />

      <div id="items">
        <div className="footer_information">
          <ul>
            <h5 id="footer_titles">Main Information</h5>
            <li>
              <a href="#">Sustentability</a>
            </li>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Returns and Replacements</a>
            </li>
            <li>
              <a href="#">Delivery Rates and Policies</a>
            </li>
            <li>
              <a href="#">Track Packages or View Orders</a>
            </li>
          </ul>
        </div>

        <div className="footer_work">
          <ul>
            <h5 id="footer_titles">Work with Us</h5>
            <li>
              <a href="#">Sell on SuperStore</a>
            </li>
            <li>
              <a href="#">Policy Management</a>
            </li>
            <li>
              <a href="#">See How Make Money with Us</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
