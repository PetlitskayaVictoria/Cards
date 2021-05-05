import {loginAPI} from "../dal/login-api";
import {AppThunk} from "../../../../main/bll/store";

export const SET_IS_LOGIN = 'SET-IS-LOGIN';

export type ActionsLoginType = ReturnType<typeof setLoginAC>
type LoginStateType = {
    user: UserType | {}
    isLogin: boolean
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
    isLogin: false
}

export const loginReducer = (state: LoginStateType = initialState, action: ActionsLoginType): LoginStateType => {
    switch (action.type) {
        case "SET_IS_LOGIN":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state
    }
}
export const setLoginAC = (payload: LoginStateType) => ({
    type: 'SET_IS_LOGIN',
    payload
} as const)

export const login = (email: string, password: string, rememberMe: boolean): AppThunk =>
    (dispatch) => {
        loginAPI.login(email, password, rememberMe)
            .then((response) => {
                dispatch(setLoginAC({user: response.data, isLogin: true}))
            })
        /* if (response.data.resultCode === 0) {
             let {id, email, password, rememberMe, isLogin} = response.data.data
             dispatch(setLoginAC(id, email, password, rememberMe, isLogin))
         }*/
    }




