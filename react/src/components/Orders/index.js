import './Orders.css'

const Orders = (props) => {
    return (
        <>
            <div className="oders_wrapper">
                <h2>Completed orders</h2>
                {props.completedOrders.map((order) => <h3 key={order.id}>Order</h3>)}
            </div>
        </>
    )
}
export default Orders
