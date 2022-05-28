import React from "react";
import axios from "axios";
import { Loader } from "../../components";
import "./Orders.css";

class Orders extends React.Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      isLoading: true,
    };
  }

  componentDidMount = () => {
    const data = axios(
      "https://beetroot-burger-app.herokuapp.com/orders"
    );

    data
      .then((res) => {
        this.setState((prevState) => {
          if (res.data.length > 0) {
            return {
              ...prevState,
              orders: res.data,
            };
          }
        });
      })
      .catch((e) => console.error(e))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <>
        <div className="orders">
          {this.state.isLoading && <Loader />}
          <ul>
            {this.state.orders.map((order) => (
              <li key={order["_id"]} className="order_item">
                {order.orderName} - {order.orderPhone} -{" "}
                {order.orderPrice}{" "}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Orders;
