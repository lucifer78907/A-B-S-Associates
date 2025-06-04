import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import websiteLogo from '../../assets/logo.png';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Spacer to avoid layout shift */}
            <div className="h-20 md:h-24" />

            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-md bg-white/70 shadow-md' : 'bg-transparent'
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 py-3 md:px-8 md:py-4 flex items-center justify-between">
                    <img
                        src={websiteLogo}
                        alt="ABS Associates Chartered Accountant"
                        className="h-12 md:h-20"
                    />

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center space-x-8 text-lg font-medium text-gray-800">
                        <NavLink to="/" className="hover:text-blue-600 transition">Home</NavLink>

                        <div className="relative group">
                            <button className="hover:text-blue-600 transition">Team</button>
                            <div className="absolute left-0 top-full mt-2 w-52 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-50">
                                <ul className="py-2">
                                    <li>
                                        <NavLink
                                            to="/team/founding-members"
                                            className="block px-5 py-3 hover:bg-gray-100 transition"
                                        >
                                            Founding Members
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/team/core-team"
                                            className="block px-5 py-3 hover:bg-gray-100 transition"
                                        >
                                            Core Team
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>


                        <NavLink to="/about" className="hover:text-blue-600 transition">About</NavLink>
                        <NavLink to="/services" className="hover:text-blue-600 transition">Services</NavLink>
                        <NavLink to="/practice-areas" className="hover:text-blue-600 transition">Practice Areas</NavLink>
                        <NavLink to="/contact" className="hover:text-blue-600 transition">Contact</NavLink>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-gray-700 text-2xl focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle Menu"
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Nav Menu with Slide Animation */}
                <div
                    className={`md:hidden transition-all duration-500 overflow-hidden bg-white shadow-lg rounded-b-xl ${menuOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-4 py-6 space-y-4 text-gray-800 text-lg font-medium">
                        <NavLink to="/" className="block hover:text-blue-600" onClick={toggleMenu}>Home</NavLink>

                        <div>
                            <p className="font-semibold">Team</p>
                            <div className="ml-4 mt-2 space-y-2">
                                <NavLink to="/team/founding-members" className="block hover:text-blue-600" onClick={toggleMenu}>
                                    Founding Members
                                </NavLink>
                                <NavLink to="/team/core-team" className="block hover:text-blue-600" onClick={toggleMenu}>
                                    Core Team
                                </NavLink>
                            </div>
                        </div>

                        <NavLink to="/about" className="block hover:text-blue-600" onClick={toggleMenu}>About</NavLink>
                        <NavLink to="/services" className="block hover:text-blue-600" onClick={toggleMenu}>Services</NavLink>
                        <NavLink to="/practice-areas" className="block hover:text-blue-600" onClick={toggleMenu}>Practice Areas</NavLink>
                        <NavLink to="/contact" className="block hover:text-blue-600" onClick={toggleMenu}>Contact</NavLink>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
