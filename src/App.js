import React, {useState} from 'react';
import DisplayStack from "./DisplayStack";
import {create_deck, shuffle} from "./Deck";
import './App.css';

const deck = create_deck();
shuffle(deck);

const initState1 = deck.splice(0, 1);
const initState2 = deck.splice(0, 2);
const initState3 = deck.splice(0, 3);
const initState4 = deck.splice(0, 4);
const initState5 = deck.splice(0, 5);
const initState6 = deck.splice(0, 6);
const initState7 = deck.splice(0, 7);

function App() {

    const [stack1, setStack1] = useState(initState1);
    const [stack2, setStack2] = useState(initState2);
    const [stack3, setStack3] = useState(initState3);
    const [stack4, setStack4] = useState(initState4);
    const [stack5, setStack5] = useState(initState5);
    const [stack6, setStack6] = useState(initState6);
    const [stack7, setStack7] = useState(initState7);

    const addToStack = (event, card) => {
        if(event.target.id === "1") {setStack1([...stack1, card]);}
        else if(event.target.id === "2") {setStack2([...stack2, card]);}
        else if(event.target.id === "3") {setStack3([...stack3, card]);}
        else if(event.target.id === "4") {setStack4([...stack4, card]);}
        else if(event.target.id === "5") {setStack5([...stack5, card]);}
        else if(event.target.id === "6") {setStack6([...stack6, card]);}
        else if(event.target.id === "7") {setStack7([...stack7, card]);}
        deck.pop();
    }

    return (
        <div className="app">
            <div className="main-panel">
                <div className="display">
                    <h1>Aktualna karta:</h1>
                    <div className="curr-card">{deck[deck.length - 1]}</div>
                </div>
                <div className="buttons">
                    <button id="1" onClick={(event) => addToStack(event, deck[deck.length - 1])}>1</button>
                    <button id="2" onClick={(event) => addToStack(event, deck[deck.length - 1])}>2</button>
                    <button id="3" onClick={(event) => addToStack(event, deck[deck.length - 1])}>3</button>
                    <button id="4" onClick={(event) => addToStack(event, deck[deck.length - 1])}>4</button>
                    <button id="5" onClick={(event) => addToStack(event, deck[deck.length - 1])}>5</button>
                    <button id="6" onClick={(event) => addToStack(event, deck[deck.length - 1])}>6</button>
                    <button id="7" onClick={(event) => addToStack(event, deck[deck.length - 1])}>7</button>
                </div>
            </div>
            <div className="stacks">
                <div className="stack">
                    <h2>Stos 1</h2>
                    <DisplayStack size={1} stack_state={stack1}/>
                </div>
                <div className="stack">
                    <h2>Stos 2</h2>
                    <DisplayStack size={2} stack_state={stack2}/>
                </div>
                <div className="stack">
                    <h2>Stos 3</h2>
                    <DisplayStack size={3} stack_state={stack3}/>
                </div>
                <div className="stack">
                    <h2>Stos 4</h2>
                    <DisplayStack size={4} stack_state={stack4}/>
                </div>
                <div className="stack">
                    <h2>Stos 5</h2>
                    <DisplayStack size={5} stack_state={stack5}/>
                </div>
                <div className="stack">
                    <h2>Stos 6</h2>
                    <DisplayStack size={6} stack_state={stack6}/>
                </div>
                <div className="stack">
                    <h2>Stos 7</h2>
                    <DisplayStack size={7} stack_state={stack7}/>
                </div>
            </div>
        </div>
    );
}

export default App;
