import './Builder.css'

const Builder = (props) => (
    <>
        <div className="burger_builder">
            <h2>
                {/* <img src= /> Додати верхню булочку*/}
                {/* <label> To buy:
                    <input type="text" onChange={(e) => {
                        props.toChange(e.target.value)
                    }} />
                </label> */}
                {/* <p>Text from input: {props.text}</p> */}
                Burger price: {props.totalPrice.toFixed(2)} ₴
                {/* <img src={} /> Додати нижню булочку */}
            </h2>
        </div>
    </>
)
export default Builder
