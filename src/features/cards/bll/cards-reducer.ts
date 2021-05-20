import {cardsAPI, CardType} from "../dal/cards-api";
import {AppThunk} from "../../../main/bll/store";

export type CardsParamsType = {
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

type CardsStateType = {
    cardsList: Array<CardType>
    cardsParams: CardsParamsType
}
const initialState: CardsStateType = {
    cardsList : [],
    cardsParams : {
        minGrade : 0,
        maxGrade : 100,
        page : 1,
        pageCount : 10,
        cardsTotalCount : 0,
        cardAnswer : "",
        cardQuestion : "",
        cardsPack_id : "",
        sortCards : 0
    }
}

export const cardsReducer = (state: CardsStateType = initialState, action: CardsActionsType) => {
    switch (action.type) {
        case "SET_CARDS":
            return {...state, cardsList : action.cardsList}
        case "SET_CARD_TOTAL_COUNT":
            return {...state, cardsParams : {...state.cardsParams, cardsTotalCount : action.cardsTotalCount}}
        case "CARDS/SET_PAGE":
            return {...state, cardsParams : {...state.cardsParams, page : action.page}}
        case "CARDS/SET_PACK_ID":
            return {...state, cardsParams : {...state.cardsParams, cardsPack_id : action.id}}
        default:
            return state;
    }
}
// Actions

export const setCardsListAC = (cardsList: Array<CardType>): SetCardsListActionType => ({
    type : "SET_CARDS", cardsList
} as const)

export const setCardsTotalCountAC = (cardsTotalCount: number): SetCardSTotalCountActionType => ({
    type : 'SET_CARD_TOTAL_COUNT', cardsTotalCount
} as const)

export const setCardsPageAC = (page: number): SetCardsPageActionType => ({
    type : 'CARDS/SET_PAGE', page
} as const)

export const setPackIdAC = (id: string): SetPackIdActionType => ({
    type : 'CARDS/SET_PACK_ID', id
} as const)

//Thunk

export const fetchCardsTC = (cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.fetchCards(cardsParams).then((res) => {
        dispatch(setCardsListAC(res.data.cards))
        dispatch(setCardsTotalCountAC(res.data.cardsTotalCount))
    })
}
export const addCardTC = (card: CardType, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.addCard(card).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    })
}
export const updateCardTC = (_id: string, question: string, comments: string, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.updateCard(_id, question, comments).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    })
}
export const deleteCardTC = (id: string, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.deleteCard(id).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    })
}

export type SetCardsListActionType = {
    type: 'SET_CARDS',
    cardsList: Array<CardType>
}
export type SetCardSTotalCountActionType = {
    type: 'SET_CARD_TOTAL_COUNT'
    cardsTotalCount: number
}
export type SetCardsPageActionType = {
    type: 'CARDS/SET_PAGE'
    page: number
}

export type SetPackIdActionType = {
    type: 'CARDS/SET_PACK_ID',
    id: string
}

export type CardsActionsType =
    | SetCardsListActionType
    | SetCardSTotalCountActionType
    | SetCardsPageActionType
    | SetPackIdActionType


