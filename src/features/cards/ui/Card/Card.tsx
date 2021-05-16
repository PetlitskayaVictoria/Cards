import React from "react";
import {CardType} from "../../dal/cards-api";


type CardPropsType = {
    card: CardType
    packId: string
}

const Card: React.FC<CardPropsType> = (props) => {


    return (
        <>
            <tr>
                <td>{props.card.question}</td>
                <td>{props.card.answer}</td>
                <td>{props.card.grade}</td>
                <td>{props.card.updated}</td>
            </tr>

        </>
    );
}

export default Card;
