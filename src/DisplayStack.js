import React from "react";
import './DisplayStack.css';
import DisplayCard from "./DisplayCard";

function DisplayStack(props) {

    return (
        <div className="display-stack">
            {props.stack_state.map((card) =>
                <DisplayCard key={card.key} color={card.color} figure={card.figure} flipped={card.flipped}/>)
                // flipped={props.stack_state.indexOf(card) === props.size - 1 ? card.flipped : !card.flipped}
            }
        </div>
    )

}

export default DisplayStack;