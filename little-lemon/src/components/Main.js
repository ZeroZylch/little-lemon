import BookingForm from './BookingForm.js';
import ConfirmedBooking from './ConfirmedBooking.js';
import Highlights from './Highlights.js';
import Testimonials from './Testimonials.js';
import About from './About.js';
import restaurantFood from '../assets/restaurantfood.jpg';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useReducer } from 'react';
import { fetchAPI } from '../api/Api.js';

// Initialize available times
function initializeTimes() {
    const today = new Date();
    return fetchAPI(today) || []; // Ensure it always returns an array
}

// Reducer function
function updateTimes(state, action) {
    switch (action.type) {
        case 'SET_TIMES':
            return action.payload || []; // Replace with new available times
        case 'REMOVE_TIME':
            const { time } = action.payload;
            return state.filter((t) => t !== time); // Remove selected time
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
}

export default function Main() {
    const location = useLocation();

    // Using useReducer for managing availableTimes
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <main>
            <Routes>
                <Route
                    path="/bookingform"
                    element={
                        <BookingForm
                            availableTimes={availableTimes}
                            dispatch={dispatch}
                        />
                    }
                />
                <Route
                    path="/confirmedbooking"
                    element={
                        <ConfirmedBooking />
                    }
                />
            </Routes>
            {location.pathname !== '/bookingform' && location.pathname !== '/confirmedbooking' && (
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