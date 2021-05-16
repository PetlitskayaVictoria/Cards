import React, {useEffect} from "react";
import style from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {CardType} from "../dal/cards-api";
import {addCardTC, fetchCardsTC, setCardsPageAC} from "../bll/cards-reducer";
import Card from "./Card/Card";
import { useParams } from "react-router-dom";
import Paginator from "../../../main/ui/common/c4-Paginator/Paginator";
type RoutesParamType = {
    id: string
}
const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>((state) => state.cards.cardsList)
    const cardAnswer = useSelector<AppRootStateType, string>((state) => state.cards.cardAnswer)
    const cardQuestion = useSelector<AppRootStateType, string>((state) => state.cards.cardQuestion)
    const min = useSelector<AppRootStateType, number>((state) => state.cards.minGrade)
    const max = useSelector<AppRootStateType, number>((state) => state.cards.maxGrade)
    const sortCards = useSelector<AppRootStateType, number>((state) => state.cards.sortCards)
    const page = useSelector<AppRootStateType, number>((state) => state.cards.page)
    const pageCount = useSelector<AppRootStateType, number>((state) => state.cards.pageCount)
    const cardsTotalCount = useSelector<AppRootStateType, number>((state) => state.cards.cardsTotalCount)
    let {id} = useParams<RoutesParamType>()

    useEffect(() => {
        dispatch(fetchCardsTC(cardAnswer, cardQuestion, id, min, max, sortCards, page, pageCount))
    }, [])

    const setPage = (page: number) => {
        dispatch(setCardsPageAC(page))
        dispatch(fetchCardsTC(cardAnswer, cardQuestion, id, min, max, sortCards, page, pageCount))
    }
    const addCard = () => {
        let card = {
            answer: "this is the answer",
            question: "this is the question,",
            cardsPack_id: id,
            grade: 3,
            rating: 6,
            shots: 2,
            type: "card",
            user_id: "",
            created: "",
            updated: "",
            _v: 0,
            _id: 0
        }
        dispatch(addCardTC(card, cardAnswer, cardQuestion, id, min, max, sortCards, page, pageCount))
    }

    return (
        <div>
            <h2>Cards</h2>
            <div className={style.paginator}>
                <Paginator totalItemsCount={cardsTotalCount}
                           pageSize={pageCount}
                           currentPage={page}
                           onPageChanged={setPage}
                           portionSize={10}
                />
            </div>
            <div className={style.filtersContainer}>
            </div>
            <table className={style.tableContainer}>
                <tr className={style.tableHeaders}>
                    <td>Question</td>
                    <td>Answer</td>
                    <td>Grade</td>
                    <td>Updated</td>
                    <button onClick={addCard}>Add</button>
                </tr>
                {cards.map((c) => {
                    return <Card key={c._id}
                                 card={c}
                                 packId={c.cardsPack_id}

                    />
                })}
            </table>
        </div>
    );
}

export default Cards;
