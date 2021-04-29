export type LoginActionType = {
   type: string
}

type ActionsType = LoginActionType
type LoginStateType = {
}
const initialState: LoginStateType = {}

export const loginReducer = (state: LoginStateType = initialState, action: ActionsType): LoginStateType => {
    switch (action.type) {

        default:
            return state;
    }
}
