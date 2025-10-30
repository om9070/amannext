
export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.in"),
  title: {
    default: "Contact Us | Coffee & Tea Solutions - Coffee Machine Sales & Service Delhi NCR",
    template: "%s | Coffee & Tea Solutions",
  },
  description:
    "Get in touch with Coffee & Tea Solutions for coffee machine, tea machine, and vending machine sales and services in Delhi NCR. Contact us for inquiries, installation, or support.",
  authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.in" }],
  openGraph: {
    title: "Contact Coffee & Tea Solutions | Coffee & Vending Machine Service Delhi NCR",
    description:
      "Reach out to Coffee & Tea Solutions for coffee, tea, and vending machine services in Delhi NCR. Contact for sales, support, and service inquiries.",
    url: "https://www.aonevendingservice.in/contact",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.in/classic3/classic1.jpeg",
        width: 1200,
        height: 630,
        alt: "Contact Coffee & Tea Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Coffee & Tea Solutions | Delhi NCR",
    description:
      "Get in touch with Coffee & Tea Solutions for coffee and vending machine sales and service in Delhi NCR.",
    images: ["https://www.aonevendingservice.in/classic3/classic1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aonevendingservice.in/contact",
  },
};

export default function ContactLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Coffee & Tea Solutions",
              url: "https://www.aonevendingservice.in",
              logo: "https://www.aonevendingservice.in/logo.jpg",
              telephone: "+91-7870183270",
              email: "info@aonevendingservice.in",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sector 12, Dwarka",
                addressLocality: "Delhi",
                addressRegion: "Delhi NCR",
                postalCode: "110075",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "28.6139",
                longitude: "77.2090",
              },
              openingHours: "Mo-Sa 09:00-19:00",
              description:
                "Contact Coffee & Tea Solutions for coffee machine, tea machine, and vending machine sales and services in Delhi NCR. Get sales, installation, and support.",
              areaServed: "Delhi NCR",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
