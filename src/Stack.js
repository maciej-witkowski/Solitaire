import React, {useState} from "react";
import DisplayStack from "./DisplayStack";
import './Stack.css';

const kolory = ["♠", "♥", "♦", "♣"];
const figury = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function Stack(props) {

    const [state, setState] = useState([]);

    const addCard = () => {
        setState([...state, props.card]);
    }

    const buttonName = `add-to-stack${props.title}`

    return (
        <div className="stack">
            <button className={buttonName} onClick={addCard}>{props.title}</button>
            <DisplayStack stack_state={state} title={props.title}/>
        </div>
    )
}

export default Stack;