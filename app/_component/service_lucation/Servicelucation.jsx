import React from 'react'

export default function Servicelucation() {
  return (
    <>
     <section id="locations" className="section">
        <h2 className="header">Service Locations</h2>
        <p
          style={{
            textAlign: "center",
            marginBottom: "2rem",
            fontSize: "1.1rem",
          }}
        >
          We provide service across all major areas in Delhi NCR
        </p>
        <div className="locations-grid">
          <div className="location-card">
            <h3>📍 Delhi</h3>
            <p>Connaught Place, Dwarka, Rohini, Saket, Karol Bagh</p>
          </div>
          <div className="location-card">
            <h3>📍 Noida</h3>
            <p>Sector 18, Sector 62, Greater Noida, Noida Extension</p>
          </div>
          <div className="location-card">
            <h3>📍 Gurgaon</h3>
            <p>Cyber City, DLF Phase 1-5, Golf Course Road, Sohna Road</p>
          </div>
          <div className="location-card">
            <h3>📍 Faridabad</h3>
            <p>NIT, Sector 16, Old Faridabad, Greater Faridabad</p>
          </div>
          <div className="location-card">
            <h3>📍 Ghaziabad</h3>
            <p>Indirapuram, Vaishali, Crossings Republik, Raj Nagar</p>
          </div>
          <div className="location-card">
            <h3>📍 South Delhi</h3>
            <p>Vasant Kunj, Hauz Khas, Greater Kailash, Defence Colony</p>
          </div>
        </div>
      </section>
    </>
  )
}
