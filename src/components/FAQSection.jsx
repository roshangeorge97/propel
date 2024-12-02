import React from 'react';

const FAQSection = () => (
  <section className="faq-section">
    <div className="container">
      <h2 className="section-title">Still Have Questions?</h2>
      <div className="faq-container">
        <details className="faq-item">
          <summary>What is Propel?</summary>
          <p>Propel is a platform...</p>
        </details>
        <details className="faq-item">
          <summary>How do I invest?</summary>
          <p>You can invest by...</p>
        </details>
      </div>
    </div>
  </section>
);

export default FAQSection;