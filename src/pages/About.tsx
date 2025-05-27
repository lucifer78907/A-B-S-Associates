import { BoldContent } from "../components/UI/BoldContent"

function About() {
    return (
        <section className="p-6 font-lato w-3/5 mx-auto">
            <h2 className="text-blue-500 text-7xl font-bold font-display text-center">About us</h2>
            <main className="mt-6 flex flex-col items-center gap-8">
                <article>
                    <p className="text-xl mt-6">
                        <BoldContent>ABS Associates </BoldContent>is a leading chartered accountancy firm dedicated to providing exceptional financial services and solutions. With a team of highly qualified professionals, we specialize in accounting, auditing, taxation, and advisory services tailored to meet the unique needs of our clients.
                        Our commitment to <BoldContent>excellence, integrity, and client satisfaction</BoldContent> has established us as a trusted partner for businesses of all sizes. We leverage our expertise and industry knowledge to deliver innovative solutions that drive growth and success.
                    </p>
                </article>
                <h2 className="mt-10 self-start text-blue-500 text-5xl font-bold font-display">Our background</h2>
                <article className="flex flex-col gap-4 mt-2">
                    <p className="text-xl font-semibold ">
                        "Over 13 years of servicing the industry"
                    </p>
                    <p className="text-xl before:content-['➤'] before:mr-2 before:text-blue-500">
                        Founded in 2012, A B S & Associates is a <BoldContent>prominent Chartered Accountancy firm </BoldContent> in India, offering a broad spectrum of services including Audit & Assurance, Taxation, Regulatory Compliance, Financial Advisory, and Risk Management. With offices in Moga, Ludhiana, and Jammu & Kashmir, we cater to clients across diverse sectors, delivering personalized and high-quality professional services.
                    </p>
                    <p className="text-xl before:content-['➤'] before:mr-2 before:text-blue-500">

                        Our clientele comprises both listed and privately held companies, spanning industries such as telecommunications, textiles, construction, power, retail, healthcare, insurance, banking, hospitality, media, and IT. Our distinct edge lies in delivering industry-focused, technology-enabled, and performance-driven advisory solutions through a team of skilled professionals.
                    </p>
                    <p className="text-xl before:content-['➤'] before:mr-2 before:text-blue-500">
                        We focus on <BoldContent>customized, value-driven solutions</BoldContent> that empower our clients to navigate complex business landscapes and achieve sustainable growth.
                    </p>
                </article>

                <h2 className="mt-10 self-start text-blue-500 text-5xl font-bold font-display">Service Methodology</h2>
                <article className="flex flex-col gap-4 mt-2">

                </article>

            </main>
        </section>
    )
}

export default About