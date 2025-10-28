"use client"

import { useState } from 'react';
import { Coffee, Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import Image from 'next/image';

// Sample blog data
const blogPosts = [
    {
        id: 1,
        title: "Top 5 Commercial Coffee Machines for Delhi NCR Offices in 2025",
        slug: "top-5-commercial-coffee-machines-delhi-ncr",
        excerpt: "Discover the best commercial coffee machines perfect for your office in Delhi NCR. From bean-to-cup to capsule machines, find the right fit for your workplace.",
        content: `When it comes to keeping your Delhi NCR office energized and productive, having the right coffee machine is essential. We've compiled a list of the top 5 commercial coffee machines that are perfect for the Indian market.

**1. La Marzocco Linea Mini**
Perfect for boutique offices and co-working spaces in Gurgaon and Noida. This semi-automatic espresso machine delivers authentic Italian coffee with precision temperature control.

**2. Jura GIGA X8 Professional**
Ideal for large corporate offices in Connaught Place and Cyber City. This fully automatic machine can serve up to 150 cups daily with minimal maintenance.

**3. Franke A400**
A workhorse for high-traffic offices in Delhi's business districts. With its touch screen interface and multiple beverage options, it's perfect for diverse taste preferences.

**4. Nespresso Professional Momento**
Great for startups and SMEs across Delhi NCR. Compact, reliable, and offers consistent quality with capsule convenience.

**5. Schaerer Coffee Joy**
Best for premium offices in Golf Course Road and Saket. Offers exceptional coffee quality with Swiss engineering and easy operation.

**Factors to Consider:**
- Daily cup capacity
- Maintenance requirements
- Water quality in Delhi NCR
- Budget and ROI
- After-sales service availability

Contact us for a free consultation and demo at your Delhi NCR office!`,
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=800&q=80",
        author: "Rajesh Kumar",
        date: "2025-10-15",
        readTime: "5 min read",
        category: "Equipment Guide",
        tags: ["Commercial Machines", "Office Coffee", "Delhi NCR"]
    },
    {
        id: 2,
        title: "Coffee Machine Maintenance Tips for Delhi's Hard Water",
        slug: "coffee-machine-maintenance-delhi-hard-water",
        excerpt: "Delhi NCR's hard water can damage your coffee machine. Learn essential maintenance tips to extend your equipment's lifespan and maintain coffee quality.",
        content: `Delhi NCR is notorious for its hard water, which can significantly impact your coffee machine's performance and longevity. Here's your comprehensive guide to protecting your investment.

**Understanding Delhi's Water Problem**
Delhi's water has high TDS (Total Dissolved Solids) levels, often exceeding 500 ppm. This leads to scale buildup, affecting taste and machine functionality.

**Essential Maintenance Steps:**

**1. Install a Water Softener**
A must-have for any coffee machine in Delhi NCR. Invest in a quality water softener or RO system to remove minerals before they reach your machine.

**2. Regular Descaling**
- Perform descaling every 2-3 months (more frequently in areas like Faridabad and Noida)
- Use manufacturer-approved descaling solutions
- Never skip scheduled descaling cycles

**3. Daily Cleaning Routine**
- Clean portafilters and group heads daily
- Empty and clean drip trays
- Wipe down exterior surfaces
- Check water levels and quality

**4. Weekly Deep Clean**
- Backflush espresso machines
- Clean milk systems thoroughly
- Check and clean water filters
- Inspect rubber gaskets and seals

**5. Monthly Professional Service**
Schedule monthly maintenance with certified technicians familiar with Delhi NCR conditions.

**Warning Signs of Scale Buildup:**
- Slower water flow
- Inconsistent temperature
- Strange tastes in coffee
- Unusual noises during operation

**Cost of Neglect:**
Ignoring maintenance in Delhi's hard water conditions can reduce your machine's lifespan by 50% and lead to expensive repairs.

**Our Service Coverage:**
We provide maintenance services across Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad with same-day support.`,
        image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=800&q=80",
        author: "Priya Sharma",
        date: "2025-10-20",
        readTime: "7 min read",
        category: "Maintenance",
        tags: ["Maintenance", "Hard Water", "Tips"]
    },
    {
        id: 3,
        title: "Best Coffee Beans for Your Machine in Delhi NCR",
        slug: "best-coffee-beans-delhi-ncr",
        excerpt: "Choosing the right coffee beans can make or break your coffee experience. Explore the best coffee bean options available in Delhi NCR for your machine.",
        content: `The quality of your coffee doesn't just depend on your machine – the beans you use are equally important. Here's your guide to sourcing the best coffee beans in Delhi NCR.

**Top Coffee Bean Suppliers in Delhi NCR:**

**1. Blue Tokai Coffee Roasters**
Location: Multiple locations across Delhi NCR
Specialty: Single-origin Indian beans
Best For: Pour-over and filter coffee machines

**2. Sleepy Owl**
Location: Available online and select stores
Specialty: Cold brew blends and arabica beans
Best For: Cold brew machines and French press

**3. Araku Coffee**
Location: Premium stores in Delhi
Specialty: Organic tribal coffee from Araku Valley
Best For: Espresso machines

**4. Third Wave Coffee**
Location: Cafes in Gurgaon and Delhi
Specialty: Fresh roasted beans, multiple origins
Best For: All machine types

**Bean Selection Guide:**

**For Espresso Machines:**
- Medium to dark roast
- Arabica-Robusta blend (80:20)
- Beans from Coorg or Chikmagalur

**For Filter Coffee Machines:**
- Light to medium roast
- 100% Arabica
- South Indian varieties

**For Bean-to-Cup Machines:**
- Medium roast
- Low acidity beans
- Consistent grind size

**Storage Tips for Delhi's Climate:**
- Use airtight containers
- Store in cool, dry place (AC recommended)
- Avoid direct sunlight
- Buy in smaller quantities (max 2 weeks supply)
- Don't refrigerate

**Freshness Matters:**
Always check roast dates. Use beans within 2-4 weeks of roasting for optimal flavor.

**Cost Considerations:**
Quality beans range from ₹500-1500/kg in Delhi NCR. While premium beans cost more, they significantly improve your coffee experience.

We can help you source and recommend the best beans for your specific machine and taste preferences!`,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&q=80",
        author: "Amit Verma",
        date: "2025-10-22",
        readTime: "6 min read",
        category: "Coffee Guide",
        tags: ["Coffee Beans", "Local Suppliers", "Quality"]
    },
    {
        id: 4,
        title: "ROI Analysis: Investing in Office Coffee Machines",
        slug: "roi-office-coffee-machines-delhi",
        excerpt: "Is an office coffee machine worth the investment? We break down the numbers for Delhi NCR businesses and show you the real cost savings.",
        content: `Many Delhi NCR businesses wonder whether investing in a quality coffee machine makes financial sense. Let's break down the numbers.

**The Current Scenario:**

**Option A: Daily Cafe Runs**
- Average cost per coffee: ₹150-250
- 20 employees × 2 coffees daily = 40 coffees
- Monthly cost: ₹1,20,000 - ₹2,00,000
- Annual cost: ₹14,40,000 - ₹24,00,000

**Option B: Office Coffee Machine**
- Machine cost: ₹1,50,000 - ₹5,00,000 (one-time)
- Per cup cost: ₹15-25
- Monthly cost: ₹12,000 - ₹20,000
- Annual cost: ₹1,44,000 - ₹2,40,000
- Machine maintenance: ₹30,000/year

**Total First Year Investment:**
₹1,80,000 - ₹7,70,000

**Annual Savings:**
₹12,60,000 - ₹21,60,000

**Break-Even Point:**
1-4 months depending on machine choice

**Hidden Benefits:**

**1. Time Savings**
- No more 15-minute cafe runs
- Estimated productivity gain: 2-3 hours/employee/month
- Value: ₹50,000+ monthly for a 20-person team

**2. Employee Satisfaction**
- 78% of employees cite good coffee as a workplace perk
- Helps with recruitment and retention
- Reduces turnover costs

**3. Client Impressions**
- Professional image
- Better meeting experiences
- Especially important for Gurgaon and South Delhi offices

**4. Customization**
- Accommodate different preferences
- Dietary requirements (oat milk, sugar-free)
- Consistent quality

**Machine Recommendations by Office Size:**

**Small (5-15 employees):**
Budget: ₹50,000 - ₹1,50,000
ROI: 2-3 months

**Medium (15-50 employees):**
Budget: ₹2,00,000 - ₹4,00,000
ROI: 1-2 months

**Large (50+ employees):**
Budget: ₹4,00,000 - ₹8,00,000
ROI: 1 month

**Financing Options:**
We offer flexible payment plans and rental options for Delhi NCR businesses, making it easier to manage cash flow.

**Conclusion:**
For any office with 10+ employees in Delhi NCR, a quality coffee machine pays for itself in under 6 months while providing significant intangible benefits.

Contact us for a customized ROI analysis for your business!`,
        image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
        author: "Neha Gupta",
        date: "2025-10-25",
        readTime: "8 min read",
        category: "Business",
        tags: ["ROI", "Business", "Cost Analysis"]
    },
    {
        id: 5,
        title: "Emergency Coffee Machine Repair Services in Delhi NCR",
        slug: "emergency-coffee-machine-repair-delhi",
        excerpt: "Machine breakdown during peak hours? Learn about our 24/7 emergency repair services across Delhi NCR and how to handle common coffee machine emergencies.",
        content: `A coffee machine breakdown during peak office hours can be a nightmare. Here's everything you need to know about emergency repairs in Delhi NCR.

**Our Emergency Service Coverage:**

**Response Time Commitments:**
- Central Delhi: 2-3 hours
- Gurgaon: 2-4 hours
- Noida: 2-4 hours
- Faridabad: 3-5 hours
- Ghaziabad: 3-5 hours

**24/7 Hotline: +91-XXXX-XXXXXX**

**Common Emergencies We Handle:**

**1. No Power/Won't Turn On**
- Electrical issues
- Fuse problems
- Power board failures
- Usually fixed within 1-2 hours

**2. Water Leaks**
- Seal failures
- Pipe damage
- Tank issues
- Critical - requires immediate attention

**3. No Coffee Dispensing**
- Grinder jams
- Brewing unit failures
- Pump issues
- Often resolved on-site

**4. Error Codes**
- System diagnostics
- Sensor failures
- Software resets
- Remote troubleshooting available

**5. Poor Coffee Quality**
- Temperature issues
- Pressure problems
- Scale buildup
- Same-day resolution

**DIY Troubleshooting (Before Calling):**

**Step 1: Basic Checks**
- Power connection secure?
- Water tank filled?
- Coffee beans loaded?
- Drip tray empty?

**Step 2: Restart Protocol**
- Turn off machine
- Unplug for 30 seconds
- Check for error messages
- Restart and test

**Step 3: Quick Fixes**
- Clean coffee grounds drawer
- Check water filter
- Ensure milk container sealed
- Clean dispensing spouts

**When to Call Immediately:**
- Electrical burning smell
- Continuous water leakage
- Loud grinding/mechanical noises
- Error codes won't clear
- No hot water at all

**Our Emergency Service Includes:**
- Free diagnostics
- On-site repairs (when possible)
- Genuine spare parts
- 90-day warranty on repairs
- Temporary loaner machines (for contracts)

**Preventive Measures:**
- Schedule regular maintenance
- Keep emergency contact visible
- Maintain spare parts inventory
- Train staff on basic troubleshooting

**Service Contracts:**
Our annual maintenance contracts include:
- Quarterly preventive maintenance
- Priority emergency response
- Free parts replacement (wear & tear)
- Loaner machine during repairs
- 20% discount on emergency calls

**Cost Structure:**
- Emergency call-out: ₹1,500 (adjustable against repair)
- Hourly labor: ₹800-1,200
- Parts: As per requirement
- Contract customers: No call-out fees

**Spare Parts Inventory:**
We maintain a comprehensive inventory of spare parts for all major brands across our Delhi NCR warehouses, ensuring quick turnaround times.

**Customer Testimonials:**
"Our machine broke down at 9 AM on Monday. The team arrived by 11 AM and had us up and running by lunch. Saved our day!" - TechCorp, Cyber City

Don't let a coffee machine emergency disrupt your business. Save our emergency number and ensure your team knows how to reach us!`,
        image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
        author: "Vikram Singh",
        date: "2025-10-27",
        readTime: "6 min read",
        category: "Service",
        tags: ["Emergency", "Repair", "24/7 Service"]
    }
];

const categories = ["All", "Equipment Guide", "Maintenance", "Coffee Guide", "Business", "Service"];

export default function CoffeeBlog() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedPost, setSelectedPost] = useState(null);

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
        return matchesCategory && matchesSearch;
    });

    if (selectedPost) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50">
                {/* Header */}
                <header className="bg-gradient-to-r from-amber-900 to-orange-800 text-white shadow-lg">
                    <div className="max-w-6xl mx-auto px-4 py-6">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Coffee className="w-8 h-8" />
                                <div>
                                    <h1 className="text-2xl font-bold">Delhi NCR Coffee Solutions</h1>
                                    <p className="text-amber-100 text-sm">Expert Coffee Machine Service & Sales</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="px-4 py-2 bg-white text-amber-900 rounded-lg font-semibold hover:bg-amber-100 transition-colors"
                            >
                                ← Back to Blog
                            </button>
                        </div>
                    </div>
                </header>

                {/* Blog Post */}
                <article className="max-w-4xl mx-auto px-4 py-12">
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <Image
                            src={selectedPost.image}        // your image URL
                            alt={selectedPost.title}        // alt text for SEO
                            width={1200}                    // desired width
                            height={500}                    // desired height
                            className="w-full h-96 object-cover"  // Tailwind styling
                            sizes="(max-width: 768px) 100vw, 50vw"  // responsive sizes
                            priority={false}                // true if you want to preload
                        />
                        <div className="p-8">
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                                <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full font-semibold">
                                    {selectedPost.category}
                                </span>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    {new Date(selectedPost.date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {selectedPost.readTime}
                                </div>
                            </div>

                            <h1 className="text-4xl font-bold text-gray-900 mb-4">
                                {selectedPost.title}
                            </h1>

                            <p className="text-lg text-gray-600 mb-6 pb-6 border-b">
                                By {selectedPost.author}
                            </p>

                            <div className="prose prose-lg max-w-none">
                                {selectedPost.content.split('\n\n').map((paragraph, idx) => {
                                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                                        return (
                                            <h3 key={idx} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                                                {paragraph.replace(/\*\*/g, '')}
                                            </h3>
                                        );
                                    }
                                    return (
                                        <p key={idx} className="text-gray-700 mb-4 leading-relaxed">
                                            {paragraph.split('**').map((part, i) =>
                                                i % 2 === 0 ? part : <strong key={i}>{part}</strong>
                                            )}
                                        </p>
                                    );
                                })}
                            </div>

                            <div className="mt-8 pt-8 border-t">
                                <div className="flex flex-wrap gap-2">
                                    {selectedPost.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-1"
                                        >
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <>

            {/* Blog Section */}
            <div className="max-w-7xl mx-auto px-4 pt-25">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Coffee Machine Blog
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Expert advice, maintenance tips, and industry insights for coffee enthusiasts and business owners in Delhi NCR
                    </p>
                </div>

                {/* Search Bar */}
                <div className="mb-8">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-amber-500 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category
                                ? 'bg-amber-600 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-amber-100 shadow'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                            onClick={() => setSelectedPost(post)}
                        >
                            {/* <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            /> */}

                            <div className="relative w-full h-48">
  <Image
    src={post.image}          // dynamic image URL
    alt={post.title}          // alt text
    fill                      // makes image fill the parent div
    className="object-cover"  // maintains aspect ratio and covers container
  />
</div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-semibold">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                                        <Clock className="w-4 h-4" />
                                        {post.readTime}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-4 border-t">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="w-4 h-4" />
                                        {new Date(post.date).toLocaleDateString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            year: 'numeric'
                                        })}
                                    </div>
                                    <div className="flex items-center gap-2 text-amber-600 font-semibold hover:gap-3 transition-all">
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {filteredPosts.length === 0 && (
                    <div className="text-center py-12">
                        <Coffee className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <p className="text-xl text-gray-600">
                            No articles found. Try a different search or category.
                        </p>
                    </div>
                )}
            </div>

        </>

        // </div>
    );
}