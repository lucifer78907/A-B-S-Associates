import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
// @ts-ignore
import 'swiper/css';
// @ts-ignore
import 'swiper/css/navigation';

import member1Img from '../assets/foundingMembers/avinash_photo.jpg';
import member2Img from '../assets/foundingMembers/mr_saini.jpg';
import member3Img from '../assets/foundingMembers/mehak_photo.jpg';
import member4Img from '../assets/foundingMembers/taran_photo.jpg';
import member5Img from '../assets/foundingMembers/vikas_photo.jpg';

const foundingMembers = [
    {
        name: 'CA. Mehak Kapur',
        title: 'FCA, B.COM',
        image: member3Img,
    },
    {
        name: 'CA. Babu Lal Saini',
        title: 'FCA, CCA, FAFD (ICAI), B.COM',
        image: member2Img,
    },
    {
        name: 'CA. Vikas Mittal',
        title: 'FCA, B.COM',
        image: member5Img,
    },
    {
        name: 'CA. Avinash Khajuria',
        title: 'FCA, DISA (ICAI), B.COM',
        image: member1Img,
    },
    {
        name: 'CA. Tarandeep Kaur',
        title: 'FCA, B.COM',
        image: member4Img,
    }
];

const OurTeam = () => {
    return (
        <section className="w-full py-20 px-6 md:px-12 text-center">
            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-12">Our team</h2>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                slidesPerView={1.2}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop={true}
                breakpoints={{
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                modules={[Autoplay, Navigation]}
                className="max-w-7xl mx-auto"
            >
                {foundingMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-white shadow-lg rounded-3xl p-6 md:p-8 flex flex-col items-center h-full hover:shadow-2xl transition-all duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full border-4 border-blue-600 shadow-md mb-6"
                            />
                            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-blue-600 font-medium mt-1">{member.title}</p>
                            <p className="text-sm text-gray-500 mt-4 max-w-xs mx-auto leading-relaxed">
                                {member.name.split(' ')[1]} is a senior founding partner at ABS Associates, driving financial excellence and strategic vision for clients across India.
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default OurTeam;
