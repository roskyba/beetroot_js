import './Builder.css';

const Builder = (props) => (
    <>
        <div className="burger_builder">
            <h2>
                Burger price: {props.totalPrice.toFixed(2)} ₴
            </h2>
            <button className='btn-checkout' disabled={props.totalPrice.toFixed(2) <= 1} onClick={props.modalControl}>Checkout</button>
            <div>
                <div className="top-bun"></div>
                {props.products.length < 1 && (<h3>Please, start by adding products...</h3>)}
                {props.products.map((product, idx) => <div key={product + '_' + idx} className={`${product} ingredient`}></div>)}
                <div className="bottom-bun"></div>
            </div>
        </div>
    </>
)
export default Builder;
