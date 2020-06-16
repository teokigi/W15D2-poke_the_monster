import React, {Component} from 'react';


const PokeDetails = (props) =>{
    if (!props.monster) return null;

        return (
            <div className="screenText">
            <img src={props.monster.sprites.front_default} />
            i am {props.monster.name}.


             </div>

        )

}

export default PokeDetails;
