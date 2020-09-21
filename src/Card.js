class Card {
    constructor(id, color, figure) {
        this.id = id;
        this.color = color;
        this.figure = figure;
        this.nextCard = undefined;
        this.flipped = false;
        this.chosen = false;
    }

    flip() {
        this.flipped = !this.flipped;
    }

    choose() {
        this.chosen = !this.chosen;
    }

    setNextCard(cardId) {
        this.nextCard = cardId;
    }

}

export default Card;
