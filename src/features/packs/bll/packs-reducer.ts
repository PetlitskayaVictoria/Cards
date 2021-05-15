import {packsAPI} from "../dal/packs-api";

export type PackType = {
    id: number,
    name: string,
    cardsCount: number,
    updated: string
}
type PacksStateType = {
    searchTerm: string,
    packsList: Array<PackType>
}
const initialState: PacksStateType = {
    searchTerm : "",
    packsList : [
        // {id : 1, name : "React", cardsCount: 40, updated: "2021-05-19T09:54:00"},
        // {id : 2, name : "Typescript", cardsCount: 9, updated: "2021-05-02T04:50:00"},
        // {id : 3, name : "Redux", cardsCount: 115, updated: "2021-03-11T18:24:00"},
        // {id : 4, name : "JavaScript", cardsCount: 13, updated: "2021-02-09T20:17:00"}
    ]
}

export const packsReducer = (state: PacksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_PACKS": return {...state, packsList: action.packsList}
        case "SET_PACKS_SEARCH_TERM": return {...state, searchTerm: action.searchTerm}
        default:
            return state;
    }
}

export const setPacksListAC = (packsList: Array<PackType>): SetPacksListActionType => ({
    type: "SET_PACKS", packsList
} as const)
export const SetPacksSearchTermAC = (searchTerm: string): SetPacksSearchTermActionType => ({
    type : 'SET_PACKS_SEARCH_TERM',
    searchTerm
} as const)

export const fetchPacksTC = () => (dispatch: any) => {
    packsAPI.fetchPacks().then((res) => {
        dispatch(setPacksListAC(res.data))
    })
}

export type SetPacksSearchTermActionType = {
    type: 'SET_PACKS_SEARCH_TERM',
    searchTerm: string
}
export type SetPacksListActionType = {
    type: 'SET_PACKS',
    packsList: Array<PackType>
}
type ActionsType = SetPacksSearchTermActionType | SetPacksListActionType
