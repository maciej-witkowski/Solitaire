import React from "react";
import './DisplayStack.css';
import DisplayCard from "./DisplayCard";

function DisplayStack(props) {

    const isChosenAmongYouV2 = (chosenCard) => {
        let chosenCards = chosenCard ? [chosenCard] : null;
        if (chosenCard) for (let i = props.stack_state.indexOf(props.stack_state.find(x => x.id === chosenCard)); i < props.stack_state.length; i ++) {
            if (props.stack_state[i].nextCard) chosenCards.push(props.stack_state[i].id);
        }
        props.isChosenAmongYou(chosenCards, props.size);
    }

    return (
        <div className={props.type === "stack" ? "display-stack" :  props.type === "pile" ? "display-pile" : "display-chose"}>
            {props.stack_state.map(card =>
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