import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import member1Img from "../assets/foundingMembers/avinash_photo.jpg";
import member2Img from "../assets/foundingMembers/mr_saini.jpg";
import member3Img from "../assets/foundingMembers/mehak_photo.jpg";
import member4Img from "../assets/foundingMembers/taran_photo.jpg";
import member5Img from "../assets/foundingMembers/vikas_photo.jpg";

const foundingMembers = [
    {
        name: "CA. Mehak Kapur",
        title: "FCA, B.COM",
        image: member3Img,
    },
    {
        name: "CA. Babu Lal Saini",
        title: "FCA, CCA, FAFD (ICAI), B.COM",
        image: member2Img,
    },
    {
        name: "CA. Vikas Mittal",
        title: "FCA, B.COM",
        image: member5Img,
    },
    {
        name: "CA. Avinash Khajuria",
        title: "FCA, DISA (ICAI), B.COM",
        image: member1Img,
    },
    {
        name: "CA. Tarandeep Kaur",
        title: "FCA, B.COM",
        image: member4Img,
    },
];

const OurTeam = () => {
    return (
        <section className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white text-center">
            <h2 className="text-blue-600 text-4xl sm:text-5xl lg:text-7xl font-bold font-display mb-14">
                Our Team
            </h2>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1.1}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    640: { slidesPerView: 1.5 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay, Navigation]}
                className="max-w-7xl mx-auto"
            >
                {foundingMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white border border-blue-100 shadow-md hover:shadow-xl rounded-3xl p-6 sm:p-8 flex flex-col items-center h-full transition-all duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-blue-500 shadow mb-6"
                            />
                            <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                {member.name}
                            </h3>
                            <p className="text-blue-600 font-medium text-sm sm:text-base mt-1">
                                {member.title}
                            </p>
                            <p className="text-gray-600 text-sm sm:text-base mt-4 leading-relaxed max-w-xs mx-auto">
                                {member.name.split(" ")[1]} is a founding partner at ABS Associates, contributing to financial leadership and strategic vision across sectors.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default OurTeam;
