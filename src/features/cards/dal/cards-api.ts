import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})

export const cardsAPI = {
    fetchCards(cardAnswer?: string, cardQuestion?: string, cardsPack_id?: string, min?: number, max?: number, sortCards?: number, page?: number, pageCount?: number) {
        return instance.get<ResponseType>('cards/card', {params: {cardAnswer, cardQuestion, cardsPack_id, min, max, sortCards, page, pageCount}})
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
    _id: number
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
