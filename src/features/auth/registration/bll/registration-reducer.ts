import {Dispatch} from "react";
import {registrationAPI} from "../dal/registration-api";
import {Simulate} from "react-dom/test-utils";

type RegistrationStateType = {
    isRegistered: boolean
}
const initialState: RegistrationStateType = {
    isRegistered: false
}

export const registrationReducer = (state: RegistrationStateType = initialState, action: ActionsType): RegistrationStateType => {
    switch (action.type) {
        default:
            return state;
    }
}

const SetIsRegisteredAC = (isRegistered: boolean) => ({
    type: SET_IS_REGISTERED,
    isRegistered
} as const)

export const RegisterUserTC = (email: string, password: string) => (dispatch: Dispatch<any>) => {
    registrationAPI.registerUser(email, password)
        .then((res) => {
            console.log(res.data)
            SetIsRegisteredAC(true)
        }).catch((error) => {
        console.log(error)
    })
}

const SET_IS_REGISTERED = 'SET_IS_REGISTERED'

export type SetIsRegisteredACType = ReturnType<typeof SetIsRegisteredAC>

type ActionsType = SetIsRegisteredACType
