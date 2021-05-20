import React from "react";
import {CardType} from "../../cards/dal/cards-api";
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";

type LearnCardType = {
    card: CardType
    checked: boolean
    setIsChecked: (value: boolean) => void

}
export const LearnCard: React.FC<LearnCardType> = (props) => {
    return (
        <div>
            <h4>Question</h4>
            <h3>{props.card.question}</h3>
            <span>id:{props.card._id}</span>
            <div>
                {!props.checked && <SuperButton onClick={(e) =>
                    props.setIsChecked(true)}
                >Check</SuperButton>}
            </div>
            <div>
                {props.checked && (
                    <div>
                        <h3>Answer:{props.card.answer}</h3>
                    </div>
                )}
            </div>
        </div>
    )
}
