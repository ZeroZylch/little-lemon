import TestimonialCard from './TestimonialCard.js';

function Testimonials() {
    return (
        <div className="Testimonials">
            <h2>Testimonials</h2>
            <div className="TestimonialsList">
                <div className="TestimonialSection">
                    <TestimonialCard
                        rating="5"
                        profilePic={"https://fer-uig.glitch.me?uuid=1" }
                        testimonialName="Sam K."
                        reviewMsg="I want to eat bruschetta until I puke"
                    />
                    <TestimonialCard
                        rating="3.5"
                        profilePic={"https://fer-uig.glitch.me?uuid=102"}
                        testimonialName="Porspatan"
                        reviewMsg="I really enjoyed my bowl of dirt, it was very clean dirt"
                    />
                </div>
                <div className="TestimonialSection">
                    <TestimonialCard
                        rating="4.5"
                        profilePic={"https://fer-uig.glitch.me?uuid=347"}
                        testimonialName="Crab Gut"
                        reviewMsg="Them potatoes sure can potate"
                    />
                    <TestimonialCard
                        rating="1"
                        profilePic={"https://fer-uig.glitch.me?uuid=232"}
                        testimonialName="carrotlovr_420"
                        reviewMsg="The server ate part of my child like wtf"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonials;