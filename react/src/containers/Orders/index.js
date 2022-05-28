import React from "react";
import axios from "axios";
import { Loader } from "../../components";
import "./Orders.css";
import { Outlet } from "react-router-dom";
import withMyHoc from "../../HOC/withMyHoc";

// class Orders extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       orders: [],
//       isLoading: true,
//     };
//   }

//   componentDidMount = () => {
//     const data = axios(
//       "https://beetroot-burger-app.herokuapp.com/orders"
//     );

//     data
//       .then((res) => {
//         this.setState((prevState) => {
//           if (res.data.length > 0) {
//             return {
//               ...prevState,
//               orders: res.data,
//             };
//           }
//         });
//       })
//       .catch((e) => console.error(e))
//       .finally(() => {
//         this.setState({ isLoading: false });
//       });
//   };

//   render() {
//     console.log("props from Orders =", this.props);
//     return (
//       <>
//         <div className="orders">
//           {this.state.isLoading && <Loader />}
//           <ul>
//             {this.state.orders.map((order) => (
//               <li key={order["_id"]} className="order_item">
//                 {order.orderName} - {order.orderPhone} -{" "}
//                 {order.orderPrice}{" "}
//               </li>
//             ))}
//           </ul>
//           <Outlet
//             context={{
//               test: "ROs",
//               data: "from outlet",
//               dataFromState: this.state,
//             }}
//           />
//         </div>
//       </>
//     );
//   }
// }

const Orders = (props) => {
  console.log("props", props);

  return (
    <div className="orders">
      {/* {this.state.isLoading && <Loader />} */}
      {/* <ul>
        {props.youAPICallResult.length > 0 &&
          props.youAPICallResult[0].ingredients.map((order) => (
            <li key={order["_id"]} className="order_item">
              {order.price} - {order.name} - {order.orderPrice}{" "}
            </li>
          ))}
      </ul> */}
    </div>
  );
};
export default withMyHoc(Orders);
