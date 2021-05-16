import {cardsAPI, CardType} from "../dal/cards-api";

type CardsStateType = {
    cardsList: Array<CardType>
    minGrade: number
    maxGrade: number
    page: number
    pageCount: number
    cardsTotalCount: number
    cardAnswer: string
    cardQuestion: string
    cardsPack_id: string
    sortCards: number
}
const initialState: CardsStateType = {
    cardsList : [],
    minGrade : 0,
    maxGrade : 100,
    page : 1,
    pageCount : 10,
    cardsTotalCount : 0,
    cardAnswer: "",
    cardQuestion: "",
    cardsPack_id: "",
    sortCards: 0
}

export const cardsReducer = (state: CardsStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_CARDS": return {...state, cardsPack_id: action.packId, cardsList: action.cardsList}
        case "SET_CARD_TOTAL_COUNT": return {...state, cardsTotalCount: action.cardsTotalCount}
        default:
            return state;
    }
}
// Actions

export const setCardsListAC = (cardsList: Array<CardType>): SetCardsListActionType => ({
    type : "SET_CARDS", packId: cardsList[0].cardsPack_id, cardsList
} as const)

export const setCardsTotalCountAC = (cardsTotalCount: number): SetCardSTotalCountActionType => ({
    type : 'SET_CARD_TOTAL_COUNT', cardsTotalCount
} as const)

export const fetchCardsTC = (cardAnswer?: string, cardQuestion?: string, cardsPack_id?: string, min?: number, max?: number, sortCards?: number, page?: number, pageCount?: number) => (dispatch: any) => {
    cardsAPI.fetchCards(cardAnswer, cardQuestion, cardsPack_id, min, max, sortCards, page, pageCount).then((res) => {
        dispatch(setCardsListAC(res.data.cards))
        dispatch(setCardsTotalCountAC(res.data.cardsTotalCount))
    })
}

export type SetCardsListActionType = {
    type: 'SET_CARDS',
    packId: string,
    cardsList: Array<CardType>
}
export type SetCardSTotalCountActionType = {
    type: 'SET_CARD_TOTAL_COUNT',
    cardsTotalCount: number
}

type ActionsType = SetCardsListActionType | SetCardSTotalCountActionType

