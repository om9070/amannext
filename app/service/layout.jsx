export const metadata = {
    title:
        "Professional Services in Delhi NCR | Reliable & Affordable Solutions",
    description:
        "Looking for trusted professional services in Delhi NCR? We provide expert solutions across Delhi, Noida, and Gurgaon — with quick response and affordable pricing.",
    openGraph: {
        title:
            "Top-Rated Services in Delhi NCR | Expert Solutions for Home & Business",
        description:
            "Discover high-quality, affordable services available across Delhi, Noida, and Gurgaon. Book trusted experts with fast delivery and guaranteed satisfaction.",
        url: "https://aonevendingservice.com/service",
        siteName: "YourBrand",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Top Services in Delhi NCR | Reliable & Affordable | YourBrand",
        description:
            "Book trusted experts in Delhi NCR for home and business services — quick, reliable, and affordable.",
    },
    alternates: {
        canonical: "https://aonevendingservice.com/service",
    },
};

export default function ServicesPage({ children }) {
    return (
        <html lang="en">
            <head>
                {/* ✅ JSON-LD Structured Data for FAQPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Service",
                            name: "Professional Home & Business Services in Delhi NCR",
                            provider: {
                                "@type": "Organization",
                                name: "YourBrand",
                                url: "https://aonevendingservice.com",
                                logo: "https://aonevendingservice.com/logo.png",
                            },
                            areaServed: [
                                {
                                    "@type": "City",
                                    name: "Delhi",
                                },
                                {
                                    "@type": "City",
                                    name: "Noida",
                                },
                                {
                                    "@type": "City",
                                    name: "Gurgaon",
                                },
                            ],
                            serviceType: [
                                "AC Installation",
                                "Home Cleaning",
                                "Electrical Repair",
                                "Software Development",
                            ],
                            description:
                                "YourBrand offers expert professional services across Delhi NCR — including AC repair, cleaning, electrical maintenance, and IT solutions.",
                            availableChannel: {
                                "@type": "ServiceChannel",
                                serviceLocation: {
                                    "@type": "Place",
                                    name: "Delhi NCR",
                                },
                                availableLanguage: ["English", "Hindi"],
                            },
                        }),
                    }}
                />

            </head>
            <body>{children}</body>
        </html>
    );
}