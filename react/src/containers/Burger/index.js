import React from "react"; // Here, we are importing library/component/util etc. that we want to use in our APp
import { Prices, Controls, Builder, CustomModal } from '../../components'
import './Burger.css';

// Modal.setAppElement('#checkout_modal'); // to check
class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: this.props.ingredients.map(e => { return { ingredient: e.name, quantity: 0 } }), // rename to orders
            inOrder: [],
            totalPrice: 1,
            isModalOpen: false
        }
    }

    onShowHideModal = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                isModalOpen: !prevState.isModalOpen
            }
        });
        // console.log('check =', this.state.isModalOpen); // true?
    }

    prepareCheckout = () => <ul className="order_checkout">{this.state.orders.map((elem) => elem.quantity > 0 ? (<li key={elem.ingredient + elem.quantity}>{elem.ingredient}: {elem.quantity}</li>) : '')}</ul>;

    findIngredientPrice = (ingredient) => this.props.ingredients.find(element => element.name === ingredient).price

    findIngredientQuantity = (ingredient) => this.state.orders.find((e) => e.ingredient === ingredient).quantity;

    onHandleIngredientQuantity = (e) => {
        e.preventDefault();
        if (e.target.dataset.action === undefined) { return }
        switch (e.target.dataset.action) {
            case 'remove':
                this.removeIngredient(e.target.dataset.ingre)
                break;
            default:
                this.addIngredient(e.target.dataset.ingre);
                break;
        }
    };

    addIngredient = (ingredient) => {
        if (this.findIngredientQuantity(ingredient) < 5) {
            this.setState((prevState) => {
                const newOrders = prevState.orders.map((elem) => {
                    if (elem.ingredient === ingredient) {
                        return {
                            ...elem,
                            quantity: elem.quantity + 1,
                        };
                    }
                    return elem; // return product that is not clicked; {ingredient: 'cheeese', quantity: 5}
                })

                return {
                    ...prevState,
                    orders: newOrders, // {ingredient: 'bacon', quantity: 2}
                    inOrder: [...prevState.inOrder, ingredient], // ['bacon', 'bacon', 'cheese']
                    totalPrice: Number(prevState.totalPrice + this.findIngredientPrice(ingredient)) // the same
                }
            })
        }
    }

    removeIngredient = (ingredient) => {
        if (this.findIngredientQuantity(ingredient) > 0) {
            this.setState((prevState) => {
                const idx = prevState.inOrder.lastIndexOf(ingredient);
                const newInOrder = [...prevState.inOrder];
                newInOrder.splice(idx, 1)

                const newOrders = [...prevState.orders].map((elem) => { // To make it reusable
                    if (elem.ingredient === ingredient) {
                        return {
                            ...elem,
                            quantity: elem.quantity - 1,
                        };
                    }
                    return elem;
                })
                return {
                    ...prevState,
                    orders: newOrders,
                    inOrder: newInOrder,
                    totalPrice: Number(prevState.totalPrice - this.findIngredientPrice(ingredient))
                }
            })
        }

    }

    render() {
        return (
            <main className="main">
                <Prices ingredients={this.props.ingredients} />
                <Builder totalPrice={this.state.totalPrice} products={this.state.inOrder} modalControl={this.onShowHideModal} />
                <Controls onHandleIngredientQuantity={this.onHandleIngredientQuantity} ingredients={this.props.ingredients} orders={this.state.orders} />
                <CustomModal
                    isOpen={this.state.isModalOpen}
                    handleOpenClose={this.onShowHideModal}
                    modalTitle='Awesome! Please, check your order'
                    modalContent={this.prepareCheckout()}
                    isCheckout
                />
            </main>
        )
    }
}

export default Burger