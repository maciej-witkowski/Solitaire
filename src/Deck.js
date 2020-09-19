import Card from "./Card";

const colors = ["♠", "♥", "♦", "♣"];
const figures = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

export function create_deck() {
    const deck = [];
    let count = 0;
    for(let i = 0; i < colors.length; i++) {
        for(let j = 0; j < figures.length; j++) {
            deck.push(new Card(count, colors[i], figures[j]));
            count++;
        }
    }

    return deck;
}

export function shuffle(deck) {
    deck.sort(() => Math.random() - 0.5);
    // for(let i = 0; i < deck.length; i++) {
    //     if (i === 1 || i === 3 || i === 4 || i === 6 || i === 7 || i === 8 || i === 10 || i === 11 || i === 12 || i === 13 || i === 15 || i === 16 || i === 17 || i === 18 || i === 19 || i === 21 || i === 22 || i === 23 || i === 24 || i === 25 || i === 26) {
    //         deck[i].flip();
    //     }
    // }
    for (let i = 0; i < 27; i++) {
        deck[i].flip();
    }
}