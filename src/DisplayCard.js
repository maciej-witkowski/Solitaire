import React, {useState} from "react";
import './DisplayCard.css';

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

function DisplayCard(props) {

    const black_or_red = props.color === "♥" || props.color === "♦" ? "red" : "black";

    // const [isClicked, setClicked] = useState(props.chosen);
    //
    // const handleClick = () => {
    //   setClicked(!isClicked);
    // };

    return (
        <div className="card">
            {props.flipped ?
                <div className="card-back"></div> :
                props.chosen ?
                    <div className="card-front-chosen">
                        <div className="header">
                            <div className="figure">{props.figure}</div>
                            <div className={black_or_red}><Kolor symbol={props.color}/></div>
                        </div>
                        <div className="footer">
                            <div className={black_or_red}><Kolor symbol={props.color}/></div>
                        </div>
                    </div> :
                    <div className="card-front">
                        <div className="header">
                            <div className="figure">{props.figure}</div>
                            <div className={black_or_red}><Kolor symbol={props.color}/></div>
                        </div>
                        <div className="footer">
                            <div className={black_or_red}><Kolor symbol={props.color}/></div>
                        </div>
                    </div>
            }
        </div>
    )

}

export default DisplayCard;