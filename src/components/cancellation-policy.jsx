import React from "react";
import "../css/privacy-policy.css";

const CancellationPolicy = () => {
  return (
    <div className="privacy-policy-section">
      <div className="career-banner">
        <h2>Cancellation And Refund Policy</h2>
      </div>
      <div className="privacy-policy-content">
        <h2>Cancellation Policy</h2>
        <div className="privacy-policy-introduction">
          <ol>
            <li>
              Cancellation before 30 days prior to check-in : No cancellation
              charges
            </li>
            <br />
            <li>
              For cancellation received between 30 days to 15 days prior to
              check-in : One night pro-rata cancellation charges will be levied
            </li>
            <br />
            <li>
              For cancellation received between 14 days till check-in :
              Cancellation charges will be levied for full period of reservation
            </li>
            <br />
            <li>
              Amendment/Postponement : 07 days prior to check in 1 night
              retention will be levied
            </li>
            <br />
            <li>No Show : 100% retention of the entire amount</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CancellationPolicy;
