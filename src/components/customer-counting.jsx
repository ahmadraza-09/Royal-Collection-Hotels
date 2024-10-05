import React from "react";
import "../css/cutomer-counting.css";
import CountUp from "react-countup";

const CustomerCounting = () => {
  return (
    <div className="customer-counting-section">
      <div className="customer-counting-box">
        <h2>
          <CountUp start={0} end={500} duration={5} />K
        </h2>
        <h2>Happy Customers</h2>
      </div>
      <div className="customer-counting-box">
        <h2>
          <CountUp start={0} end={14} duration={5} />
        </h2>
        <h2>Destination Places</h2>
      </div>
      <div className="customer-counting-box">
        <h2>
          <CountUp start={0} end={40} duration={5} />
        </h2>
        <h2>Hotels</h2>
      </div>
      <div className="customer-counting-box">
        <h2>
          <CountUp start={0} end={40} duration={5} />
        </h2>
        <h2>Hosted Websites</h2>
      </div>
    </div>
  );
};

export default CustomerCounting;
