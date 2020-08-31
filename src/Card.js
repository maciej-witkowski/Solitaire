import React from "react";

const Kolor = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
    {props.symbol}
  </span>
);

function Card(props) {
    return (
        <p>Wylosowana karta koloru: <Kolor symbol={props.kolor}/> i figury: {props.figura} </p>
    );
}

export default Card;