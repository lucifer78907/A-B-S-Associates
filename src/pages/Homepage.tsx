import Hero from "../components/Hero"
import MissionVisionExperienceSlider from "../components/Mission"
import TestimonialsSection from "../components/Testimonials"
import WhyUs from "../components/WhyUs"

function Homepage() {
    return (
        <>
            <Hero />
            <WhyUs />
            <MissionVisionExperienceSlider />
            <TestimonialsSection />
        </>
    )
}

export default Homepage