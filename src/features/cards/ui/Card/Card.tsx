import React from "react";
import {CardType} from "../../dal/cards-api";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import style from "./Card.module.css"

type CardPropsType = {
    card: CardType
    packId: string
}

const Card: React.FC<CardPropsType> = (props) => {


    return (
        <>
            <tr className={style.cardContainer}>
                <td>{props.card.question}</td>
                <td>{props.card.answer}</td>
                <td>{props.card.grade}</td>
                <td>{props.card.updated}</td>
                <SuperButton>update</SuperButton>
                <SuperButton>delete</SuperButton>
            </tr>

        </>
    );
}

export default Card;
