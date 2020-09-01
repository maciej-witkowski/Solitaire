import React from 'react';
import './App.css';
import Card from "./Card";

const kolory = ["♠", "♥", "♦", "♣"];
const figury = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

function App() {
  return (
      <div>
        <Card kolor={kolory[1]} figura={figury[2]}/>
        <Card kolor={kolory[3]} figura={figury[9]}/>
      </div>
  );
}

export default App;
