import restaurant from '../assets/restaurant.jpg';
import { useState } from 'react';
import { submitAPI, fetchAPI } from '../api/Api.js';

export default function BookingForm({ availableTimes, dispatch }) {
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("default");
    const [date, setDate] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [diet, setDiet] = useState("");

    const clearForm = () => {
        setGuests("");
        setOccasion("default");
        setDate("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setDiet("");
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedTime = e.target['res-time'].value;
        const formData = {
            date,
            time: selectedTime,
            guests,
            occasion,
            firstName,
            lastName,
            email,
            phone,
            diet,
        };

        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            alert("Reservation complete!");
            dispatch({ type: 'REMOVE_TIME', payload: { date, time: selectedTime } });
            clearForm();
        } else {
            alert("Error submitting the reservation. Please try again.");
        }
    };
    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        setDate(e.target.value);
        dispatch({ type: 'SET_TIMES', payload: fetchAPI(selectedDate) });
    };
    return (
        <>
            <div className="Reserve">
                <h1>Reserve a table</h1>
                <p>We're excited to see you! When can we expect you?</p>
            </div>
            <div className="ReserveImage">
                <img src={restaurant} alt="Little Lemon restaurant" />
            </div>
            <div>
                <h2>General Information</h2>
                <form onSubmit={handleSubmit}>
                    {/* Number of Guests */}
                    <label htmlFor="guests"><h3>Number of Guests<sup>*</sup></h3></label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        placeholder="0"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value);
                        }}
                        required
                    />
                    {/* Occasion */}
                    <label htmlFor="occasion"><h3>Occasion (Optional)</h3></label>
                    <select
                        id="occasion"
                        name="occasion"
                        value={occasion}
                        onChange={(e) => {
                            setOccasion(e.target.value);
                        }}
                    >
                        <option value="default">Please select</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="engagement">Engagement</option>
                    </select>
                    {/* Date */}
                    <label htmlFor="res-date"><h3>Choose date<sup>*</sup></h3></label>
                    <input
                        type="date"
                        id="res-date"
                        name="res-date"
                        value={date}
                        onChange={handleDateChange}
                        required
                    />
                    {/* Time */}
                    <label htmlFor="res-time"><h3>Choose time<sup>*</sup></h3></label>
                    <select
                        id="res-time"
                        name="res-time"
                        required
                    >
                        {(availableTimes || []).map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {/* First Name */}
                    <h2>Customer Information</h2>
                    <label htmlFor="fName"><h3>First Name<sup>*</sup></h3></label>
                    <input
                        type="text"
                        id="fName"
                        name="fName"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                        required
                    />
                    {/* Last Name */}
                    <label htmlFor="lName"><h3>Last Name<sup>*</sup></h3></label>
                    <input
                        type="text"
                        id="lName"
                        name="lName"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                        }}
                        required
                    />
                    {/* Email */}
                    <label htmlFor="email"><h3>Email<sup>*</sup></h3></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        required
                    />
                    {/* Phone Number */}
                    <label htmlFor="phone"><h3>Phone Number (Optional)</h3></label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern="[+]{1}[0-9]{11,14}"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                        }}
                    />
                    {/* Dietary Restrictions */}
                    <label htmlFor="dietaryrestrictions"><h3>Dietary Restrictions</h3></label>
                    <input
                        type="text"
                        id="dietaryrestrictions"
                        name="dietaryrestrictions"
                        value={diet}
                        onChange={(e) => {
                            setDiet(e.target.value);
                        }}
                    />
                    <br /><br />
                    {/* Submit */}
                    <button>
                        <input
                            type="submit"
                            value="Make your reservation"
                        />
                    </button>
                </form>
            </div>
        </>
    )
}