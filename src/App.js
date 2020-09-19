import React, {useState} from 'react';
import Stack from "./Stack";
import DisplayStack from "./DisplayStack";
import DisplayCard from "./DisplayCard";
import {create_deck, shuffle} from "./Deck";
import './App.css';

const deck = create_deck();
const deck_copy = create_deck();
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

const chosen = new Stack("chosen", 13, []);


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

    const [chosen_state, setChosen_state] = useState({state: [], fromWhichStack: undefined});

    const handleAddToStack = (event, card) => {
        if (chosen_state.state.length !== 0) {
            if(event.target.id === "1") {
                stack1.addCard(card[0]);
                setStack1State(stack1.state);
            } else if(event.target.id === "2") {
                stack2.addCard(card[0]);
                setStack2State(stack2.state);
            } else if(event.target.id === "3") {
                stack3.addCard(card[0]);
                setStack3State(stack3.state);
            } else if(event.target.id === "4") {
                stack4.addCard(card[0]);
                setStack4State(stack4.state);
            } else if(event.target.id === "5") {
                stack5.addCard(card[0]);
                setStack5State(stack5.state);
            } else if(event.target.id === "6") {
                stack6.addCard(card[0]);
                setStack6State(stack6.state);
            } else if(event.target.id === "7") {
                stack7.addCard(card[0]);
                setStack7State(stack7.state);
            }

            if(chosen_state.fromWhichStack === 1) {
                stack1.removeCard();
                if (stack1.state[stack1.state.length - 1]) stack1.state[stack1.state.length - 1].flip();
                setStack1State(stack1.state);
            } else if(chosen_state.fromWhichStack === 2) {
                stack2.removeCard();
                if (stack2.state[stack2.state.length - 1]) stack2.state[stack2.state.length - 1].flip();
                setStack2State(stack2.state);
            } else if(chosen_state.fromWhichStack === 3) {
                stack3.removeCard();
                if (stack3.state[stack3.state.length - 1]) stack3.state[stack3.state.length - 1].flip();
                setStack3State(stack3.state);
            } else if(chosen_state.fromWhichStack === 4) {
                stack4.removeCard();
                if (stack4.state[stack4.state.length - 1]) stack4.state[stack4.state.length - 1].flip();
                setStack4State(stack4.state);
            } else if(chosen_state.fromWhichStack === 5) {
                stack5.removeCard();
                if (stack5.state[stack5.state.length - 1]) stack5.state[stack5.state.length - 1].flip();
                setStack5State(stack5.state);
            } else if(chosen_state.fromWhichStack === 6) {
                stack6.removeCard();
                if (stack6.state[stack6.state.length - 1]) stack6.state[stack6.state.length - 1].flip();
                setStack6State(stack6.state);
            } else if(chosen_state.fromWhichStack === 7) {
                stack7.removeCard();
                if (stack7.state[stack7.state.length - 1]) stack7.state[stack7.state.length - 1].flip();
                setStack7State(stack7.state);
            }

            setChosen_state({state: [], fromWhichStack: undefined});
        } else {
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

            let copy = pile;
            copy.pop();
            changePile(copy);

            setCurrCard(pile[pile.length - 1]);
        }
    }

    const handleAddToPile = (event, card) => {
        if (chosen_state.state.length !== 0) {
            if(event.target.id === "1") {
                pile1.addCard(card[0]);
                setPile1State(pile1.state);
            } else if(event.target.id === "2") {
                pile2.addCard(card[0]);
                setPile2State(pile2.state);
            } else if(event.target.id === "3") {
                pile3.addCard(card[0]);
                setPile3State(pile3.state);
            } else if(event.target.id === "4") {
                pile4.addCard(card[0]);
                setPile4State(pile4.state);
            }

            if(chosen_state.fromWhichStack === 1) {
                stack1.removeCard();
                if (stack1.state[stack1.state.length - 1]) stack1.state[stack1.state.length - 1].flip();
                setStack1State(stack1.state);
            } else if(chosen_state.fromWhichStack === 2) {
                stack2.removeCard();
                if (stack2.state[stack2.state.length - 1]) stack2.state[stack2.state.length - 1].flip();
                setStack2State(stack2.state);
            } else if(chosen_state.fromWhichStack === 3) {
                stack3.removeCard();
                if (stack3.state[stack3.state.length - 1]) stack3.state[stack3.state.length - 1].flip();
                setStack3State(stack3.state);
            } else if(chosen_state.fromWhichStack === 4) {
                stack4.removeCard();
                if (stack4.state[stack4.state.length - 1]) stack4.state[stack4.state.length - 1].flip();
                setStack4State(stack4.state);
            } else if(chosen_state.fromWhichStack === 5) {
                stack5.removeCard();
                if (stack5.state[stack5.state.length - 1]) stack5.state[stack5.state.length - 1].flip();
                setStack5State(stack5.state);
            } else if(chosen_state.fromWhichStack === 6) {
                stack6.removeCard();
                if (stack6.state[stack6.state.length - 1]) stack6.state[stack6.state.length - 1].flip();
                setStack6State(stack6.state);
            } else if(chosen_state.fromWhichStack === 7) {
                stack7.removeCard();
                if (stack7.state[stack7.state.length - 1]) stack7.state[stack7.state.length - 1].flip();
                setStack7State(stack7.state);
            }

            setChosen_state({state: [], fromWhichStack: undefined});

        } else {
            if(event.target.id === "1") {
                pile1.addCard(card);
                setPile1State(pile1.state);
            } else if(event.target.id === "2") {
                pile2.addCard(card);
                setPile2State(pile2.state);
            } else if(event.target.id === "3") {
                pile3.addCard(card);
                setPile3State(pile3.state);
            } else if(event.target.id === "4") {
                pile4.addCard(card);
                setPile4State(pile4.state);
            }

            let copy = pile;
            copy.pop();
            changePile(copy);

            setCurrCard(pile[pile.length - 1]);
        }

    }

    const isChosenAmongYou = (cards, num) => {
        console.log(cards);
        console.log(num);
        if (cards === null) {
            setChosen_state({state: [], fromWhichStack: undefined});
        } else if (chosen_state.state.length !== 0) {

        } else {
            const chosenPile = deck_copy.find(x => x.id === cards);
            setChosen_state({state: [chosenPile], fromWhichStack: num});
        }
    }

    return (
        <div className="app">
            <div className="main-panel">
                <div className="display-currCard">
                    <h2>Aktualna karta:</h2>
                    <div className="curr-card"><DisplayCard id={currCard.id} color={currCard.color} figure={currCard.figure} flipped={currCard.flipped}/></div>
                </div>
                <div className="stack-buttons">
                    <button id="1" onClick={(e) => handleAddToStack(e, currCard)}>1</button>
                    <button id="2" onClick={(e) => handleAddToStack(e, currCard)}>2</button>
                    <button id="3" onClick={(e) => handleAddToStack(e, currCard)}>3</button>
                    <button id="4" onClick={(e) => handleAddToStack(e, currCard)}>4</button>
                    <button id="5" onClick={(e) => handleAddToStack(e, currCard)}>5</button>
                    <button id="6" onClick={(e) => handleAddToStack(e, currCard)}>6</button>
                    <button id="7" onClick={(e) => handleAddToStack(e, currCard)}>7</button>
                </div>
                <div className="pile-buttons">
                    <button id="1" onClick={(e) => handleAddToPile(e, currCard)}>1</button>
                    <button id="2" onClick={(e) => handleAddToPile(e, currCard)}>2</button>
                    <button id="3" onClick={(e) => handleAddToPile(e, currCard)}>3</button>
                    <button id="4" onClick={(e) => handleAddToPile(e, currCard)}>4</button>
                </div>
                <div className="display-chosen">
                    <h2>Zaznaczone:</h2>
                    <div className="chosen"><DisplayStack type={chosen.state.type} size={chosen.state.size} stack_state={chosen_state.state}/></div>
                </div>
                <div className="stack-buttons">
                    <button id="1" onClick={(e) => handleAddToStack(e, chosen_state.state)}>1</button>
                    <button id="2" onClick={(e) => handleAddToStack(e, chosen_state.state)}>2</button>
                    <button id="3" onClick={(e) => handleAddToStack(e, chosen_state.state)}>3</button>
                    <button id="4" onClick={(e) => handleAddToStack(e, chosen_state.state)}>4</button>
                    <button id="5" onClick={(e) => handleAddToStack(e, chosen_state.state)}>5</button>
                    <button id="6" onClick={(e) => handleAddToStack(e, chosen_state.state)}>6</button>
                    <button id="7" onClick={(e) => handleAddToStack(e, chosen_state.state)}>7</button>
                </div>
                <div className="pile-buttons">
                    <button id="1" onClick={(e) => handleAddToPile(e, chosen_state.state)}>1</button>
                    <button id="2" onClick={(e) => handleAddToPile(e, chosen_state.state)}>2</button>
                    <button id="3" onClick={(e) => handleAddToPile(e, chosen_state.state)}>3</button>
                    <button id="4" onClick={(e) => handleAddToPile(e, chosen_state.state)}>4</button>
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
                        <DisplayStack type={stack1.type} size={stack1.size} stack_state={stack1_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack2.type} size={stack2.size} stack_state={stack2_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack3.type} size={stack3.size} stack_state={stack3_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack4.type} size={stack4.size} stack_state={stack4_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack5.type} size={stack5.size} stack_state={stack5_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack6.type} size={stack6.size} stack_state={stack6_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                    <div className="stack">
                        <DisplayStack type={stack7.type} size={stack7.size} stack_state={stack7_state} isChosenAmongYou={isChosenAmongYou}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
