// components/MissionVisionExperienceSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/pagination";

const slides = [
    {
        title: "Our Mission",
        content:
            "Our mission is to empower businesses, institutions, and financial entities with transformative strategies that drive sustainable growth and operational excellence. We are committed to building long-term capacity, enhancing financial performance, and supporting our clients through every stage of their journey—by providing deeply researched, insight-driven, and value-focused solutions that are tailored to evolving regulatory and industry landscapes. Our approach is grounded in trust, confidentiality, and uncompromising professional standards."
    },
    {
        title: "Our Vision",
        content:
            "We envision becoming a globally respected leader in financial, regulatory, and strategic advisory services—delivering measurable impact through innovation, integrity, and excellence. Our vision is to create a future where businesses, regardless of their size or location, have access to expert financial guidance that unlocks their full potential. We strive to be the partner of choice for those who seek not just compliance, but meaningful transformation and sustained competitive advantage in a rapidly changing world."
    },
    {
        title: "Our Experience",
        content:
            "With over 13 years of professional practice, our experience spans a broad spectrum of industries including telecommunications, banking, construction, healthcare, IT, and retail. We have successfully served both multinational corporations and emerging enterprises across India, delivering actionable insights through audits, tax planning, compliance, and corporate finance. Our team’s collective expertise is built on decades of hands-on problem-solving, sectoral specialization, and a relentless focus on driving client outcomes with precision, foresight, and strategic depth."
    }
];


const MissionVisionExperienceSlider: React.FC = () => {
    return (
        <section className="py-20 px-6 md:px-12 ">

            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-12">
                Mission , Vision & Experience
            </h2>

            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 5000 }}
                pagination={{ clickable: true }}
                loop
                spaceBetween={40}
                slidesPerView={1}

                className="max-w-5xl mx-auto"
            >
                {slides.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white rounded-3xl p-10 md:p-16 border border-blue-100 text-center transition-all duration-500 hover:scale-[1.01]">
                            <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 mb-6">
                                {item.title}
                            </h3>
                            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                                {item.content}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default MissionVisionExperienceSlider;
