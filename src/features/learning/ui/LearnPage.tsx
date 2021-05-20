import React, {useState} from "react";
import {LearnCard} from "../LearnCard/LearnCard";
import {CardType} from "../../cards/dal/cards-api";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";

type LearningPageType = {}

export const LearningPage: React.FC<LearningPageType> = () => {
    const cards = useSelector<AppRootStateType, CardType[]>(state => state.cards.cardsList)
    const isAuth = useSelector<AppRootStateType, boolean>(state => state.login.isLogin)

    const [card, setCard] = useState<CardType>({
        _id: ''
    } as CardType)
    const [checked, setIsChecked] = useState<boolean>(false)

    return (
        <div>
            <LearnCard card={card} checked={checked} setIsChecked={setIsChecked}/>
        </div>
    )
}