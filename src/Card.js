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

    const [flipped, setFlip] = useState(false);

    const black_or_red = props.kolor === "♥" || props.kolor === "♦" ? "red" : "black";
    
    return (
        <div className="card">
            {flipped ?
                <div className="card-back"></div> :
                <div className="card-front">
                    <div className="header">
                        <div className="figure">{props.figura}</div>
                        <div className={black_or_red}><Kolor symbol={props.kolor}/></div>
                    </div>
                    <div className="footer">
                        <div className={black_or_red}><Kolor symbol={props.kolor}/></div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card;