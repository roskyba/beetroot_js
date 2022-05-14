import React from 'react';
import './Content.css'
import Tile from '../Tile/Tile';


class Content extends React.Component {
    constructor(props) {
        super(props)  // React.Compoment.constuctor(props);
        console.log('this =', this)
        this.state = {
            isVisible: true,
            number: 10,
            person: {
                name: 'Ros',
                age: 27
            },
            // tiles: [<Tile />, <Tile />, <Tile />, <span>I am not a tile</span>]
        }
        this.onChangeVisibility2 = this.onChangeVisibility2.bind(this);
    }

    onChangeVisibility2() {
        console.log('this inside =', this); // Content ?
    }

    onChangeVisibility = () => {
        // console.log('this inside =', this);
        this.setState((oldState) => {
            return {
                ...oldState,
                isVisible: !oldState.isVisible
            }
        })
    }


    // console.log(myProps)
    // let buttonIsVisible = true;

    // myProps.click = 100;

    // let onButtonClick = () => {
    //     console.log('Button was clicked')
    // }

    render() {
        console.log(this.state.number)
        const tiles = [1, 2, 4];
        return (
            <>
                <main className="main">
                    <h2>
                        {/* { Here we are adding JS STATEMENT} */}
                        I am the Content
                    </h2>
                    <p>{this.state.person.name} {this.state.person.age}</p>
                    {tiles.map((item) => <Tile key={item + 10} number={item} />)}
                    <button onClick={this.onChangeVisibility} > {this.state.isVisible ? 'Hide' : 'Show'}</button>
                    {/* <Tile inside={myProps.numberToCheck} /> */}
                    {/* .... onClick={() => onChangeVisibility2()} */}
                    {this.state.isVisible ? (<span>Yes. I am visible (so in state I have isVisible set to TRUE )</span>) : undefined}
                </main>
            </>
        )
    }

}

export default Content