class Stack {
    constructor(size, state) {
        this.size = size;
        this.state = state;
    }

    addCard(card) {
        this.state.push(card);
    }

}

export default Stack;