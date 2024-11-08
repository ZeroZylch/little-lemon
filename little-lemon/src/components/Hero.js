import restaurantFood from '../assets/restaurantfood.jpg';

function Hero() {
    return (
        <div className="Hero">
            <div className="HeroLeft">
                <h1>Little Lemon</h1>
                <h2 style={{ color: '#ffffff' }}>Chicago</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing
                    elit borb galandibap skibidi beeboo babow shabambda
                    clu</p>
                <button>Reserve a table</button>
            </div>
            <div>
                <img src={restaurantFood} alt="Chef holding plate of bruschetta" />
            </div>
        </div>
    )
}

export default Hero;