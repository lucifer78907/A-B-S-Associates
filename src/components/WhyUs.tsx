import {
    FaRegClock,
    FaClipboardList,
    FaUserCheck,
    FaShieldAlt,
    FaUsers,
    FaChartLine
} from "react-icons/fa";

const whyChooseUs = [
    {
        id: 1,
        icon: <FaRegClock className="text-blue-600 text-3xl" />,
        title: "13+ Years of Experience",
        description:
            "Trusted expertise in Strategic Financial Planning, IPO Planning, Debt Syndication, Compliances, Audits, Tax Planning, Financial Advisory, and more since 2012."
    },
    {
        id: 2,
        icon: <FaClipboardList className="text-blue-600 text-3xl" />,
        title: "Comprehensive Services",
        description:
            "From compliance to strategic planning, we offer end-to-end financial and business solutions."
    },
    {
        id: 3,
        icon: <FaUserCheck className="text-blue-600 text-3xl" />,
        title: "Client-Centric Approach",
        description:
            "Tailored strategies crafted to align with your specific business needs and goals."
    },
    {
        id: 4,
        icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
        title: "Integrity & Confidentiality",
        description:
            "We strictly uphold ethical standards, confidentiality, and professional independence."
    },
    {
        id: 5,
        icon: <FaUsers className="text-blue-600 text-3xl" />,
        title: "Expert Team",
        description:
            "Team of 20+ professionals led by 5 partners with deep domain expertise across industries."
    },
    {
        id: 6,
        icon: <FaChartLine className="text-blue-600 text-3xl" />,
        title: "Growth-Focused Strategies",
        description:
            "We drive sustainable business growth by integrating compliance with long-term planning."
    }
];

export default function WhyUs() {
    return (
        <section className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-blue-600 text-center font-display mb-14">
                Why ABS?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {whyChooseUs.map(({ id, icon, title, description }) => (
                    <div
                        key={id}
                        className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 hover:shadow-lg transition duration-300"
                    >
                        <div className="mb-4 bg-blue-100 p-4 rounded-full inline-flex items-center justify-center">
                            {icon}
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">
                            {title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
