import {
    FaIndustry,
    FaSeedling,
    FaBuilding,
    FaUniversity,
    FaBolt,
    FaHome,
    FaPills,
    FaTshirt,
    FaCar,
    FaHotel,
} from 'react-icons/fa';

const services = [
    { icon: FaIndustry, title: 'Iron & Steel' },
    { icon: FaSeedling, title: 'Agro & Food Processing' },
    { icon: FaBuilding, title: 'Infrastructure' },
    { icon: FaUniversity, title: 'NBFC' },
    { icon: FaBolt, title: 'Power & Energy' },
    { icon: FaHome, title: 'Real Estate' },
    { icon: FaPills, title: 'Pharma & Chemical' },
    { icon: FaTshirt, title: 'Textile' },
    { icon: FaCar, title: 'Automobile' },
    { icon: FaHotel, title: 'Hospitability' },
];

export default function PracticeAreas() {
    return (
        <section className="bg-white py-16 px-4 sm:px-8 lg:px-20">
            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-12">
                Practice Areas
            </h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-12 text-center  mx-auto">
                At ABS & Associates, we specialize in a wide range of industries, providing tailored audit, tax, and advisory services to help your business thrive.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map(({ icon: Icon, title }, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center gap-4 p-8 border border-neutral-200 rounded-2xl hover:shadow-lg hover:border-blue-500 transition duration-300 ease-in-out"
                    >
                        <Icon className="text-blue-500" size={50} />
                        <h3 className="text-lg font-medium text-black text-center">{title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}
