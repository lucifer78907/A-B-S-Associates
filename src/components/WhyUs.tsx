// Import these icons from react-icons
import { FaRegClock, FaClipboardList, FaUserCheck, FaShieldAlt, FaUsers, FaChartLine } from "react-icons/fa";

const whyChooseUs = [
    {
        id: 1,
        icon: <FaRegClock className="text-blue-600 text-3xl" />,
        title: "13+ Years of Experience",
        description: "Trusted expertise in Strategic Financial Planning, IPO Planning, Debt Syndication, Compliances, Audits, Tax Planning, Financial Advisory, and more Advisory since 2012."
    },
    {
        id: 2,
        icon: <FaClipboardList className="text-blue-600 text-3xl" />,
        title: "Comprehensive Services Under One Roof",
        description: "From compliance to strategic planning, we offer end-to-end solutions."
    },
    {
        id: 3,
        icon: <FaUserCheck className="text-blue-600 text-3xl" />,
        title: "Client-Centric, Customized Approach",
        description: "Tailored strategies designed to meet your specific business goals."
    },
    {
        id: 4,
        icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
        title: "Integrity & Confidentiality First",
        description: "We prioritize ethical conduct, professional independence, and data privacy."
    },
    {
        id: 5,
        icon: <FaUsers className="text-blue-600 text-3xl" />,
        title: "Expert Team with Industry Insight",
        description: "A skilled team of 20+ professionals led by 5 seasoned partners across multiple sectors."
    },
    {
        id: 6,
        icon: <FaChartLine className="text-blue-600 text-3xl" />,
        title: "Growth-Oriented Financial Strategies",
        description: "We align compliance with strategic guidance to fuel sustainable business growth."
    }
];



function WhyUs() {
    return (
        <section className="py-12 px-4 md:px-8 lg:px-16">

            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-12">Why ABS?</h2>

            <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {whyChooseUs.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="mb-4 bg-blue-200 p-4 rounded-full inline-block">{item.icon}</div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default WhyUs