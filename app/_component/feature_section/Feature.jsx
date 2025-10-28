import React from 'react'

export default function Feature() {
  return (
    <>
     <section id="features" className="section">
        <h2 className="header">Why Choose Us</h2>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">⚡</div>
            <h3>Fast Service</h3>
            <p>Same-day service available across Delhi NCR</p>
          </div>
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">✅</div>
            <h3>Certified Technicians</h3>
            <p>Highly trained and experienced professionals</p>
          </div>
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">💰</div>
            <h3>Best Prices</h3>
            <p>Competitive pricing with no hidden charges</p>
          </div>
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">🏆</div>
            <h3>Quality Guarantee</h3>
            <p>All repairs come with a warranty</p>
          </div>
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">🔄</div>
            <h3>Genuine Parts</h3>
            <p>Only authentic spare parts used</p>
          </div>
          <div className="feature-item m-5 w-1/4">
            <div className="feature-icon">😊</div>
            <h3>Customer Satisfaction</h3>
            <p>1000+ happy customers across NCR</p>
          </div>
        </div>
      </section>
    </>
  )
}
