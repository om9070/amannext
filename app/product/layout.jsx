

export const metadata = {
    title: "Best Coffee Machines in Delhi NCR | Buy Espresso & Drip Coffee Makers",
    description:
        "Explore top-rated coffee machines in Delhi NCR — from espresso makers to drip brewers. Compare prices, reviews, and get free delivery across Delhi, Noida & Gurgaon.",
    openGraph: {
        title:
            "Best Coffee Machines in Delhi NCR | Buy Espresso & Drip Coffee Makers",
        description:
            "Shop the best coffee machines from leading brands in Delhi NCR. Find espresso, French press, and smart coffee makers with doorstep delivery.",
        url: "https://aonevendingservice.com/product",
        siteName: "YourBrand",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title:
            "Top Coffee Machines in Delhi NCR – Buy Online | YourBrand",
        description:
            "Browse a curated list of the best espresso and drip coffee makers in Delhi, Noida, and Gurgaon with competitive prices and fast delivery.",
    },
    alternates: {
        canonical: "https://aonevendingservice.com/product",
    },
};



export default function FAQLayout({ children }) {

    const productSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Coffee Machines in Delhi NCR",
        description:
            "Explore the best espresso and drip coffee makers available in Delhi NCR. Compare features, prices, and reviews.",
        itemListElement: [
            {
                "@type": "Product",
                position: 1,
                name: "Philips 7000 Series Espresso Machine",
                url: "https://aonevendingservice.com/product",
                image: "https://aonevendingservice.com/neo3/neo3.jpeg",
                brand: { "@type": "Brand", name: "Philips" },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "24999",
                    availability: "https://schema.org/InStock",
                    url: "https://aonevendingservice.com/product",
                },
            },
            {
                "@type": "Product",
                position: 2,
                name: "Nespresso Vertuo Coffee Machine",
                url: "https://aonevendingservice.com/product",
                image: "https://aonevendingservice.com/neo4/neo2.jpeg",
                brand: { "@type": "Brand", name: "Nespresso" },
                offers: {
                    "@type": "Offer",
                    priceCurrency: "INR",
                    price: "18999",
                    availability: "https://schema.org/InStock",
                    url: "https://aonevendingservice.com/product",
                },
            },
        ],
    };

    return (
        <html lang="en">
            <head>
                {/* ✅ JSON-LD Structured Data for FAQPage */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(productSchema),
                    }}
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
