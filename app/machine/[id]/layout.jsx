import { Children } from "react";


export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.in"),
  title: "Our Machines | Coffee & Tea Solutions - Coffee & Vending Machine Delhi NCR",
  description:
    "Explore Coffee & Tea Solutions’ range of coffee machines, tea machines, hot & cold water dispensers, and lemon machines for offices, cafés, and businesses in Delhi NCR.",
  openGraph: {
    title: "Our Machines | Coffee & Tea Solutions",
    description:
      "Browse our selection of coffee and tea machines, vending solutions, and accessories in Delhi NCR.",
    url: "https://www.aonevendingservice.in/machine",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.in/classic4/classic1.jpeg",
        width: 1200,
        height: 630,
        alt: "Coffee & Tea Machines",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Machines | Coffee & Tea Solutions",
    description:
      "Explore coffee and tea vending machines, hot & cold water dispensers, and lemon machines in Delhi NCR.",
    images: ["https://www.aonevendingservice.in/classic4/classic1.jpeg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.aonevendingservice.in/machine" },
};

export default function MachineListPage({ Children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for Machine List */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              name: "Our Machines | Coffee & Tea Solutions",
              description:
                "Coffee & Tea Solutions provides a wide range of coffee machines, tea machines, hot & cold water dispensers, and lemon machines in Delhi NCR. Explore our offerings for offices, cafés, and commercial spaces.",
              url: "https://www.aonevendingservice.in/machine",
              publisher: {
                "@type": "Organization",
                name: "Coffee & Tea Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.aonevendingservice.in/logo.jpg",
                },
              },
            }),
          }}
        />
      </head>
      <body>
        {Children}
      </body>
    </html>
  );
}
