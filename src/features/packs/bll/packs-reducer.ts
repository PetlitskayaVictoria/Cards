import {packsAPI} from "../dal/packs-api";

export type PackType = {
    cardsCount: number
    created: string
    deckCover: null | string
    grade: number
    more_id: string
    name: string
    path: string
    private: boolean
    rating: number
    shots: number
    type: string
    updated: string
    user_id: string
    user_name: string
    __v: number
    _id: string
}
type PacksStateType = {
    packName: string
    packsList: Array<PackType>
    min: number
    max: number
    sortPacks: number
    page: number
    pageCount: number
    cardPacksTotalCount: number
}
const initialState: PacksStateType = {
    packName : "",
    packsList : [],
    min : 2,
    max : 50,
    sortPacks : 0,
    page : 1,
    pageCount : 10,
    cardPacksTotalCount : 0
}

export const packsReducer = (state: PacksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_PACKS":
            return {...state, packsList : action.packsList}
        case "SET_PACKS_SEARCH_TERM":
            return {...state, packName : action.packName}
        case "SET_CARD_PACKS_TOTAL_COUNT":
            return {...state, cardPacksTotalCount : action.cardPacksTotalCount}
        case "SET_PAGE": return {...state, page: action.page}
        default:
            return state;
    }
}
// Actions

export const setPacksListAC = (packsList: Array<PackType>): SetPacksListActionType => ({
    type : "SET_PACKS", packsList
} as const)
export const SetPacksSearchTermAC = (packName: string): SetPacksSearchTermActionType => ({
    type : 'SET_PACKS_SEARCH_TERM',
    packName
} as const)
export const setCardPacksTotalCountAC = (cardPacksTotalCount: number): SetCardPacksTotalCountActionType => ({
    type : 'SET_CARD_PACKS_TOTAL_COUNT', cardPacksTotalCount
} as const)
export const setPageAC = (page: number): SetPageActionType => ({
    type : 'SET_PAGE', page
} as const)
// TC

export const fetchPacksTC = (packName?: string, min?: number, max?: number, sortPacks?: number, page?: number, pageCount?: number) => (dispatch: any) => {
    packsAPI.fetchPacks(packName, min, max, sortPacks, page, pageCount).then((res) => {
        dispatch(setPacksListAC(res.data.cardPacks))
        dispatch(setCardPacksTotalCountAC(res.data.cardPacksTotalCount))
    })
}

// Types
export type SetPacksSearchTermActionType = {
    type: 'SET_PACKS_SEARCH_TERM',
    packName: string
}
export type SetPacksListActionType = {
    type: 'SET_PACKS',
    packsList: Array<PackType>
}

export type SetCardPacksTotalCountActionType = {
    type: 'SET_CARD_PACKS_TOTAL_COUNT',
    cardPacksTotalCount: number
}

export type SetPageActionType = {
    type: 'SET_PAGE',
    page: number
}
type ActionsType =
    | SetPacksSearchTermActionType
    | SetPacksListActionType
    | SetCardPacksTotalCountActionType
    | SetPageActionType
