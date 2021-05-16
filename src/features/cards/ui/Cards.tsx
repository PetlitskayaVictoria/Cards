import React, {useEffect} from "react";
import style from "./Cards.module.css"
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {CardType} from "../dal/cards-api";
import {fetchCardsTC} from "../bll/cards-reducer";
import Card from "./Card/Card";

const Cards = () => {
    const dispatch = useDispatch()
    const cards = useSelector<AppRootStateType, Array<CardType>>((state) => state.cards.cardsList)
    const cardAnswer = useSelector<AppRootStateType, string>((state) => state.cards.cardAnswer)
    const cardQuestion = useSelector<AppRootStateType, string>((state) => state.cards.cardQuestion)
    const cardsPackId = useSelector<AppRootStateType, string>((state) => state.cards.cardsPack_id)
    const min = useSelector<AppRootStateType, number>((state) => state.cards.minGrade)
    const max = useSelector<AppRootStateType, number>((state) => state.cards.maxGrade)
    const sortCards = useSelector<AppRootStateType, number>((state) => state.cards.sortCards)
    const page = useSelector<AppRootStateType, number>((state) => state.cards.page)
    const pageCount = useSelector<AppRootStateType, number>((state) => state.cards.pageCount)
    useEffect(() => {
        dispatch(fetchCardsTC(cardAnswer, cardQuestion, cardsPackId, min, max, sortCards, page, pageCount))
    }, [])
    return (
        <div>
            <h2>Cards</h2>
            <div className={style.filtersContainer}>
            {/*    <Search setFilteredResults={setFilteredResults}/>*/}
            {/*    <Paginator totalItemsCount={cardPacksTotalCount}*/}
            {/*               pageSize={pageCount}*/}
            {/*               currentPage={page}*/}
            {/*               onPageChanged={setPage}*/}
            {/*               portionSize={10}*/}
            {/*    />*/}
            </div>
            <table className={style.tableContainer}>
                <tr className={style.tableHeaders}>
                    <td>Question</td>
                    <td>Answer</td>
                    <td>Grade</td>
                    <td>Updated</td>
                    <button>Add</button>
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
