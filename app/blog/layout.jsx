
export const metadata = {
  metadataBase: new URL("https://www.aonevendingservice.in"),
  title: {
    default: "Blog | Coffee & Tea Solutions - Coffee & Vending Machine Insights Delhi NCR",
    template: "%s | Coffee & Tea Solutions",
  },
  description:
    "Read the latest articles and insights from Coffee & Tea Solutions about coffee machines, tea machines, vending services, office solutions, and product tips in Delhi NCR.",
  authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.in" }],
  openGraph: {
    title: "Blog | Coffee & Tea Solutions",
    description:
      "Explore our blog for tips, updates, and insights on coffee, tea, and vending machines in Delhi NCR.",
    url: "https://www.aonevendingservice.in/blog",
    siteName: "Coffee & Tea Solutions",
    images: [
      {
        url: "https://www.aonevendingservice.in/home/banner.png",
        width: 1200,
        height: 630,
        alt: "Coffee & Tea Solutions Blog",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Coffee & Tea Solutions",
    description:
      "Stay updated with Coffee & Tea Solutions blog: coffee machine tips, vending services, and product insights in Delhi NCR.",
    images: ["https://www.aonevendingservice.in/home/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.aonevendingservice.in/blog",
  },
};

export default function BlogLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Structured Data for BlogPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Coffee & Tea Solutions Blog",
              url: "https://www.aonevendingservice.in/blog",
              description:
                "Read the latest articles and insights from Coffee & Tea Solutions about coffee machines, tea machines, vending services, and office solutions in Delhi NCR.",
              publisher: {
                "@type": "Organization",
                name: "Coffee & Tea Solutions",
                logo: {
                  "@type": "ImageObject",
                  url: "https://www.aonevendingservice.in/logo.jpg",
                },
              },
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://www.aonevendingservice.in/blog",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
