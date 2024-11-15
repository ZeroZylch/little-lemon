import logo from '../assets/Logo .svg';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="Footer">
            <div>
                <img src={logo} alt="Little Lemon logo" />
            </div>
            <div className="FooterSection">
                <nav>
                    <ul>
                        <li><h3>Doormat Navigation</h3></li>
                        <li><Link to="/">Home</Link></li>
                        <li>About</li>
                        <li>Menu</li>
                        <li><Link to="/reserve">Reservations</Link></li>
                        <li>Order Online</li>
                        <li>Login</li>
                    </ul>
                </nav>
            </div>
            <div className="FooterSection">
                <h3>Contact</h3>
                <p>Address</p>
                <p>Phone number</p>
                <p>Email</p>
            </div>
            <div className="FooterSection">
                <h3>Social media links</h3>
            </div>
        </footer>
    )
}

export default Footer;