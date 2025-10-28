import React from 'react'

export default function Service() {
  return (
    <>
    <section id="services" className="section">
        <h2 className="header">Our Services</h2>
        <div className="flex flex-row flex-wrap justify-center">
          <div className="service-card m-5">
            <div className="service-icon">🛠️</div>
            <h3>Machine Repair</h3>
            <p>
              Expert repair services for all coffee machine brands. Quick
              diagnostics and genuine parts replacement.
            </p>
          </div>
          <div className="service-card m-5">
            <div className="service-icon">🔧</div>
            <h3>Maintenance</h3>
            <p>
              Regular maintenance packages to keep your machines running at peak
              performance.
            </p>
          </div>
          <div className="service-card m-5">
            <div className="service-icon">🛒</div>
            <h3>Sales</h3>
            <p>
              Wide range of commercial and domestic coffee machines from leading
              brands.
            </p>
          </div>
          <div className="service-card m-5">
            <div className="service-icon">📦</div>
            <h3>Installation</h3>
            <p>
              Professional installation service with complete setup and
              training.
            </p>
          </div>
          <div className="service-card m-5">
            <div className="service-icon">💼</div>
            <h3>Corporate Solutions</h3>
            <p>
              Customized coffee solutions for offices, hotels, and restaurants.
            </p>
          </div>
          <div className="service-card m-5">
            <div className="service-icon">📞</div>
            <h3>24/7 Support on</h3>
            <p className="text-gray-800">+91 78701 83270</p>
            <p>
              Round-the-clock customer support for emergencies and queries on .
            </p>
          </div>
        </div>
      </section>

    </>
  )
}
