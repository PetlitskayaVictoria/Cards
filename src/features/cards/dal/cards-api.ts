import {instance} from "../../../main/dal/instance";
import {CardsParamsType} from "../bll/cards-reducer";

export const cardsAPI = {
    fetchCards(cardsParams: CardsParamsType) {
        return instance.get<ResponseType>('cards/card', {params: {...cardsParams}})
    },
    addCard(card: CardType) {
        return instance.post('cards/card', {card})
    },
    updateCard(_id: string, question: string, comments: string) {
        return instance.put('cards/card', {card: {_id, question, comments}})
    },
    deleteCard(id: string) {
        return instance.delete('cards/card', {params: {id}})
    }
}

export type CardType = {
    answer: string
    question: string
    cardsPack_id: string
    grade: number
    rating: number
    shots: number
    type: string
    user_id: string
    created: string
    updated: string
    _v: number
    _id: string
}

type ResponseType = {
    cards: Array<CardType>
    cardsTotalCount: number
    maxGrade: number
    minGrade: number
    page: number
    pageCount: number
    packUserId: string
}
