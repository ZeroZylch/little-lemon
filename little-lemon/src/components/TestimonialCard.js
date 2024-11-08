function TestimonialCard(rating, profilePic, testimonialName, reviewMsg) {
    return (
        <>
        <h3>{rating} Rating</h3>
        <img src={profilePic} />
        <p>{testimonialName}</p>
        <p>{reviewMsg}</p>
        </>
    )
}

export default TestimonialCard;