import React, {useState} from 'react';

import Card from "./Card";
import Stack from "./Stack";


const kolory = ["♠", "♥", "♦", "♣"];
const figury = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function App() {

    const karta = <Card kolor={kolory[1]} figura={figury[2]}/>;

    return (
        <div className="app">
            {/*<Card kolor={kolory[1]} figura={figury[2]}/>*/}
            {/*<Card kolor={kolory[3]} figura={figury[9]}/>*/}
            <Stack title={1} card={karta}/>
            <Stack title={2} card={karta}/>
            <Stack title={3} card={karta}/>
            <Stack title={4} card={karta}/>
        </div>
    );
}

export default App;
