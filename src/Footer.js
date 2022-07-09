import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_lists">
        <div className="lists">
          <ul className="first_lists">
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Ways to Watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </ul>
          <ul className="first_lists">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="lists">
          <ul>
            <li>Account</li>
            <li>Redeem Gift Cards</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>
          <ul className="second_lists">
            <li>Media Center</li>
            <li>Buy Gift Cards</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
