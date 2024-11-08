function SpecialCard({ specialImage, specialTitle, specialPrice, specialText}) {
    return (
        <div className="SpecialCard">
            <div className="SpecialImage">
                <img src={specialImage} alt={specialTitle} />
            </div>
            <div className="SpecialCardText">
                <div className="SpecialHeader">
                    <h4>{specialTitle}</h4>
                    <p><b>{specialPrice}</b></p>
                </div>
                <p>{specialText}</p>
                <button className="DeliveryButton">Order a delivery</button>
            </div>
        </div>
    )
}

export default SpecialCard;