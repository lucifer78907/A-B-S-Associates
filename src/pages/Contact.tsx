import React, { useState } from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        window.location.href = `mailto:fcaabs@gmail.com?subject=Contact from ${formData.name}&body=Phone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    };

    const offices = [
        {
            title: "Head Office",
            address: "B – I, Kaler Complex, Zira Road, Moga – 142001, Punjab",
            phone: "01636 502871",
            email: "fcaabs@gmail.com",
        },
        {
            title: "Ludhiana Office",
            address: "549, Alamgir Enclave, Near J K Resort, Malerkotla Road, Ludhiana – 141116, Punjab",
            phone: "0161 3154956",
            email: "fcaabs@gmail.com",
        },
        {
            title: "Jammu Office",
            address: "24-C, East Extension, Friends Colony, Trikuta Nagar, Jammu Tawi-180015, Jammu",
            phone: "+91 76967 93693",
            email: "fcaabs@gmail.com",
        },
    ];


    return (
        <div className="min-h-screen  p-6 md:p-12 space-y-16">
            <h2 className="text-blue-500 text-5xl lg:text-7xl font-bold font-display text-center mb-12">
                Contact Us
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-xl sm:text-xl mb-12 text-center mx-auto">
                We are here to assist you with all your audit, tax, and advisory needs. Reach out to us through any of our office locations or fill out the contact form below.
            </p>
            {/* Office Locations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {offices.map((office, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-xl transition-shadow"
                    >
                        <h3 className="text-xl font-bold text-blue-600 mb-4">{office.title}</h3>
                        <div className="flex items-start gap-2 mb-3 text-gray-700">
                            <MdLocationOn className="text-blue-500 mt-1 text-xl" />
                            <p>{office.address}</p>
                        </div>
                        <div className="flex items-center gap-2 mb-2 text-gray-700">
                            <MdPhone className="text-blue-500 text-xl" />
                            <span>{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                            <MdEmail className="text-blue-500 text-xl" />
                            <span>{office.email}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white border border-neutral-200 rounded-3xl shadow-2xl p-10 max-w-2xl mx-auto">
                <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center font-display text-blue-600">
                    Get in Touch
                </h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {[
                        { id: "name", type: "text", label: "Your Name", required: true },
                        { id: "email", type: "email", label: "Your Email", required: true },
                        { id: "phone", type: "tel", label: "Phone Number", required: true },
                    ].map(({ id, type, label, required }) => (
                        <div key={id} className="relative">
                            <input
                                id={id}
                                type={type}
                                name={id}
                                required={required}
                                value={formData[id as keyof typeof formData]}
                                onChange={handleChange}
                                className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent transition-all duration-300"
                                placeholder={label}
                            />
                            <label
                                htmlFor={id}
                                className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                            >
                                {label}
                            </label>
                        </div>
                    ))}

                    <div className="relative">
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            value={formData.message}
                            onChange={handleChange}
                            className="peer w-full border border-gray-300 rounded-xl px-4 pt-5 pb-2 text-base text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-transparent transition-all duration-300"
                            placeholder="Your Message"
                        ></textarea>
                        <label
                            htmlFor="message"
                            className="absolute left-4 top-2 text-gray-500 text-sm transition-all duration-300 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
                        >
                            Your Message
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-3 rounded-xl shadow-md transition duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>

        </div>
    );
};

export default Contact;
