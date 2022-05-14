import React from 'react';
import './Tile.css';


const Tile = (props) =>
(
    <div className='tile'>
        <h3>I {props.name} am a tile and I have number as {props.number}</h3>
    </div>

    // props.user.name 
    // props.user.age
    // props.film.plot

)


export default Tile;