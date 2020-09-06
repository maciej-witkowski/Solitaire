class Card {
    constructor(id, color, figure) {
        this.id = id;
        this.color = color;
        this.figure = figure;
        this.flipped = false;
    }

    flip() {
        this.flipped = !this.flipped;
        // return this;
    }

}

export default Card;
