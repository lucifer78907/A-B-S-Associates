import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="bg-neutral-900 text-white pt-12 pb-6 px-6 sm:px-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {/* Contact Info */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
                    <p className="text-gray-300">Email: info@charteredaccountants.com</p>
                    <p className="text-gray-300">Phone: +1 (123) 456-7890</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><NavLink to="/" className="hover:text-blue-400 transition">Home</NavLink></li>
                        <li><NavLink to="/team" className="hover:text-blue-400 transition">Team</NavLink></li>
                        <li><NavLink to="/about" className="hover:text-blue-400 transition">About</NavLink></li>
                        <li><NavLink to="/services" className="hover:text-blue-400 transition">Services</NavLink></li>
                        <li><NavLink to="/practice-areas" className="hover:text-blue-400 transition">Practice Areas</NavLink></li>
                        <li><NavLink to="/contact" className="hover:text-blue-400 transition">Contact</NavLink></li>
                    </ul>
                </div>

                {/* Policies */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Legal</h4>
                    <ul className="space-y-2 text-gray-300">
                        <li><NavLink to="/privacy-policy" className="hover:text-blue-400 transition">Privacy Policy</NavLink></li>
                        <li><NavLink to="/terms" className="hover:text-blue-400 transition">Terms & Conditions</NavLink></li>
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4 text-blue-400">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom Strip */}
            <div className="mt-12 border-t border-neutral-700 pt-6 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} ABS Associates. All rights reserved.</p>
                <p className="mt-1">
                    Created and designed by <span className="text-white font-semibold">Rudra Pratap Singh</span> —{' '}
                    <a href="mailto:thesinghrudra@gmail.com" className="text-blue-400 hover:underline">
                        Contact me
                    </a>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
