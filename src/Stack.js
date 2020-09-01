import React, {useState} from "react";
import Card from "./Card";

const kolory = ["♠", "♥", "♦", "♣"];
const figury = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function Stack() {

    const [state, setState] = useState([]);

    const addCard = (card) => {
        setState([...state, card]);
    }

    const removeCard = () => {
        let copy = [...state];
        copy.pop();
        setState(copy);
    }

    return (
        <div>
            <button onClick={() => addCard(<Card kolor={kolory[1]} figura={figury[2]}/>)}>Dodaj</button>
            <button onClick={removeCard}>Usuń</button>
            {state}
        </div>
    )
}

export default Stack;