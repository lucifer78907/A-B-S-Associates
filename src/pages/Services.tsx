import {
    FaBalanceScale,
    FaCalculator,
    FaFileInvoiceDollar,
    FaFileSignature,
    FaBuilding,
    FaRegRegistered,
} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

const services = [
    {
        icon: <FaBalanceScale className="text-blue-700 text-3xl" />,
        title: "Audit & Assurance Services",
        overview:
            "We view auditing not just as a regulatory necessity, but as a powerful tool for business transformation.",
        categories: [
            {
                label: "Financial & Compliance Audits",
                items: [
                    "Statutory Audits",
                    "Tax Audits",
                    "Internal Audits",
                    "Forensic Investigations",
                ],
            },
            {
                label: "Accounting & Reporting Support",
                items: [
                    "Financial Statement Preparation",
                    "Bookkeeping Reviews",
                    "Payroll Accounting",
                ],
            },
        ],
    },
    {
        icon: <FaCalculator className="text-blue-700 text-3xl" />,
        title: "Financial Accounting",
        overview:
            "Our services go beyond bookkeeping—offering integrated GST advisory, statutory compliance, and insightful reporting.",
        categories: [
            {
                label: "Financial Reporting",
                items: ["MIS reports", "Audit Support", "Annual Financials"],
            },
            {
                label: "Strategic Support",
                items: ["Cash Flow Budgeting", "Capital Structuring"],
            },
        ],
    },
    {
        icon: <FaFileInvoiceDollar className="text-blue-700 text-3xl" />,
        title: "Income Tax Services",
        overview:
            "From personal filings to corporate tax strategy, we ensure accurate, compliant, and optimized outcomes.",
        categories: [
            {
                label: "Tax Return Filing",
                items: ["Individual ITRs", "Corporate ITRs", "Proprietorship & HUF"],
            },
            {
                label: "Tax Compliance",
                items: ["TDS Returns", "Advance Tax Planning", "Scrutiny Support"],
            },
        ],
    },
    {
        icon: <FaFileSignature className="text-blue-700 text-3xl" />,
        title: "GST Services",
        overview:
            "Stay ahead of GST compliance with automated filings, audit support, and strategic guidance.",
        categories: [
            {
                label: "GST Filing & Compliance",
                items: [
                    "GSTR-1, 3B, 9, 9C",
                    "GST Registration",
                    "Input Credit Reconciliation",
                ],
            },
            {
                label: "Advanced GST Help",
                items: ["GST Audits", "Assessment Support", "E-invoicing Setup"],
            },
        ],
    },
    {
        icon: <FaBuilding className="text-blue-700 text-3xl" />,
        title: "Incorporation & ROC",
        overview:
            "From startup registration to annual compliance, we help you launch and grow legally and confidently.",
        categories: [
            {
                label: "Company Incorporation",
                items: [
                    "Private Limited",
                    "LLP",
                    "Partnership & Proprietorship",
                ],
            },
            {
                label: "ROC Compliance",
                items: ["Annual Filings", "DIR-3 KYC", "Board Resolution Drafting"],
            },
        ],
    },
    {
        icon: <FaRegRegistered className="text-blue-700 text-3xl" />,
        title: "Registrations",
        overview:
            "Get registered with ease—from MSME and FSSAI to Import-Export licenses.",
        categories: [
            {
                label: "Business & Govt. Registrations",
                items: [
                    "MSME (Udyam)",
                    "FSSAI",
                    "Shop & Establishment",
                    "Import Export Code (IEC)",
                ],
            },
        ],
    },
];

export default function Services() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">
            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-6">
                Our Services
            </h2>
            <p className="text-neutral-600 text-lg sm:text-xl mb-12 text-center mx-auto ">
                We offer a comprehensive suite of services designed to meet the diverse needs of our clients, from startups to established enterprises.
            </p>

            <div className="space-y-16">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white border border-neutral-200 rounded-3xl shadow-xl p-10"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            {service.icon}
                            <h3 className="text-2xl md:text-3xl font-bold text-blue-800">
                                {service.title}
                            </h3>
                        </div>

                        <p className="text-neutral-600 text-base mb-8">{service.overview}</p>

                        <div className="space-y-8">
                            {service.categories.map((cat, i) => (
                                <div key={i}>
                                    <h4 className="text-neutral-600 font-semibold text-lg mb-4">
                                        {cat.label}
                                    </h4>

                                    <div className="flex flex-wrap gap-4 items-center">
                                        {cat.items.map((item, idx) => (
                                            <div
                                                key={idx}
                                                className="flex items-center bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-sm text-blue-800 font-medium shadow-sm"
                                            >
                                                {item}
                                                {idx !== cat.items.length - 1 && (
                                                    <FaArrowRight className="ml-2 text-blue-400" />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}


