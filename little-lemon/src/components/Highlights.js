import SpecialCard from './SpecialCard.js';
import special1 from '../assets/greek salad.jpg';
import special2 from '../assets/bruschetta.svg';
import special3 from '../assets/lemon dessert.jpg';

export default function Highlights() {
    return (
        <div className="Highlights">
            <div className="SpecialsBanner">
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className="SpecialsList">
                <SpecialCard
                    specialImage={special1}
                    specialTitle="Greek Salad"
                    specialPrice="$12.99"
                    specialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus tortor vel facilisis cursus. Suspendisse commodo libero non nisl convallis tristique."
                />
                <SpecialCard
                    specialImage={special2}
                    specialTitle="Bruschetta"
                    specialPrice="$5.99"
                    specialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus tortor vel facilisis cursus. Suspendisse commodo libero non nisl convallis tristique."
                />
                <SpecialCard
                    specialImage={special3}
                    specialTitle="Lemon Dessert"
                    specialPrice="$5.00"
                    specialText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dapibus tortor vel facilisis cursus. Suspendisse commodo libero non nisl convallis tristique."
                />
            </div>
        </div>
    )
}