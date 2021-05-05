import {applyMiddleware, combineReducers, createStore} from 'redux';
import { ThunkAction } from 'redux-thunk';
import {ActionsLoginType, loginReducer} from "../../features/auth/login/bll/login-reducer";
import {registrationReducer} from "../../features/auth/registration/bll/registration-reducer";
import {newPasswordReducer} from "../../features/new-password/bll/new-password-reducer";
import {profileReducer} from "../../features/profile/bll/profile-reducer";
import {resetPasswordReducer} from "../../features/reset-password/bll/reset-password-reducer";
import {testReducer} from "../../features/test/bll/test-reducer";
import thunkMiddleware from 'redux-thunk'


const rootReducer = combineReducers({
        login: loginReducer,
        registration: registrationReducer,
        newPassword: newPasswordReducer,
        profile: profileReducer,
        resetPassword: resetPasswordReducer,
        test: testReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunkMiddleware));
type AppActionType=ActionsLoginType
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>

// @ts-ignore
window.store = store;
