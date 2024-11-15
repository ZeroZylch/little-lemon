import logo1 from '../assets/Logo.svg';
import burgerIcon from '../assets/🦆 icon _hamburger menu_.svg';
import { Routes, Route, Link } from 'react-router-dom';

function Header() {
    return(
        <header className="Header">
            <img src={logo1} alt="Little Lemon logo" />
            <nav>
                <div className="burger">
                    <img src={burgerIcon} alt="burger icon" />
                </div>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Menu</li>
                    <li>Reservations</li>
                    <li>Order Online</li>
                    <li>Log In</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;