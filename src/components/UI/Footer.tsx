import React from 'react';
import { NavLink } from 'react-router-dom';


const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto flex flex-wrap justify-around px-4 sm:px-6 lg:px-8">
                <div className="mb-6 w-full sm:w-auto min-w-[200px]">
                    <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                    <p>Email: info@charteredaccountants.com</p>
                    <p>Phone: +1 (123) 456-7890</p>
                </div>
                <div className="mb-6 w-full sm:w-auto min-w-[200px]">
                    <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                    <ul className="list-none flex gap-2">
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/'}>Team</NavLink>
                        <NavLink to={'/about'}>About</NavLink>
                        <NavLink to={'/'}>Services</NavLink>
                        <NavLink to={'/'}>Practice Areas</NavLink>
                        <NavLink to={'/'}>Contact</NavLink>
                    </ul>
                </div>
                <div className="mb-6 w-full sm:w-auto min-w-[200px]">
                    <h4 className="text-lg font-semibold mb-2">Follow Us</h4>
                    <p>
                        <a href="https://facebook.com" className="text-blue-400 hover:underline">Facebook</a> |{' '}
                        <a href="https://twitter.com" className="text-blue-400 hover:underline">Twitter</a> |{' '}
                        <a href="https://linkedin.com" className="text-blue-400 hover:underline">LinkedIn</a>
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-4 text-center">
                <p>&copy; {new Date().getFullYear()} ABS associates. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
