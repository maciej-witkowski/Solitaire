import React from "react";
import './DisplayStack.css';
import DisplayCard from "./DisplayCard";

function DisplayStack(props) {

    // const [stack, changeStack] = useState(props.stack_state);
    // useEffect(() => { changeStack(props.stack_state) }, [props.stack_state]);

    return (
        <div className={props.type === "stack" ? "display-stack" :  props.type === "pile" ? "display-pile" : "display-chose"}>
            {props.stack_state.map((card) => <DisplayCard key={card.id} color={card.color} figure={card.figure} flipped={card.flipped}/>)}
        </div>
    )

}

export default DisplayStack;