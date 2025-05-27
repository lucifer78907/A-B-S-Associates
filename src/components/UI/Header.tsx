import { NavLink } from 'react-router-dom';
import websiteLogo from '../../assets/logo.png'

const Header = () => {
    return <header className='p-2 md:p-6 flex justify-between items-center'>
        <img
            src={websiteLogo}
            alt='ABS associates Charter accountant'
            className='h-14 md:h-24'
        />
        <nav>
            <ul className='flex gap-6 items-center text-2xl font-lato mr-4'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/'}>Team</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/'}>Services</NavLink>
                <NavLink to={'/'}>Practice Areas</NavLink>
                <NavLink to={'/'}>Contact</NavLink>
            </ul>
        </nav>
    </header>
}

export default Header;