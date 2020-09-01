import React, {useState} from "react";
import Card from "./Card";

function Stack() {

    const [state, setState] = useState([]);

    let test = <Card />

    return (
        {test}
    )
}

export default Stack;