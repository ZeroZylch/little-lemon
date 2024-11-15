import BookingForm from './BookingForm.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About.js';
import restaurantFood from '../assets/restaurantfood.jpg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

export default function Main() {
    const location = useLocation();
    return (
        <main>
            <Routes>
                <Route path="/bookingform" element={<BookingForm />} />
            </Routes>
            {location.pathname !== '/bookingform' && (
                <>
                    <div className="Hero">
                        <div className="HeroLeft">
                            <h1>Little Lemon</h1>
                            <h2 style={{ color: '#ffffff' }}>Chicago</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing
                                elit borb galandibap skibidi beeboo babow shabambda
                                clu</p>
                            <button><Link to="/bookingform">Reserve a table</Link></button>
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
    )
}