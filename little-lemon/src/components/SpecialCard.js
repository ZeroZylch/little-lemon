function SpecialCard(specialImage, specialTitle, specialText) {
    return (
        <>
            <img src={specialImage} />
            <h4>{specialTitle}</h4>
            <p>{specialText}</p>
            <button>Order a delivery</button>
        </>
    )
}

export default SpecialCard;