import React from "react";
import Card from "./Card";

const colors = ["♠", "♥", "♦", "♣"];
const figures = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function create_deck() {
    const deck = [];
    let count = 0;
    for(let i = 0; i < colors.length; i++) {
        for(let j = 0; j < figures.length; j++) {

            deck.push(<Card key={count} kolor={colors[i]} figura={figures[j]}/>)
            count++;
        }
    }

    return deck;
}

export function shuffle(deck) {
    deck.sort(() => Math.random() - 0.5);
}