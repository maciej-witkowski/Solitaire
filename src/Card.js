import React, {useState} from "react";
import './Card.css';

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
    const black_or_red = props.kolor === "♥" || props.kolor === "♦" ? "kolor-red" : "kolor-black";

    return (
        <div className="karta">
            <div className="figura">{props.figura}</div>
            <div className={black_or_red}><Kolor symbol={props.kolor}/></div>
        </div>
    );
}

export default Card;