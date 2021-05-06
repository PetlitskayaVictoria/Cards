import {loginAPI} from "../dal/login-api";
import {AppThunk} from "../../../../main/bll/store";

export const SET_IS_LOGIN = 'SET-IS-LOGIN';
export const SET_ERROR = "SET_ERROR";

export type ActionsLoginType = ReturnType<typeof setLoginAC> | ReturnType<typeof setError>
type LoginStateType = {
    user: UserType | {}
    isLogin: boolean
    error: string | null
}
type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}
const initialState: LoginStateType = {
    user: {},
    isLogin: false,
    error: null
}

export const loginReducer = (state: LoginStateType = initialState, action: ActionsLoginType): LoginStateType => {
    switch (action.type) {
        case "SET_IS_LOGIN":
            return {
                ...state,
                ...action.payload
            };
        case "SET_ERROR": {
            return {...state, error: action.error}
        }
        default:
            return state
    }
}
export const setLoginAC = (user: LoginStateType) => ({
    type: 'SET_IS_LOGIN',
    payload: {
        user
    }
} as const)
export const setError = (error: string | null) => ({
    type: "SET_ERROR",
    error

} as const)

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        loginAPI.login(email, password, rememberMe)
            .then((response) => {
                dispatch(setLoginAC({user: response.data, isLogin: true, error: null}))
            })
            .catch((e) => {
                const error = e.response ? e.response.data.error : (e.message + ', more details in the console')
                dispatch(setError(error))
            })
        /* if (response.data.resultCode === 0) {
             let {id, email, password, rememberMe, isLogin} = response.data.data
             dispatch(setLoginAC(id, email, password, rememberMe, isLogin))
         }*/
    }




