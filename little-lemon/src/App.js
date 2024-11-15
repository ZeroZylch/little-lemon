import './App.css';
import Highlights from './components/Highlights.js';
import Testimonials from './components/Testimonials.js';
import About from './components/About.js';
import Footer from './components/Footer.js';
import Reserve from './components/Reserve.js';
import logo1 from './assets/Logo.svg';
import burgerIcon from './assets/🦆 icon _hamburger menu_.svg';
import restaurantFood from './assets/restaurantfood.jpg';
import {Routes, Route, Link, useLocation } from 'react-router-dom';

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
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
                  <li>Reservations</li>
                  <li>Order Online</li>
                  <li>Log In</li>
              </ul>
          </nav>
      </header>
      <main>
        <Routes>
          <Route path="/reserve" element={<Reserve />} />
        </Routes>
        {location.pathname !== '/reserve' && (
        <>
          <div className="Hero">
            <div className="HeroLeft">
                <h1>Little Lemon</h1>
                <h2 style={{ color: '#ffffff' }}>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit borb galandibap skibidi beeboo babow shabambda
                    clu</p>
                <button><Link to="/reserve">Reserve a table</Link></button>
            </div>
            <div>
                <img src={restaurantFood} alt="Chef holding plate of bruschetta" />
            </div>
          </div>
          <Highlights />
          <Testimonials />
          <About />
        </>
        )}
      </main>
      <Footer />
    </div>
  );
}
