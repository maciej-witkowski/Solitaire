class Stack {
    constructor(type, size, state) {
        this.size = size;
        this.state = state;
        this.type = type;
    }

    addCard(card) {
        this.state.push(card);
    }

}

export default Stack;