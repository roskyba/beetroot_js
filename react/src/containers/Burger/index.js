import React from "react";
import Modal from 'react-modal'; // Here, we are importing library/component/util etc. that we want to use in our APp
import { Prices, Controls, Builder } from '../../components'
import './Burger.css';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
}

class Burger extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: this.props.ingredients.map(e => { return { ingredient: e.name, quantity: 0 } }),
            inOrder: [],
            totalPrice: 1
        }
    }


    findIngredientPrice = (ingredient) => this.props.ingredients.find(element => element.name === ingredient).price

    findIngredientQuantity = (ingredient) => this.state.order.find((e) => e.ingredient === ingredient).quantity;

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
                const newarr = prevState.order.map((elem) => {
                    if (elem.ingredient === ingredient) {
                        return {
                            ...elem,
                            quantity: elem.quantity + 1,
                        };
                    }
                    return elem;
                })
                return {
                    ...prevState,
                    order: newarr,
                    inOrder: [...prevState.inOrder, ingredient],
                    totalPrice: Number(prevState.totalPrice + this.findIngredientPrice(ingredient))
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

                const newOrder = [...prevState.order].map((elem) => {
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
                    inOrder: newInOrder,
                    order: newOrder,
                    totalPrice: Number(prevState.totalPrice - this.findIngredientPrice(ingredient))
                }
            })
        }

    }

    render() {
        return (
            <main className="main">
                <Prices ingredients={this.props.ingredients} />
                <Builder totalPrice={this.state.totalPrice} products={this.state.inOrder} />
                <Controls onHandleIngredientQuantity={this.onHandleIngredientQuantity} ingredients={this.props.ingredients} order={this.state.order} />
                <Modal style={customStyles}>{/* Here we can assign props (read documentation) */}
                    {/* Here we can add Modal Body content */}
                </Modal> {/* Here are using that component; We need to read&use documentatio of a given component */}
            </main>
        )
    }
}

export default Burger