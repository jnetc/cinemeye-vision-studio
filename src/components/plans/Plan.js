import React from 'react';

const Plan = ({ children }) => {
  return (
    <div className="plan">
      <span id="plan_pop">most popular</span>
      <span className="plan_name">Light</span>
      <h5>For personal projects</h5>
      <span className="plan_price">1550€</span>
      <button type="button" className="plan_btn">
        Select
      </button>
      <button type="button" className="plan_mob-btn">
        SHOW FEATURES
      </button>
      <section>{children}</section>
    </div>
  );
};

export default Plan;
