import restaurant from '../assets/restaurant.jpg';
import { useState } from 'react';
import { submitAPI, fetchAPI } from '../api/Api.js';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function BookingForm({ availableTimes, dispatch }) {
    // const [guests, setGuests] = useState("");
    // const [occasion, setOccasion] = useState("default");
    // const [date, setDate] = useState("");
    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [diet, setDiet] = useState("");
    const navigate = useNavigate();

    const validationSchema = Yup.object({
        guests: Yup.number()
            .min(1, 'At least 1 guest is required')
            .max(10, 'Maximum 10 guests allowed')
            .required('Number of guests is required'),
        date: Yup.date().required('Date is required'),
        time: Yup.string().required('Time is required'),
        firstName: Yup.string().required('First name is required'),
        lastName: Yup.string().required('Last name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        phone: Yup.string().matches(
            /^[+]{1}[0-9]{11,14}$/,
            'Phone number must be in international format (+ followed by 11-14 digits)'
        ),
        diet: Yup.string(),
    });

    // const clearForm = () => {
    //     setGuests("");
    //     setOccasion("default");
    //     setDate("");
    //     setFirstName("");
    //     setLastName("");
    //     setEmail("");
    //     setPhone("");
    //     setDiet("");
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const selectedTime = e.target['res-time'].value;
    //     const formData = {
    //         date,
    //         time: selectedTime,
    //         guests,
    //         occasion,
    //         firstName,
    //         lastName,
    //         email,
    //         phone,
    //         diet,
    //     };

    //     const isSubmitted = submitAPI(formData);

    //     if (isSubmitted) {
    //         alert("Reservation complete!");
    //         dispatch({ type: 'REMOVE_TIME', payload: { date, time: selectedTime } });
    //         clearForm();
    //         navigate('/confirmedbooking');
    //     } else {
    //         alert("Error submitting the reservation. Please try again.");
    //     }
    // };

    // const handleDateChange = (e) => {
    //     const selectedDate = new Date(e.target.value);
    //     setDate(e.target.value);
    //     dispatch({ type: 'SET_TIMES', payload: fetchAPI(selectedDate) });
    // };

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
                <Formik
                    initialValues={{
                        guests: '',
                        occasion: '',
                        date: '',
                        time: '',
                        firstName: '',
                        lastName: '',
                        email: '',
                        phone: '',
                        diet: '',
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        const isSubmitted = submitAPI(values);

                        if (isSubmitted) {
                            alert('Reservation complete!');
                            dispatch({ type: 'REMOVE_TIME', payload: { date: values.date, time: values.time } });
                            resetForm();
                            navigate('/confirmedbooking');
                        } else {
                            alert('Error submitting the reservation. Please try again.');
                        }

                        setSubmitting(false);
                    }}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Number of Guests */}
                            <label htmlFor="guests"><h3>Number of Guests<sup>*</sup></h3></label>
                            <Field
                                type="number"
                                id="guests"
                                name="guests"
                                min="1"
                                max="10"
                                aria-required="true"
                            />
                            <ErrorMessage name="guests" component="div" className="error" />

                            {/* Occasion */}
                            <label htmlFor="occasion"><h3>Occasion (Optional)</h3></label>
                            <Field as="select"
                                id="occasion"
                                name="occasion"
                            >
                                <option value="default">Please select</option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                                <option value="engagement">Engagement</option>
                            </Field>

                            {/* Date */}
                            <label htmlFor="date"><h3>Choose date<sup>*</sup></h3></label>
                            <Field
                                type="date"
                                id="date"
                                name="date"
                                aria-required="true"
                            />
                            <ErrorMessage name="date" component="div" className="error" />

                            {/* Time */}
                            <label htmlFor="time"><h3>Choose time<sup>*</sup></h3></label>
                            <Field as="select"
                                id="time"
                                name="time"
                                aria-required="true"
                                aria-live="polite"
                            >
                                {(availableTimes || []).map((time, index) => (
                                    <option key={index} value={time}>
                                        {time}
                                    </option>
                                ))}
                            </Field>
                            <ErrorMessage name="time" component="div" className="error" />

                            {/* First Name */}
                            <h2>Customer Information</h2>
                            <label htmlFor="firstName"><h3>First Name<sup>*</sup></h3></label>
                            <Field
                                type="text"
                                id="firstName"
                                name="firstName"
                                aria-required="true"
                            />
                            <ErrorMessage name="firstName" component="div" className="error" />

                            {/* Last Name */}
                            <label htmlFor="lastName"><h3>Last Name<sup>*</sup></h3></label>
                            <Field
                                type="text"
                                id="lastName"
                                name="lastName"
                                aria-required="true"
                            />
                            <ErrorMessage name="lastName" component="div" className="error" />

                            {/* Email */}
                            <label htmlFor="email"><h3>Email<sup>*</sup></h3></label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                aria-required="true"
                            />
                            <ErrorMessage name="email" component="div" className="error" />

                            {/* Phone Number */}
                            <label htmlFor="phone"><h3>Phone Number (Optional)</h3></label>
                            <Field
                                type="tel"
                                id="phone"
                                name="phone"
                            />
                            <ErrorMessage name="phone" component="div" className="error" />

                            {/* Dietary Restrictions */}
                            <label htmlFor="dietaryrestrictions"><h3>Dietary Restrictions</h3></label>
                            <Field
                                type="text"
                                id="diet"
                                name="diet"
                            />
                            <ErrorMessage name="diet" component="div" className="error" />
                            <br /><br />

                            {/* Submit */}
                            <button aria-label="Submit to make your reservation" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Make your reservation'}
                            </button>
                </Form>
                )}
                </Formik>
            </div>
        </>
    )
}