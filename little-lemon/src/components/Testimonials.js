import TestimonialCard from './TestimonialCard.js';

function Testimonials() {
    return (
        <div className="Testimonials">
            <h2>Testimonials</h2>
            <div className="TestimonialsList">
                <TestimonialCard
                    rating="5"
                    profilePic={"https://fer-uig.glitch.me?uuid=1" }
                    testimonialName="Sam K."
                    reviewMsg="Lovin' Bunz"
                />
                <TestimonialCard
                    rating="3.5"
                    profilePic={"https://fer-uig.glitch.me?uuid=102"}
                    testimonialName="Porspatan"
                    reviewMsg="Clean dirt"
                />
                <TestimonialCard
                    rating="4.5"
                    profilePic={"https://fer-uig.glitch.me?uuid=347"}
                    testimonialName="Crab Gut"
                    reviewMsg="Oh, them potatoes sure can"
                />
                <TestimonialCard
                    rating="1"
                    profilePic={"https://fer-uig.glitch.me?uuid=232"}
                    testimonialName="Alice"
                    reviewMsg="The server ate part of my child like wtf"
                />
            </div>
        </div>
    )
}

export default Testimonials;