import chefs1 from "../assets/Mario and Adrian A.jpg";
import chefs2 from "../assets/Mario and Adrian B.jpg";

function About() {
    return (
        <div className="About">
            <div className="AboutLeft">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam dapibus tortor vel facilisis cursus.
                Suspendisse commodo libero non nisl convallis tristique.
                Morbi turpis augue, porttitor sed neque sed, sodales euismod
                neque.<br/><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam dapibus tortor vel facilisis cursus.
                Suspendisse commodo libero non nisl convallis tristique.
                </p>
            </div>
            <div className="AboutRight">
                <img className="AboutImage img1" src={chefs1} alt="Chefs Mario and Adrian" />
                <img className="AboutImage img2" src={chefs2} alt="Chefs Mario and Adrian" />
            </div>
        </div>
    )
}

export default About;