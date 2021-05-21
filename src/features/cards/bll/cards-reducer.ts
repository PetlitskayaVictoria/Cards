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
    error: string | null
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
    },
    error : null
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
        case "CARDS/SET_ERROR": return {...state, error: action.error}
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

export const setCardsErrorAC = (error: null | string): SetCardsErrorActionType => ({
    type : 'CARDS/SET_ERROR', error
} as const)

//Thunk

export const fetchCardsTC = (cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.fetchCards(cardsParams).then((res) => {
        dispatch(setCardsListAC(res.data.cards))
        dispatch(setCardsTotalCountAC(res.data.cardsTotalCount))
    }).catch((error) => {
        dispatch(setCardsErrorAC(error.response.data.error))
    })
}
export const addCardTC = (card: CardType, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.addCard(card).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    }).catch((error) => {
        dispatch(setCardsErrorAC(error.response.data.error))
    })
}
export const updateCardTC = (_id: string, question: string, comments: string, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.updateCard(_id, question, comments).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    }).catch((error) => {
        dispatch(setCardsErrorAC(error.response.data.error))
    })
}
export const deleteCardTC = (id: string, cardsParams: CardsParamsType): AppThunk => (dispatch) => {
    cardsAPI.deleteCard(id).then(() => {
        dispatch(fetchCardsTC(cardsParams))
    }).catch((error) => {
        dispatch(setCardsErrorAC(error.response.data.error))
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

export type SetCardsErrorActionType = {
    type: 'CARDS/SET_ERROR',
    error: string | null
}

export type CardsActionsType =
    | SetCardsListActionType
    | SetCardSTotalCountActionType
    | SetCardsPageActionType
    | SetPackIdActionType
    | SetCardsErrorActionType


