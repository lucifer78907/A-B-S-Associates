
// Gravatar-friendly color palette (you can add more Tailwind classes)
const avatarColors = [
    "bg-blue-600",
    "bg-green-600",
    "bg-red-500",
    "bg-indigo-600",
    "bg-purple-600",
    "bg-pink-600",
    "bg-teal-600",
    "bg-yellow-500"
];

const testimonials = [
    {
        name: "Ritika Sharma",
        company: "CEO, NexaBuild Infra",
        feedback:
            "ABS has been an indispensable partner in our compliance and audit process. Their professionalism and strategic insights have elevated our operations."
    },
    {
        name: "Manoj Khurana",
        company: "Founder, FinEdge Technologies",
        feedback:
            "From day one, ABS understood our business model and delivered tax and CFO solutions that saved us both time and capital."
    },
    {
        name: "Aparna Desai",
        company: "CFO, Quantum Textiles",
        feedback:
            "We've worked with several firms, but ABS's audit team delivered clarity and value that went far beyond compliance."
    },
    {
        name: "Sandeep Mehta",
        company: "Director, BlueArc Logistics",
        feedback:
            "Their Virtual CFO services streamlined our financial reporting and gave us the confidence to scale quickly and efficiently."
    },
    {
        name: "Neha Bansal",
        company: "Head of Operations, VertiCore India",
        feedback:
            "ABS combines technical excellence with strategic vision. Their responsiveness and ethical approach make them our trusted advisors."
    },
    {
        name: "Aditya Kapoor",
        company: "Managing Partner, TechOrbit LLP",
        feedback:
            "ABS truly understands startups. Their support during fundraising and regulatory structuring has been exceptional."
    }
];

// Utility: Get initials
const getInitials = (name: string) =>
    name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();

// Utility: Hash a string to get a consistent index for color selection
const getColorClass = (name: string) => {
    const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return avatarColors[hash % avatarColors.length];
};

const TestimonialsSection = () => {
    return (
        <section className="bg-gradient-to-br py-20 px-4 md:px-12">
            <h2 className="text-blue-600 text-4xl sm:text-5xl lg:text-7xl  font-bold font-display text-center mb-12">
                What our Clients Say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {testimonials.map((testimonial, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between border-t-4 border-blue-500"
                    >
                        {/* Avatar */}
                        <div className="flex items-center mb-6">
                            <div
                                className={`w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg shadow-sm mr-4 ${getColorClass(
                                    testimonial.name
                                )}`}
                            >
                                {getInitials(testimonial.name)}
                            </div>
                            <div>
                                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.company}</p>
                            </div>
                        </div>

                        {/* Feedback */}
                        <p className="text-gray-700 text-base leading-relaxed">
                            “{testimonial.feedback}”
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TestimonialsSection;
