import { FaArrowRight } from "react-icons/fa6";
import {
    FaBriefcase,
    FaGavel,
    FaChartLine,
    FaUniversity,
    FaBalanceScale,
    FaBuilding,
    FaFileInvoiceDollar,
    FaUserTie,
    FaLandmark,
    FaUserShield,
    FaRegClipboard,
} from "react-icons/fa";

const services = [
    {
        icon: <FaChartLine className="text-blue-700 text-3xl" />,
        title: "Corporate Finance",
        overview:
            "Comprehensive financing solutions tailored for business growth, liquidity, and expansion across diverse markets.",
        categories: [
            {
                label: null,
                items: [
                    "Debt Syndication Advisory",
                    "Project & Structured Finance",
                    "Trade Finance",
                    "International Financing",
                    "Debt Structuring",
                    "Credit Rating Advisory",
                    "Capital Market Transactions",
                    "Private Equity & Venture Capital",
                    "Project Finance",
                    "Working Capital Finance",
                    "Unsecured Funding",
                    "Bridge Funding",
                    "Letter of Credit",
                    "Bank Guarantee",
                    "Channel Finance",
                    "Project Approval",
                    "Buyers Credit",
                    "Suppliers Credit",
                    "Loan against Property",
                    "Structured and Unstructured Funding",
                    "Custom Financial Instruments",
                ],
            },
        ],
    },
    {
        icon: <FaBriefcase className="text-blue-700 text-3xl" />,
        title: "IPO Planning",
        overview:
            "We guide businesses through every stage of going public, ensuring regulatory readiness and investor confidence.",
        categories: [
            {
                label: null,
                items: [
                    "Pre-IPO Planning & Strategy",
                    "Due Diligence & Financial Audits",
                    "Prospectus Preparation",
                    "Regulatory Compliance",
                    "Valuation Advisory",
                    "Investor Relations & Roadshow Support",
                    "Post-IPO Compliance & Reporting",
                ],
            },
        ],
    },
    {
        icon: <FaGavel className="text-blue-700 text-3xl" />,
        title: "Audit & Assurance Services",
        overview:
            "A comprehensive suite of audit services ensuring regulatory compliance, strategic insights, and governance excellence.",
        categories: [
            {
                label: "Financial & Compliance Audits",
                items: [
                    "Statutory Audits (Companies, LLPs, Trusts)",
                    "Tax & Compliance Audits",
                    "Internal Audits and Risk-Based Reviews",
                    "Forensic & Fraud Investigations",
                    "Special Purpose Audits",
                    "Corporate Governance Certifications",
                ],
            },
            {
                label: "Accounting & Reporting Support",
                items: [
                    "Financial Statements Preparation",
                    "Consolidated Reporting",
                    "Ledger Reviews & Reconciliations",
                    "Bookkeeping & Record Maintenance",
                    "Payroll Accounting",
                    "Indirect Tax Compliance",
                ],
            },
            {
                label: "Strategic Audit Advisory",
                items: [
                    "Internal Controls & Documentation",
                    "Audit Function Support",
                    "Accounting Policy Manuals",
                    "Financial Projections",
                    "Startup & M&A Assistance",
                    "Agreed-Upon Procedures",
                ],
            },
            {
                label: "Risk & Regulatory Consulting",
                items: [
                    "Risk Assessments",
                    "Regulatory Change Guidance",
                    "Ind AS / IFRS Implementation",
                    "Exchange Control Advisory",
                    "Management Letters",
                ],
            },
        ],
    },
    {
        icon: <FaBalanceScale className="text-blue-700 text-3xl" />,
        title: "Strategic Tax Advisory",
        overview:
            "Optimized tax strategies and international structuring to support business decisions, M&A, and cross-border operations.",
        categories: [
            {
                label: null,
                items: [
                    "Comprehensive Tax Planning",
                    "Domestic and International Tax Structuring",
                    "Business-Aligned Tax Strategy Review",
                    "Advisory for M&A and Restructuring",
                    "Group Reorganizations",
                    "Tax Due Diligence",
                    "Transfer Pricing & Dispute Resolution",
                    "IFRS & US GAAP Reporting",
                    "Cross-border Tax Planning",
                ],
            },
        ],
    },
    {
        icon: <FaUniversity className="text-blue-700 text-3xl" />,
        title: "Regulatory & Compliance Services",
        overview:
            "Expert assistance with tax filings, registrations, regulatory compliance, and ongoing statutory reporting.",
        categories: [
            {
                label: null,
                items: [
                    "Advance Tax Calculations & Advisory",
                    "TDS Compliance",
                    "Income Tax Return Filing",
                    "PAN/FRRO for Non-Residents",
                    "GST Compliance",
                    "Regulatory Filing & Reporting",
                    "RBI & Statutory Approvals",
                    "Exchange Control Compliance",
                ],
            },
        ],
    },
    {
        icon: <FaUserShield className="text-blue-700 text-3xl" />,
        title: "Litigation & Representation",
        overview:
            "Representation and support across all levels of tax litigation, dispute resolution, and strategic legal engagement.",
        categories: [
            {
                label: null,
                items: [
                    "Representation before Tax Authorities",
                    "Transfer Pricing Representation",
                    "Tax Assessment & Scrutiny",
                    "Litigation Strategy & Advice",
                    "Coordination with Legal Counsels",
                ],
            },
        ],
    },
    {
        icon: <FaFileInvoiceDollar className="text-blue-700 text-3xl" />,
        title: "Indirect Tax & GST Services",
        overview:
            "End-to-end GST advisory including implementation, compliance, and optimizing tax positions in supply chains.",
        categories: [
            {
                label: null,
                items: [
                    "GST Implementation Assistance",
                    "Supply Chain Tax Analysis",
                    "Tax-Efficient Supply Chain Models",
                    "GST Filing & Credit Utilization",
                ],
            },
        ],
    },
    {
        icon: <FaRegClipboard className="text-blue-700 text-3xl" />,
        title: "Foreign Accounting & Other Tasks",
        overview:
            "Efficient international accounting, returns filing, and entity formation support for global operations.",
        categories: [
            {
                label: null,
                items: [
                    "Accounts Management",
                    "Returns Filing",
                    "Company Formation",
                    "Modifications & Amendments",
                ],
            },
        ],
    },
    {
        icon: <FaBuilding className="text-blue-700 text-3xl" />,
        title: "Financial Accounting",
        overview:
            "Expert advice on optimizing tax implications, input credit structuring, and efficient financial operations under GST.",
        categories: [
            {
                label: null,
                items: [
                    "GST Impact Analysis",
                    "Input Tax Credit Structuring",
                    "Reverse Charge Advisory",
                    "Optimized Tax Planning",
                ],
            },
        ],
    },
    {
        icon: <FaUserTie className="text-blue-700 text-3xl" />,
        title: "Virtual CFO",
        overview:
            "Strategic financial leadership and operational oversight through tailored virtual CFO services.",
        categories: [
            {
                label: "Compliance",
                items: [
                    "Banks, Financial Institutions",
                    "Income Tax & GST Department",
                    "Government Departments",
                ],
            },
            {
                label: "Financial Management & Reporting",
                items: [
                    "MIS Reports",
                    "Cost Analysis",
                    "Audit & Statutory Reporting",
                    "Business Consolidation",
                    "Annual Financial Statements",
                ],
            },
            {
                label: "Strategic & Operational Support",
                items: [
                    "Cash Flow Budgeting",
                    "Strategic Planning",
                    "Capital Structuring",
                    "Working Capital Optimization",
                ],
            },
            {
                label: "Tax & Compliance",
                items: [
                    "GST Compliance",
                    "Withholding Tax Management",
                    "Return Filing",
                    "Tax Liability Reviews",
                ],
            },
            {
                label: "Payroll Support",
                items: [
                    "Payroll Processing",
                    "Tax Documentation",
                    "Liaison with Tax Authorities",
                ],
            },
        ],
    },
    {
        icon: <FaLandmark className="text-blue-700 text-3xl" />,
        title: "Corporate Law Advisory",
        overview:
            "Comprehensive support for company formation, legal compliance, business restructuring, and closure.",
        categories: [
            {
                label: null,
                items: [
                    "Formation of Entities (Company, LLP, Trust, etc.)",
                    "Registered Address Transfer",
                    "Legal & Financial Advisory",
                    "Startup & Investment Compliance",
                    "Management Changes & Statutory Records",
                    "LLP Conversions",
                    "Branch & Liaison Office Compliance",
                    "Joint Ventures",
                    "Winding-Up / Closure",
                ],
            },
        ],
    },
    {
        icon: <FaRegClipboard className="text-blue-700 text-3xl" />,
        title: "Registrations",
        overview:
            "Fast and compliant registration services for business and statutory operations.",
        categories: [
            {
                label: null,
                items: [
                    "GST Registration",
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
            <h2 className="text-blue-500 text-5xl sm:text-6xl font-bold font-display text-center mb-6">
                Our Services
            </h2>
            <p className="text-neutral-600 text-lg sm:text-xl mb-12 text-center mx-auto max-w-3xl">
                We deliver a wide array of specialized services for individuals, startups, enterprises, and global organizations.
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
                                    {cat.label && (
                                        <h4 className="text-neutral-600 font-semibold text-lg mb-4">
                                            {cat.label}
                                        </h4>
                                    )}
                                    <div className="flex flex-wrap gap-4">
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