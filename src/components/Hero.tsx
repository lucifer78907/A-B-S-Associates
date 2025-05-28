import heroImg from '../assets/potrait.png';

function Hero() {
    return (
        <section className="relative overflow-hidden  min-h-[90vh] flex items-center justify-center px-6 md:px-16 lg:px-24">

            <div className="relative z-10 -mt-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">
                {/* Text Content */}
                <div className="text-center lg:text-left max-w-xl">
                    <h1 className="text-4xl sm:text-5xl -mt-20 lg:text-6xl  font-extrabold text-gray-900 leading-tight font-display mb-6">
                        Your Trusted <span className="text-blue-700">Financial Partner</span>
                    </h1>
                    <p className="text-gray-600 text-lg sm:text-xl mb-8 font-lato leading-relaxed">
                        ABS & Associates helps businesses grow with strategic audit, tax planning, financial advisory, and over 13 years of excellence in service delivery.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <a
                            href="#contact"
                            className="bg-blue-700 hover:bg-blue-800 transition-all text-white font-semibold px-6 py-3 rounded-xl shadow-md"
                        >
                            Get a Consultation
                        </a>
                        <a
                            href="#services"
                            className="text-blue-700 font-medium hover:underline"
                        >
                            Explore Our Services →
                        </a>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="w-full max-w-md">
                    <div className="relative">
                        <img
                            src={heroImg}
                            alt="ABS Associates"
                            className="w-full h-auto rounded-2xl "
                        />
                        {/* Accent Circle */}
                        <div className="absolute -top-6 -left-6 w-20 h-20 bg-blue-600 opacity-20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-blue-600 opacity-20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
