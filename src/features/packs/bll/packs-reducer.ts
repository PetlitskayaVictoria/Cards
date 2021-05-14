export type PackType = {
    id: number,
    name: string
}
type PacksStateType = {
    searchTerm: string,
    packsList: Array<PackType>
}
const initialState: PacksStateType = {
    searchTerm : "",
    packsList : [
        {id : 1, name : "React"}, {id : 2, name : "Typescript"}, {id : 3, name : "Redux"}, {id : 4, name : "JavaScript"}
    ]
}

export const packsReducer = (state: PacksStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_PACKS_SEARCH_TERM": return {...state, searchTerm: action.searchTerm}
        default:
            return state;
    }
}

export type SetPacksSearchTermActionType = {
    type: 'SET_PACKS_SEARCH_TERM',
    searchTerm: string
}

export const SetPacksSearchTermAC = (searchTerm: string): SetPacksSearchTermActionType => ({
    type : 'SET_PACKS_SEARCH_TERM',
    searchTerm
} as const)

type ActionsType = SetPacksSearchTermActionType
