import React from "react";
import "./NeedHelp.css"; // Use external CSS for better readability

const NeedHelp = () => {
  return (
    <div className="need-help-container">
      <h2 className="heading">Need Help?</h2>
      <div className="card-container">
        <div className="card">
          <p>
            Submit a request for help with your PayPal Braintree sandbox or
            production account.
          </p>
          <button className="button">Submit</button>
        </div>
        <div className="second-card">
          <p>Connect with our sales team</p>
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default NeedHelp;
