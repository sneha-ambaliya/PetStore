import React from 'react'

const footerLinks = [
    {
        title: "Products",
        links: [
            "Food & Treats",
            "Toys",
            "Beds & Furniture",
            "Outdoor Supplies",
            "Clothing",
            "Aquariums",
            "Rocks & Decorations",
        ],
    },
    {
        title: "Shop by Pet",
        links: ["Dogs", "Cats", "Birds", "Fish"],
    },
    {
        title: "Our Services",
        links: ["Grooming", "Boarding"],
    },
    {
        title: "Our Company",
        links: ["Locations & Hours", "About Us"],
    },
]

const Footer = () => {
    return (
        <footer className="bg-[#3B3735] text-white py-10 px-6 cursor-pointer" id="footer">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h3 className="font-bold text-lg mb-4">{section.title}</h3>
                        <ul className="space-y-2 text-sm text-gray-200">
                            {section.links.map((link, idx) => (
                                <li key={idx} className="hover:text-white transition">{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </footer>
    )
}

export default Footer
