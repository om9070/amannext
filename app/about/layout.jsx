
export const metadata = {
    title: "About Us | Coffee & Tea Solutions - Coffee Machine Sales & Service Delhi NCR",
    description:
        "Learn more about Coffee & Tea Solutions — a trusted provider of coffee, tea, and vending machine sales and services in Delhi NCR. We specialize in coffee machines, tea machines, hot & cold water dispensers, lemon machines, and vending consumables like coffee premix, tea premix, lemon powder, and cappuccino.",
    keywords: [
        "about Coffee & Tea Solutions",
        "coffee machine company Delhi NCR",
        "tea vending service provider Delhi",
        "vending machine experts Delhi NCR",
        "coffee and tea premix supplier Delhi",
        "office vending solutions Delhi",
        "company history Coffee & Tea Solutions",
        "Delhi NCR coffee service company"
    ],
    authors: [{ name: "Coffee & Tea Solutions", url: "https://www.aonevendingservice.com" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        title: "About Coffee & Tea Solutions | Coffee Machine Sales & Service Delhi NCR",
        description: "Learn about Coffee & Tea Solutions, a trusted coffee and vending machine service provider in Delhi NCR.",
        url: "https://www.aonevendingservice.com/about",
        siteName: "Coffee & Tea Solutions",
        images: [
            {
                url: "https://www.aonevendingservice.com/brow/brow2.webp",
                width: 1200,
                height: 630,
                alt: "About Coffee & Tea Solutions",
            },
        ],
        locale: "en_IN",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "About Coffee & Tea Solutions | Coffee Machine Service Delhi NCR",
        description: "Know more about our journey as Delhi NCR’s trusted coffee and vending machine sales and service provider.",
        images: ["https://www.aonevendingservice.com/brow/brow2.webp"],
    },
};



export default function PageRoot({ children }) {
    return (
        <>
            <html lang="en">

                <head>
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify([
                                {
                                    "@context": "https://schema.org",
                                    "@type": "Organization",
                                    name: "Coffee & Tea Solutions",
                                    url: "https://www.aonevendingservice.com",
                                    logo: "https://www.aonevendingservice.com/logo.jpg",
                                    sameAs: [
                                        "https://www.facebook.com/yourpage",
                                        "https://www.instagram.com/yourpage",
                                    ],
                                    description:
                                        "Coffee & Tea Solutions is a leading provider of coffee and tea vending machine sales and service in Delhi NCR. We specialize in high-quality vending solutions for offices, cafés, and commercial setups.",
                                    foundingDate: "2019",
                                    founder: {
                                        "@type": "Person",
                                        name: "Aman kumar",
                                    },
                                    contactPoint: {
                                        "@type": "ContactPoint",
                                        telephone: "+91-7870183270",
                                        contactType: "Customer Service",
                                        areaServed: "IN",
                                        availableLanguage: "English",
                                    },
                                },
                                {
                                    "@context": "https://schema.org",
                                    "@type": "WebPage",
                                    name: "About Coffee & Tea Solutions",
                                    url: "https://www.aonevendingservice.com/about",
                                    description:
                                        "Coffee & Tea Solutions offers top-quality coffee machines, tea machines, and vending services in Delhi NCR. Learn about our experience, mission, and dedication to quality service.",
                                },
                            ]),
                        }}
                    />

                </head>
                {children}
            </html>
        </>
    )
}