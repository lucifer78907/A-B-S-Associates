import Hero from "../components/Hero"
import MissionVisionExperienceSlider from "../components/Mission"
import OurTeam from "../components/Team"
import TestimonialsSection from "../components/Testimonials"
import WhyUs from "../components/WhyUs"

function Homepage() {
    return (
        <>
            <Hero />
            <WhyUs />
            <MissionVisionExperienceSlider />
            <TestimonialsSection />
            <OurTeam />
        </>
    )
}

export default Homepage