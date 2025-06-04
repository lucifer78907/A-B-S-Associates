import { NavLink } from 'react-router-dom';
import websiteLogo from '../../assets/logo.png';

const Header = () => {
    return (
        <header className="p-2 md:p-6 flex justify-between items-center">
            <img
                src={websiteLogo}
                alt="ABS Associates Chartered Accountant"
                className="h-14 md:h-24"
            />
            <nav role="navigation">
                <ul className="flex gap-6 items-center text-xl font-lato font-medium mr-4">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>

                    {/* Team with Dropdown */}
                    <li className="relative group">
                        <button className="focus:outline-none">Team</button>
                        <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform -translate-y-2 transition-all duration-200 z-10 text-base">
                            <li>
                                <NavLink
                                    to="/team/founding-members"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Founding Members
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/team/core-team"
                                    className="block px-4 py-2 hover:bg-gray-100"
                                >
                                    Core Team
                                </NavLink>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/services">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/practice-areas">Practice Areas</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
