import React from "react";
import './DisplayStack.css';

function DisplayStack(props) {

    return (
        <div className="display-stack">
            <h3>Stos {props.title}</h3>
            {props.stack_state}
        </div>
    )

}

export default DisplayStack;