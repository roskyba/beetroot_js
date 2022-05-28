import React from "react"; // Here, we are importing library/component/util etc. that we want to use in our APp
import {
  Prices,
  Controls,
  Builder,
  CustomModal,
} from "../../components";
import axios from "axios";
import "./Burger.css";
import withMyHoc from "../../HOC/withMyHoc";

const formFields = [
  {
    type: "text",
    name: "name",
    field: "orderName",
    isRequired: true,
    validation: /^[a-z ,.'-]+$/i,
  },
  {
    type: "text",
    name: "phone",
    field: "orderPhone",
    isRequired: true,
    validation:
      /^(?:\+38)?(?:\(044\)[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[ .-]?[0-9]{3}[ .-]?[0-9]{2}[ .-]?[0-9]{2}|044[0-9]{7})$/,
  },
  {
    type: "text",
    name: "address",
    field: "orderAddress",
    isRequired: true,
    validation: null,
  },
  {
    type: "checkbox",
    name: "fast delivery",
    field: "orderFast",
    isRequired: false,
    validation: null,
  },
];

const initialState = {
  burgerIngredients: [], // {ingredient: 'bacon', quantity: 0}
  inOrder: [], // 'pickle', 'meat', 'cheeese'
  totalPrice: 1,
  isModalOpen: false,
  orderToSave: null,
  orderDetail: {
    orderName: "",
    orderPhone: "",
    orderAddress: "",
    orderFast: false,
  },
  orderCreationResponse: false,
  isLoading: true,
};
class Burger extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  getIngredients = async () => {
    try {
      const result = await axios(
        "https://beetroot-burger-app.herokuapp.com/ingredients"
      );
      this.setState((prevState) => {
        const preparedOrder = result.data[0].ingredients.map((e) => {
          return { ingredient: e.name, quantity: 0 };
        });
        return {
          ...prevState,
          burgerIngredients: preparedOrder,
          ingredients: result.data[0].ingredients,
          isLoading: false,
        };
      });
    } catch (e) {
      console.error(e);
    }
  };

  // componentDidMount = () => {
  //   // this.getIngredients();
  // };

  onInputChange = (e) => {
    const computedValue =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;
    this.setState((prevState) => {
      return {
        ...prevState,
        orderDetail: {
          ...prevState.orderDetail,
          [e.target.name]: computedValue,
        },
      };
    });
  };

  handleCreateOrder = () => {
    const products = {};
    this.state.burgerIngredients.forEach((order) => {
      if (order.quantity > 0) {
        products[order.ingredient] = order.quantity;
      }
    });

    const { orderPhone, orderAddress, orderName, orderFast } =
      this.state.orderDetail;

    const data = JSON.stringify({
      orderPhone,
      orderAddress,
      orderName,
      orderFast,
      orderProducts: products,
      orderPrice: this.state.totalPrice,
    });

    const config = {
      url: "https://beetroot-burger-app.herokuapp.com/orders",
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(() => {
        this.setState({
          orderCreationResponse: true,
          isModalOpen: false,
        });
      })
      .catch((e) => {
        console.error(e);
      });
  };

  onShowHideSuccessModal = () => {
    this.setState(initialState);
    this.getIngredients();
  };

  onShowHideCheckOutModal = () => {
    this.setState((prevState) => {
      return {
        ...prevState,
        isModalOpen: !prevState.isModalOpen,
      };
    });
  };

  prepareCheckout = () => (
    <ul className="order_checkout">
      {this.state.burgerIngredients.map((elem) =>
        elem.quantity > 0 ? (
          <li key={elem.ingredient + elem.quantity}>
            {elem.ingredient}: {elem.quantity}
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );

  showOrderSuccessModal = () => (
    <h1 className="order_checkout">Please, wait a phone for call!</h1>
  );

  findIngredientPrice = (ingredient) =>
    this.props.ingredients.find(
      (element) => element.name === ingredient
    ).price;

  findIngredientQuantity = (ingredient) =>
    this.state.burgerIngredients.find(
      (e) => e.ingredient === ingredient
    ).quantity;

  onHandleIngredientQuantity = (e) => {
    e.preventDefault();
    if (e.target.dataset.action === undefined) {
      return;
    }
    switch (e.target.dataset.action) {
      case "remove":
        this.removeIngredient(e.target.dataset.ingre);
        break;
      default:
        this.addIngredient(e.target.dataset.ingre);
        break;
    }
  };

  addIngredient = (ingredient) => {
    if (this.findIngredientQuantity(ingredient) < 5) {
      this.setState((prevState) => {
        const newIngredients = prevState.burgerIngredients.map(
          (elem) => {
            if (elem.ingredient === ingredient) {
              return {
                ...elem,
                quantity: elem.quantity + 1,
              };
            }
            return elem; // return product that is not clicked; {ingredient: 'cheeese', quantity: 5}
          }
        );

        return {
          ...prevState,
          burgerIngredients: newIngredients, // {ingredient: 'bacon', quantity: 2}
          inOrder: [...prevState.inOrder, ingredient], // ['bacon', 'bacon', 'cheese']
          totalPrice: parseFloat(
            Number(
              prevState.totalPrice +
                this.findIngredientPrice(ingredient)
            ).toFixed(2)
          ),
        };
      });
    }
  };

  removeIngredient = (ingredient) => {
    if (this.findIngredientQuantity(ingredient) > 0) {
      this.setState((prevState) => {
        const idx = prevState.inOrder.lastIndexOf(ingredient);
        const newInOrder = [...prevState.inOrder];
        newInOrder.splice(idx, 1);

        const newIngredients = [...prevState.burgerIngredients].map(
          (elem) => {
            // To make it reusable
            if (elem.ingredient === ingredient) {
              return {
                ...elem,
                quantity: elem.quantity - 1,
              };
            }
            return elem;
          }
        );
        return {
          ...prevState,
          burgerIngredients: newIngredients,
          inOrder: newInOrder,
          totalPrice: parseFloat(
            Number(
              prevState.totalPrice -
                this.findIngredientPrice(ingredient)
            ).toFixed(2)
          ),
        };
      });
    }
  };

  render() {
    console.log("props from Burger =", this.addIngredientprops);
    return (
      <>
        <Prices
          ingredients={this.props.res}
          loading={this.props.isLoading}
        />
        <Builder
          totalPrice={this.state.totalPrice}
          products={this.state.inOrder}
          modalControl={this.onShowHideCheckOutModal}
        />
        <Controls
          onHandleIngredientQuantity={this.onHandleIngredientQuantity}
          ingredients={this.props.ingredients}
          burgerIngredients={this.state.burgerIngredients}
          loading={this.props.isLoading}
        />
        <CustomModal
          isOpen={this.state.isModalOpen}
          handleOpenClose={this.onShowHideCheckOutModal}
          modalTitle="Best Burger App"
          modalContent={this.prepareCheckout()}
          handleConfirmClick={this.handleCreateOrder}
          formFields={formFields}
          inputValues={this.state.orderDetail}
          onInputChange={this.onInputChange}
          isCheckout
        />
        <CustomModal
          isOpen={this.state.orderCreationResponse}
          handleOpenClose={this.onShowHideSuccessModal}
          modalContent={this.showOrderSuccessModal()}
          modalTitle="Success! Order received!"
          handleConfirmClick={this.onShowHideSuccessModal}
          orderCreationState={!this.state.orderCreationResponse}
        />
      </>
    );
  }
}

export default withMyHoc(Burger);
