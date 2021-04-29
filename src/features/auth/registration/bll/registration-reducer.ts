export type RegistrationActionType = {
   type: string
}

type ActionsType = RegistrationActionType
type RegistrationStateType = {
}
const initialState: RegistrationStateType = {}

export const registrationReducer = (state: RegistrationStateType = initialState, action: ActionsType): RegistrationStateType => {
    switch (action.type) {

        default:
            return state;
    }
}
