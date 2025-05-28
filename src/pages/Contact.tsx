import React, { useState } from "react";

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

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            {/* Office Locations */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
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
                ].map((office, index) => (
                    <div
                        key={index}
                        className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-4">{office.title}</h3>
                        <p className="text-gray-600 mb-2">{office.address}</p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Phone:</span> {office.phone}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Email:</span> {office.email}
                        </p>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300">
                            Reach Us
                        </button>
                    </div>
                ))}
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
                <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={4}
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;