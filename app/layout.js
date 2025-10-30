import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./_component/navbar_section/Navbar";
import Footer from "./_component/footer_section/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.in"),
  title: {
    default:
      "Coffee & Vending Machine Sales and Service in Delhi NCR | Coffee & Tea Solutions",
    template: "%s | Coffee & Tea Solutions",
  },
  description:
    "We provide coffee machine, tea machine, hot & cold water machine, and lemon machine sales and services in Delhi NCR. Also offering coffee powder, tea premix, lemon powder, cappuccino, and more. Trusted vending solutions for offices, cafés, and businesses.",
  keywords: [
    "aonevendingmachine",
    "coffee machine Delhi",
    "Coffee machine repair delhi",
    "vending machine delhi ",
    "vending machine repair delhi",
    "coffee machine sale in delhi",
    "coffee machine service in delhi",
    "tea coffee soup vending machine price in delhi",
    "tea coffee vending machine repair & services in delhi",
    "coffee vending machine delhi",
    "cappuccino machine delhi",
  ],
  authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.in" }],
  openGraph: {
    title: "Coffee & Vending Machine Sales & Service in Delhi NCR",
    description:
      "Your trusted partner for coffee, tea, and vending machines in Delhi NCR. We also supply coffee premix, tea premix, lemon mix, and cappuccino products.",
    url: "https://www.aonevendingservice.in",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.in/home/hero1.png",
        width: 1200,
        height: 630,
        alt: "Coffee Machine Service in Delhi NCR",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coffee & Vending Machine Sales & Service in Delhi NCR",
    description:
      "Buy or service your coffee, tea, and vending machines in Delhi NCR. Get vending solutions, coffee premix, lemon powder, cappuccino and more.",
    images: ["https://www.aonevendingservice.in/home/hero1.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aonevendingservice.in",
  },
   icons: {
    icon: "/favicon.ico", // your custom favicon
    apple: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              // Local Business Schema
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: "Coffee & Tea Solutions",
                image: "https://www.aonevendingservice.in/logo.jpg",
                "@id": "https://www.aonevendingservice.in",
                url: "https://www.aonevendingservice.in",
                telephone: "+91-7870183270",
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
                priceRange: "₹₹",
                sameAs: [
                  "https://www.facebook.com/yourpage",
                  "https://www.instagram.com/yourpage",
                ],
                description:
                  "We provide coffee machine, tea machine, hot & cold water machine, and lemon machine sales and services in Delhi NCR. Also offering coffee powder, tea premix, lemon powder, cappuccino, and more.",
                areaServed: {
                  "@type": "Place",
                  name: "Delhi NCR",
                },
                serviceType: [
                  "Coffee Machine Sales delhi",
                  "Coffee Machine Service delhi",
                  "vending Machine in delhi",
                  "Hot & Cold Water Machine in delhi",
                  "Lemon Machine in delhi",
                  "coffee machine repair delhi",
                  "vending machine repair delhi"
                ],
              },
              // FAQ Schema
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What types of machines do you provide?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We provide coffee machines, tea machines, hot and cold water machines, and lemon machines for offices, cafés, and commercial spaces.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you offer machine installation services?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we provide complete installation and setup for all coffee and vending machines purchased from us.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Can I rent a coffee or tea machine instead of buying?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we offer rental options and annual maintenance contracts (AMC) for businesses and offices.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Do you supply coffee premix, tea premix, and lemon powder?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Yes, we supply high-quality coffee powder, tea premix, lemon premix, and cappuccino ingredients.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Which areas do you serve?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "We provide sales and service across Delhi, Noida, Gurgaon, Ghaziabad, and Faridabad.",
                    },
                  },
                ],
              },
            ]),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
