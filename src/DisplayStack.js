import React from "react";
import './DisplayStack.css';
import DisplayCard from "./DisplayCard";

function DisplayStack(props) {

    // if (props.type === "stack") props.stack_state[props.size - 1].flip();

    const isChosenAmongYouV2 = (chosenCard) => {
        props.isChosenAmongYou(chosenCard, props.size);
    }

    return (
        <div className={props.type === "stack" ? "display-stack" :  props.type === "pile" ? "display-pile" : "display-chose"}>
            {props.stack_state.map(card =>
                // card === props.stack_state[props.stack_state.length - 1] ?
                //     <DisplayCard
                //         key={card.id}
                //         id={card.id}
                //         color={card.color}
                //         figure={card.figure}
                //         nextCard={card.nextCard}
                //         flipped={false}
                //         chosen={card.chosen}
                //         isChosenAmongYouV2={isChosenAmongYouV2}
                //     /> :
                    <DisplayCard
                        key={card.id}
                        id={card.id}
                        color={card.color}
                        figure={card.figure}
                        nextCard={card !== props.stack_state[props.stack_state.length - 1] ? card.nextCard : undefined}
                        flipped={card.flipped}
                        chosen={card.chosen}
                        isChosenAmongYouV2={isChosenAmongYouV2}
                    />)}
        </div>
    )

}

export default DisplayStack;