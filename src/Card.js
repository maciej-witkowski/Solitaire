class Card {
    constructor(key, color, figure) {
        this.key = key;
        this.color = color;
        this.figure = figure;
        this.flipped = false;
    }

    flip() {
        this.flipped = !this.flipped;
    }

}

export default Card;
