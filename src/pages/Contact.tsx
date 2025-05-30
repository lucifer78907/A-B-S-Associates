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
        window.location.href = `mailto:example@example.com?subject=Contact from ${formData.name}&body=Phone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
    };

    const offices = [
        {
            title: "Head Office",
            address: "J-45 Basement, Outer Ring Road, Pillar No.9, Vikaspuri - 110018, New Delhi",
            phone: "011-43709400",
            email: "admin@ssperiwal.co.in",
        },
        {
            title: "Gurugram Office",
            address: "L-4/23, First Floor, DLF City Phase-2, Gurugram - 122008, Haryana",
            phone: "011-43702327",
            email: "ssperiwaloffice@gmail.com",
        },
        {
            title: "Chandigarh Office",
            address: "1202, Sector 44B, Chandigarh - 160047, Punjab",
            phone: "+91 7087667225",
            email: "ssptricity@gmail.com",
        },
    ];

    return (
        <div className="min-h-screen  p-6 md:p-12 space-y-16">
            <h2 className="text-blue-500 text-7xl font-bold font-display text-center mb-6">Contact us</h2>
            <p className="text-gray-600 text-lg sm:text-xl mb-12 text-center mx-auto">
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
                        <button className="mt-6 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                            Reach Us
                        </button>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-md rounded-2xl p-8 max-w-2xl mx-auto border border-gray-200">
                <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">Get in Touch</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {[
                        { id: "name", type: "text", label: "Name", required: true },
                        { id: "email", type: "email", label: "Email", required: true },
                        { id: "phone", type: "tel", label: "Phone", required: true },
                    ].map(({ id, type, label, required }) => (
                        <div key={id}>
                            <label htmlFor={id} className="block text-gray-700 font-semibold mb-1">
                                {label}
                            </label>
                            <input
                                id={id}
                                type={type}
                                name={id}
                                value={formData[id as keyof typeof formData]}
                                onChange={handleChange}
                                required={required}
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    ))}
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
