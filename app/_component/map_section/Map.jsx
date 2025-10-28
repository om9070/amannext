import React from 'react'

export default function Map() {
  return (
    <>
     <mapsection className="mt-3">
        <iframe
          src="https://maps.google.com/maps?q=28.56107898625265,77.37497071369678&z=12&output=embed"
          width="100%"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="rounded-lg shadow-lg"
          referrerPolicy="no-referrer-when-downgrade"
          title="Delhi Map"
        ></iframe>
      </mapsection>
    </>
  )
}
