import React from "react";
import { Link } from "react-router-dom";
// import classes from "./Footer.module.css";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                FoodApp goal is <i>SERVING THE WORLD</i> , an initiative that
                started from just offering of services to my family. Now
                FoodApp can be used by everyone, caterers can use this app to
                sell and make good money.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>Appetizer</li>
                <li>BreakFast</li>
                <li>Brunch</li>
                <li>Lunch</li>
                <li>Dinner</li>
                <li>Dessert</li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="https://github.com/osigie">About Us</a>
                </li>
                <li>
                  <a href="www.linkedin.com/in/ken-osagie-750b821b1">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://github.com/osigie/foodApp">Contribute</a>
                </li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2022 All Rights Reserved by KenOsagie.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
