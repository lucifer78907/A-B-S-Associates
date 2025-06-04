import { IoDocumentLock } from "react-icons/io5"
import { BoldContent } from "../components/UI/BoldContent"
import { FaHandshake, FaUserTie } from "react-icons/fa"
import { GiStarsStack } from "react-icons/gi"

function About() {
    return (
        <section className="p-4 sm:p-6 md:p-8 font-lato w-full max-w-5xl mx-auto">
            <h2 className="text-blue-500 text-5xl sm:text-6xl md:text-7xl font-bold font-display text-center">
                About us
            </h2>

            <main className="mt-6 flex flex-col items-center gap-8 mb-10">
                <article>
                    <p className="text-base sm:text-lg md:text-xl mt-6 text-justify">
                        <BoldContent>A B S And Associates</BoldContent> is a premier Chartered Accountants firm committed to delivering outstanding services and solutions. Our team of highly qualified professionals specializes in Debt Syndication, IPO Planning, Auditing, Taxation, Foreign Accounting and Advisory Services, all tailored to meet the unique needs of our clients. Our dedication to <BoldContent>excellence, integrity, and client satisfaction</BoldContent> has positioned us as a trusted partner for businesses of all sizes. We utilize our expertise and industry knowledge to provide innovative solutions that foster growth and success.
                    </p>
                </article>

                <h2 className="mt-4 lg:mt-10 self-start text-blue-500 text-3xl sm:text-4xl md:text-5xl font-bold font-display">
                    Our background
                </h2>

                <article className="flex flex-col gap-4 mt-2">
                    <p className="text-lg -mt-6 md:mt-0 sm:text-xl font-semibold ">
                        "Over 13 years of servicing the industry"
                    </p>

                    <p className="text-base sm:text-lg md:text-xl before:content-['➤'] before:mr-2 before:text-blue-500 text-justify">
                        Founded in 2012, A B S & Associates is a <BoldContent>leading Chartered Accountancy firm</BoldContent> in India, providing a wide range of services including Audit & Assurance, Taxation, Regulatory Compliance, Financial Advisory, and Risk Management. With offices located in Moga, Ludhiana, and Jammu & Kashmir, we serve clients across various sectors, delivering personalized and high-quality professional services.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl before:content-['➤'] before:mr-2 before:text-blue-500 text-justify">
                        Our clientele includes both publicly listed and privately held companies across diverse industries such as Textiles, Construction, Power, EPC Contractors, Retail, Wholesaler, Healthcare, Insurance, Banking, Hospitality, Media, Iron & Steel, Stock Broking, Real Estate, Infrastructure, IT and many more. Our competitive advantage lies in offering industry-focused, technology-enabled, and performance-driven advisory solutions through a team of skilled professionals.
                    </p>

                    <p className="text-base sm:text-lg md:text-xl before:content-['➤'] before:mr-2 before:text-blue-500 text-justify">
                        We are dedicated to providing <BoldContent>customized, value-driven solutions</BoldContent> that empower our clients to navigate complex business landscapes and achieve sustainable growth.
                    </p>
                </article>

                <h2 className="mt-10 self-start text-blue-500 text-3xl sm:text-4xl md:text-5xl font-bold font-display">
                    Service Methodology
                </h2>

                <article className="flex flex-wrap justify-center gap-10 mt-10 mb-8">
                    <div className="flex flex-col items-center gap-3 text-lg sm:text-xl w-40">
                        <div className="bg-blue-100 shadow-sm p-4 flex items-center justify-center rounded-full">
                            <GiStarsStack size={'2em'} className="text-blue-500" />
                        </div>
                        <span className="text-center">Commitment to Quality</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-lg sm:text-xl w-40">
                        <div className="bg-blue-100 shadow-sm p-4 flex items-center justify-center rounded-full">
                            <IoDocumentLock size={'2em'} className="text-blue-500" />
                        </div>
                        <span className="text-center">Absolute Confidentiality</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-lg sm:text-xl w-40">
                        <div className="bg-blue-100 shadow-sm p-4 flex items-center justify-center rounded-full">
                            <FaUserTie size={'2em'} className="text-blue-500" />
                        </div>
                        <span className="text-center">Professional Objectivity</span>
                    </div>

                    <div className="flex flex-col items-center gap-3 text-lg sm:text-xl w-40">
                        <div className="bg-blue-100 shadow-sm p-4 flex items-center justify-center rounded-full">
                            <FaHandshake size={'2em'} className="text-blue-500" />
                        </div>
                        <span className="text-center">Tailored Solutions</span>
                    </div>
                </article>
            </main>
        </section>
    )
}

export default About
