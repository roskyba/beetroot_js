import React from "react";
import axios from "axios";
import { Loader } from "../../components";

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
        {this.state.isLoading && <Loader />}
        {this.state.orders.map((order) => {
          return (
            <div>
              <p>
                {order.orderName} - {order.orderPhone} -{" "}
                {order.orderPrice}{" "}
              </p>
            </div>
          );
        })}
      </>
    );
  }
}

export default Orders;
