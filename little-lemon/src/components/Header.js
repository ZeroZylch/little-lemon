import logo1 from '../assets/Logo.svg';
import burgerIcon from '../assets/🦆 icon _hamburger menu_.svg';
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="Header">
            <Link to="/">
                <img src={logo1} alt="Little Lemon logo" />
            </Link>
            <nav>
                <div className="burger">
                    <img src={burgerIcon} alt="burger icon" />
                </div>
                <ul className="nav-links">
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to="/bookingform">Reservations</Link></li>
                    <li>Order Online</li>
                    <li>Log In</li>
                </ul>
            </nav>
        </header>
    )
}