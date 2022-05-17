import './Builder.css'

const Builder = (props) => {
    return (
        <>
            <div className="burger_builder">
                <h2>
                    Burger price: {props.totalPrice.toFixed(2)} ₴
                </h2>
            </div>
        </>
    )
}
export default Builder
