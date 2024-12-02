import React from 'react';

const HowToInvest = () => (
  <section className="investment-process-section">
    <div className="container">
      <h2 className="section-title">How to Invest</h2>
      <div className="process-grid">
        {[
          { number: "1", text: "Sign Up" },
          { number: "2", text: "Browse Investments" },
          { number: "3", text: "Make an Investment" },
          { number: "4", text: "Hold or Sell" }
        ].map((step) => (
          <div key={step.number} className="process-step">
            <div className="step-number">{step.number}</div>
            <div className="step-text">{step.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowToInvest;