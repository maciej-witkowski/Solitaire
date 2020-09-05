import React from "react";
import './DisplayStack.css';

function DisplayStack(props) {

    return (
        <div className="display-stack">
            {props.stack_state}
        </div>
    )

}

export default DisplayStack;