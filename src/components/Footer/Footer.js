import React from "react";
import "./Footer.css";
import { TfiApple } from "react-icons/tfi";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { PiTwitterLogoThin } from "react-icons/pi";
import { PiInstagramLogoThin } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import { PiLinkedinLogoThin } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li>About us</li>
            <li>Contact us</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Business Size</h4>
          <ul>
            <li>Entrepreneurs</li>
            <li>SMBs</li>
            <li>Growth Business</li>
            <li>Household Services</li>
            <li>Enterprise</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Business Type</h4>
          <ul>
            <li>Health & Wellness</li>
            <li>Sports</li>
            <li>Learning Activities</li>
            <li>Household Services</li>
            <li>Miscellaneous</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Download</h4>
          <ul>
            <li><TfiApple/> Business App</li>
            <li><IoLogoGooglePlaystore/> Business App</li>
            <li><TfiApple/> User App</li>
            <li><IoLogoGooglePlaystore/> User App</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Return Policy</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact us</h4>
          <ul>
            <li>support@Rmax.com</li>
            <li>+91-8459671235</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Copyright, All Right Reserved@RMax</p>
        <div className="footer-social">
          <span><PiTwitterLogoThin/></span>
          <span><PiInstagramLogoThin/></span>
          <span><SlSocialFacebook/></span>
          <span><PiLinkedinLogoThin/></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
