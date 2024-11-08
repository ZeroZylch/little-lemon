function TestimonialCard({ rating, profilePic, testimonialName, reviewMsg }) {
    return (
        <div className="TestimonialCard">
            <h3>{rating} Stars</h3>
            <div className="Profile">
                <img src={profilePic} alt={"user-icon"} />
                <p>{testimonialName}</p>
            </div>
            <p>{reviewMsg}</p>
        </div>
    )
}

export default TestimonialCard;