import {Dispatch} from "react";
import {registrationAPI} from "../dal/registration-api";

type RegistrationStateType = {
    isRegistered: boolean,
    error: string | null
}
const initialState: RegistrationStateType = {
    isRegistered: false,
    error: null
}

export const registrationReducer = (state: RegistrationStateType = initialState, action: ActionsType): RegistrationStateType => {
    switch (action.type) {
        case "SET_IS_REGISTERED": {
            return {...state, ...action.payload}
        }
        case "SET_ERROR":{
            return {...state, ...action.payload}
        }
        default:
            return state;
    }
}

export const SetIsRegisteredAC = (isRegistered: boolean) => ({
    type: 'SET_IS_REGISTERED',
    payload: {
        isRegistered
    }
} as const)

export const SetErrorAC = (error: string | null) => ({
    type: 'SET_ERROR',
    payload: {
        error
    }
} as const)


export const RegisterUserTC = (email: string, password: string) => (dispatch: Dispatch<any>) => {
    registrationAPI.registerUser(email, password)
        .then((res) => {
            dispatch(SetIsRegisteredAC(true))
        }).catch((error) => {
        console.log(error)
            dispatch(SetErrorAC(error.response.data.error))
    })
}

type ActionsType = ReturnType<typeof SetIsRegisteredAC> | ReturnType<typeof SetErrorAC>
