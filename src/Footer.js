import React from "react";
import "./Footer.css"; // Save the CSS part into this file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Footer heading</h3>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
        </div>
        <div className="footer-column">
          <h3>Footer heading</h3>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
        </div>
        <div className="footer-column">
          <h3>Footer heading</h3>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
        </div>
        <div className="footer-column">
          <h3>Footer heading</h3>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
          <a href="#">Label</a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2008-2024 Braintree, a service of PayPal, Inc. All rights reserved.
        <a href="#">Privacy Policy</a> |<a href="#">Legal</a>
      </div>
    </footer>
  );
}
