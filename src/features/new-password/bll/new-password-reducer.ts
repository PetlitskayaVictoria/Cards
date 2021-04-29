export type NewPasswordActionType = {
   type: string
}

type ActionsType = NewPasswordActionType
type NewPasswordStateType = {
}
const initialState: NewPasswordStateType = {}

export const newPasswordReducer = (state: NewPasswordStateType = initialState, action: ActionsType): NewPasswordStateType => {
    switch (action.type) {

        default:
            return state;
    }
}
