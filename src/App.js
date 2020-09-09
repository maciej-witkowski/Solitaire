import React, {useState} from 'react';
import Stack from "./Stack";
import DisplayStack from "./DisplayStack";
import DisplayCard from "./DisplayCard";
import {create_deck, shuffle} from "./Deck";
import './App.css';

const deck = create_deck();
shuffle(deck);

const stack1 = new Stack("stack",1, deck.splice(0, 1));
const stack2 = new Stack("stack",2, deck.splice(0, 2));
const stack3 = new Stack("stack",3, deck.splice(0, 3));
const stack4 = new Stack("stack",4, deck.splice(0, 4));
const stack5 = new Stack("stack",5, deck.splice(0, 5));
const stack6 = new Stack("stack",6, deck.splice(0, 6));
const stack7 = new Stack("stack",7, deck.splice(0, 7));

const pile1 = new Stack("pile", 13, []);
const pile2 = new Stack("pile", 13, []);
const pile3 = new Stack("pile", 13, []);
const pile4 = new Stack("pile", 13, []);


function App() {

    const [stack1_state, setStack1State] = useState(stack1.state);
    const [stack2_state, setStack2State] = useState(stack2.state);
    const [stack3_state, setStack3State] = useState(stack3.state);
    const [stack4_state, setStack4State] = useState(stack4.state);
    const [stack5_state, setStack5State] = useState(stack5.state);
    const [stack6_state, setStack6State] = useState(stack6.state);
    const [stack7_state, setStack7State] = useState(stack7.state);

    const [pile1_state, setPile1State] = useState(pile1.state);
    const [pile2_state, setPile2State] = useState(pile2.state);
    const [pile3_state, setPile3State] = useState(pile3.state);
    const [pile4_state, setPile4State] = useState(pile4.state);

    const [pile, changePile] = useState(deck);
    const [currCard, setCurrCard] = useState(pile[pile.length - 1])

    const handleAddButton = (event, card) => {
        if(event.target.id === "1") {
            stack1.addCard(card);
            setStack1State(stack1.state);
        } else if(event.target.id === "2") {
            stack2.addCard(card);
            setStack2State(stack2.state);
        } else if(event.target.id === "3") {
            stack3.addCard(card);
            setStack3State(stack3.state);
        } else if(event.target.id === "4") {
            stack4.addCard(card);
            setStack4State(stack4.state);
        } else if(event.target.id === "5") {
            stack5.addCard(card);
            setStack5State(stack5.state);
        } else if(event.target.id === "6") {
            stack6.addCard(card);
            setStack6State(stack6.state);
        } else if(event.target.id === "7") {
            stack7.addCard(card);
            setStack7State(stack7.state);
        }
        deck.pop();
        setCurrCard(pile[pile.length - 1]);
    }

    return (
        <div className="app">
            <div className="main-panel">
                <div className="display">
                    <h1>Aktualna karta:</h1>
                    <div className="curr-card"><DisplayCard id={currCard.id} color={currCard.color} figure={currCard.figure} flipped={currCard.flipped}/></div>
                </div>
                <div className="buttons">
                    <button id="1" onClick={(e) => handleAddButton(e, currCard)}>1</button>
                    <button id="2" onClick={(e) => handleAddButton(e, currCard)}>2</button>
                    <button id="3" onClick={(e) => handleAddButton(e, currCard)}>3</button>
                    <button id="4" onClick={(e) => handleAddButton(e, currCard)}>4</button>
                    <button id="5" onClick={(e) => handleAddButton(e, currCard)}>5</button>
                    <button id="6" onClick={(e) => handleAddButton(e, currCard)}>6</button>
                    <button id="7" onClick={(e) => handleAddButton(e, currCard)}>7</button>
                </div>
            </div>
            <div className="card-place">
                <div className="piles">
                    <div className="pile">
                        <DisplayStack type={pile1.type} size={pile1.size} stack_state={pile1_state}/>
                    </div>
                    <div className="pile">
                        <DisplayStack type={pile2.type} size={pile2.size} stack_state={pile2_state}/>
                    </div>
                    <div className="pile">
                        <DisplayStack type={pile3.type} size={pile3.size} stack_state={pile3_state}/>
                    </div>
                    <div className="pile">
                        <DisplayStack type={pile4.type} size={pile4.size} stack_state={pile4_state}/>
                    </div>
                </div>
                <div className="stacks">
                    <div className="stack">
                        {/*<h2>Stos 1</h2>*/}
                        <DisplayStack type={stack1.type} size={stack1.size} stack_state={stack1_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 2</h2>*/}
                        <DisplayStack type={stack2.type} size={stack2.size} stack_state={stack2_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 3</h2>*/}
                        <DisplayStack type={stack3.type} size={stack3.size} stack_state={stack3_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 4</h2>*/}
                        <DisplayStack type={stack4.type} size={stack4.size} stack_state={stack4_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 5</h2>*/}
                        <DisplayStack type={stack5.type} size={stack5.size} stack_state={stack5_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 6</h2>*/}
                        <DisplayStack type={stack6.type} size={stack6.size} stack_state={stack6_state}/>
                    </div>
                    <div className="stack">
                        {/*<h2>Stos 7</h2>*/}
                        <DisplayStack type={stack7.type} size={stack7.size} stack_state={stack7_state}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
