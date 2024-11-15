import restaurant from "../assets/restaurant.jpg";
import { useState } from "react";

export default function Reserve() {
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("default");
    const [date, setDate] = useState("");
    const [availableTimes, setAvailableTimes] = useState([
        '17:00 PM',
        '18:00 PM',
        '19:00 PM',
        '20:00 PM',
        '21:00 PM',
        '22:00 PM',
    ]);
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
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Reservation complete!");
        clearForm();
    }

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
                <form onSubmit={handleSubmit}>
                    {/* Number of Guests */}
                    <label for="guests"><h2>Number of Guests<sup>*</sup></h2></label>
                    <input
                        type="number"
                        id="guests"
                        name="guests"
                        placeholder="1"
                        min="1"
                        max="10"
                        value={guests}
                        onChange={(e) => {
                            setGuests(e.target.value);
                        }}
                        required
                    />
                    {/* Occasion */}
                    <label for="occasion"><h2>Occasion (Optional)</h2></label>
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
                    <label for="res-date"><h2>Choose date<sup>*</sup></h2></label>
                    <input
                        type="date"
                        id="res-date"
                        name="res-date"
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                        required
                    />
                    {/* Time */}
                    <label for="res-time"><h2>Choose time<sup>*</sup></h2></label>
                    <select
                        id="res-time"
                        name="res-time"
                    >
                        {availableTimes.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                    {/* First Name */}
                    <h2>Customer Information</h2>
                    <label for="fName"><h3>First Name<sup>*</sup></h3></label>
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
                    <label for="lName"><h3>Last Name<sup>*</sup></h3></label>
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
                    <label for="email"><h3>Email<sup>*</sup></h3></label>
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
                    <label for="phone"><h3>Phone Number (Optional)</h3></label>
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
                    <label for="dietaryrestrictions"><h3>Dietary Restrictions</h3></label>
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