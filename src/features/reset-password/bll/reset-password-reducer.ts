export type ResetPasswordActionType = {
   type: string
}

type ActionsType = ResetPasswordActionType
type ResetPasswordStateType = {
}
const initialState: ResetPasswordStateType = {}

export const resetPasswordReducer = (state: ResetPasswordStateType = initialState, action: ActionsType): ResetPasswordStateType => {
    switch (action.type) {

        default:
            return state;
    }
}
