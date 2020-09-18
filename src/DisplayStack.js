import React from "react";
import './DisplayStack.css';
import DisplayCard from "./DisplayCard";

function DisplayStack(props) {

    const isChosenAmongYouV2 = (chosenCard) => {
        props.isChosenAmongYou(chosenCard);
    }

    return (

        <div className={props.type === "stack" ? "display-stack" :  props.type === "pile" ? "display-pile" : "display-chose"}>
            {props.stack_state.map(card =>
                    <DisplayCard
                        key={card.id}
                        id={card.id}
                        color={card.color}
                        figure={card.figure}
                        flipped={card.flipped}
                        chosen={card.chosen}
                        isChosenAmongYouV2={isChosenAmongYouV2}
                    />)}
        </div>
    )

}

export default DisplayStack;