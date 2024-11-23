import restaurant from '../assets/restaurant.jpg';

export default function ConfirmedBooking() {
    return (
        <>
            <div className="Reserve">
                <h1>Booking Confirmed</h1>
                <p>Thank you for reserving a table at Little Lemon Restaurant. We look forward to serving you!</p>
            </div>
            <div className="ReserveImage">
                <img src={restaurant} alt="Little Lemon restaurant" />
            </div>
        </>
    )
}