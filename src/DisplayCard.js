import React from "react";
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

    // const currCard = {
    //     id: props.id,
    //     color: props.color,
    //     figure: props.figure,
    //     flipped: props.flipped
    // }
    //
    // const [card, changeCard] = useState(currCard);
    //
    // useEffect(() => { changeCard(currCard) }, [currCard]);

    // const [key, setKey] = useState(props.key);
    // useEffect(() => { setKey(props.key) }, [props.key])
    //
    // const [color, setColor] = useState(props.color);
    // useEffect(() => { setColor(props.color) }, [props.color])
    //
    // const [figure, setFigure] = useState(props.figure);
    // useEffect(() => { setFigure(props.figure) }, [props.figure])
    //
    // const [flipped, setFlipped] = useState(props.flipped);
    // useEffect(() => { setFlipped(props.flipped) }, [props.flipped])

    const black_or_red = props.color === "♥" || props.color === "♦" ? "red" : "black";

    return (
        <div className="card">
            {props.flipped ?
                <div className="card-back"></div> :
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