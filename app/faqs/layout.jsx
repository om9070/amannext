// app/faq/layout.js

export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.com"),
  title: {
    default: "FAQ | Coffee & Tea Solutions - Coffee Machine Sales & Service Delhi NCR",
    template: "%s | Coffee & Tea Solutions",
  },
  description:
    "Find answers to frequently asked questions about Coffee & Tea Solutions. Learn about coffee machine sales, vending services, installation, and maintenance in Delhi NCR.",
  authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.com" }],
  openGraph: {
    title: "FAQ | Coffee & Tea Solutions",
    description:
      "Frequently asked questions about Coffee & Tea Solutions services, vending machines, coffee & tea products, and maintenance in Delhi NCR.",
    url: "https://www.aonevendingservice.com/faqs",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.com/neo3/neo1.jpeg",
        width: 1200,
        height: 630,
        alt: "FAQ Coffee & Tea Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ | Coffee & Tea Solutions",
    description:
      "Find answers to common questions about Coffee & Tea Solutions: coffee machines, tea machines, vending services, and products in Delhi NCR.",
    images: ["https://www.aonevendingservice.com/neo3/neo1.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aonevendingservice.com/faqs",
  },
};

export default function FAQLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
