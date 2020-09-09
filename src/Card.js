class Card {
    constructor(id, color, figure) {
        this.id = id;
        this.color = color;
        this.figure = figure;
        this.flipped = false;
        this.chosen = false;
    }

    flip() {
        this.flipped = !this.flipped;
    }

    choose() {
        this.chosen = !this.chosen;
    }

}

export default Card;
