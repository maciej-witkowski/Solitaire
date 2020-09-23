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
    for(let i = 0; i < deck.length; i++) {
        if (i < deck.length - 1) deck[i].nextCard = deck[i + 1].id;
    }
    for (let i = 0; i < 28; i++) {
        // if (i !== 0 && i !== 2 && i !== 5 && i !== 9 && i !== 14 && i !== 20 && i !== 27)
        //     deck[i].flip();
    }
}