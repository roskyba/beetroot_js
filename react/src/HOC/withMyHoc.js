import axios from "axios";
import React from "react";

const withMyHoc = (WrappedComponent) => {
  let apiURL = "";
  if (WrappedComponent.name === "Burger") {
    apiURL = "https://beetroot-burger-app.herokuapp.com/ingredients";
  }
  if (WrappedComponent.name === "Orders") {
    apiURL = "https://beetroot-burger-app.herokuapp.com/orders";
  }
  class UpdatedComponent extends React.Component {
    constructor() {
      super();
      this.state = {
        result: [],
        isLoading: false,
      };
    }

    componentDidMount = async () => {
      try {
        const result = await axios(apiURL);
        // const calc = () => 200;
        // const res = await calc();
        console.log("result =", result.data);
        this.setState({ result: result.data, isLoading: false });
      } catch (error) {
        console.log("IN ERROR", error);
      }
    };

    render() {
      console.log("this.state", this.state);
      return (
        <WrappedComponent youAPICallResult={this.state.result} />
      );
    }
  }

  return UpdatedComponent;
};

export default withMyHoc;
