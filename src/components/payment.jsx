import React from "react";
import "../css/payment.css";
import UPI from "../assets/royal-collection-hotels-scanner.jpg";

const Payment = () => {
  return (
    <div className="payment-section">
      <div className="payment-section-right swipe">
        <h2>Bank Account Deatils</h2>

        <div className="bank-details">
          <p className="payment-note">
            <span>IMPORTANT NOTICE:</span> Payments should only be made using
            the official account number and scanner provided above. We do not
            accept cash deposits or physical payments in any form. The company
            is not responsible for any payments made to other accounts, other
            scanners, or any cash given to individuals. Please ensure all
            payments are directed through the official account and scanner only.
          </p>
          <div className="bank-details-left">
            <h3>HDFC Bank Account Details</h3>

            <ul>
              <li>
                <span>Account Holder Name:</span>
                Royal Collection Hotels & Resorts Pvt. Ltd.
              </li>
              <li>
                <span>Bank Details:</span>
                HDFC ( Dwarka Sec-5 New Delhi )
              </li>
              <li>
                <span>Account No. :</span>
                02498140000032
              </li>
              <li>
                <span>RTGS Code:</span>
                HDFC0000249
              </li>
              <li>
                <span>Branch Code:</span>
                0249
              </li>
              <li></li>
            </ul>
          </div>
          <div className="bank-details-right">
            <h3>ICICI Bank Account Details</h3>
            <ul>
              <li>
                <span>Account Holder Name:</span>
                Royal Collection Hotels & Resorts Pvt. Ltd.
              </li>
              <li>
                <span>Bank Details:</span>
                ICICI (Dwarka Chowk), Plot No – 5A-6A, Jai Bharat Enclave, New
                Delhi
              </li>
              <li>
                <span>Account No. :</span>
                235505000018
              </li>
              <li>
                <span>RTGS Code:</span>
                ICIC0002355
              </li>
              <li>
                <span>Branch Code:</span>
                2355
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="payment-section-left swipe-left">
        <img src={UPI} alt="" />
      </div>
    </div>
  );
};

export default Payment;
