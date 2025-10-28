// app/service-area/page.js

export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.com"),
  title: "Service Areas | Coffee & Tea Solutions - Delhi NCR Coffee & Vending Services",
  description:
    "Coffee & Tea Solutions provides coffee machine, tea machine, hot & cold water machine, and vending services across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad. Contact us for sales, installation, and maintenance.",
  authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.com" }],
  openGraph: {
    title: "Service Areas | Coffee & Tea Solutions",
    description:
      "Serving Delhi NCR with coffee and tea vending machine sales and service, including installation, AMC, and product supply.",
    url: "https://www.aonevendingservice.com/service-area",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.com/home/service.png",
        width: 1200,
        height: 630,
        alt: "Coffee & Tea Solutions Service Areas Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Service Areas | Coffee & Tea Solutions",
    description:
      "Coffee & Tea Solutions provides coffee and vending machine services across Delhi NCR, including installation, maintenance, and product supply.",
    images: ["https://www.aonevendingservice.com/home/service.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aonevendingservice.com/service-area" },
};

export default function ServiceAreaPage({children}) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD LocalBusiness / Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              serviceType: "Coffee & Tea Machine Sales and Service",
              provider: {
                "@type": "LocalBusiness",
                name: "Coffee & Tea Solutions",
                image: "https://www.aonevendingservice.com/logo.jpg",
                telephone: "+91-7870183270",
                email: "info@aonevendingservice.com",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Sector 12, Dwarka",
                  addressLocality: "Delhi",
                  addressRegion: "Delhi NCR",
                  postalCode: "110075",
                  addressCountry: "IN",
                },
                areaServed: ["Delhi", "Noida", "Gurgaon", "Ghaziabad", "Faridabad"],
                openingHours: "Mo-Sa 09:00-19:00",
              },
              description:
                "Providing coffee machines, tea machines, hot & cold water dispensers, lemon machines, and vending services across Delhi NCR.",
            }),
          }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
