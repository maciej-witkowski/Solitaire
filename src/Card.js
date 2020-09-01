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

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    }

    return (
        <div className="karta" onClick={handleClick} style={isClicked ? {border: '5px solid yellow'} : null}>
            <div className="figura">{props.figura}</div>
            <div className={black_or_red}><Kolor symbol={props.kolor}/></div>
        </div>
    );
}

export default Card;