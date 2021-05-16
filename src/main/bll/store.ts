import {combineReducers, createStore, applyMiddleware} from 'redux';
import {ActionsLoginType, authReducer} from "../../features/auth/login/bll/auth-reducer";
import {registrationReducer} from "../../features/auth/registration/bll/registration-reducer";
import {newPasswordReducer} from "../../features/new-password/bll/new-password-reducer";
import {profileReducer} from "../../features/profile/bll/profile-reducer";
import {resetPasswordReducer} from "../../features/reset-password/bll/reset-password-reducer";
import {testReducer} from "../../features/test/bll/test-reducer";
import {packsReducer} from "../../features/packs/bll/packs-reducer";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import {cardsReducer} from "../../features/cards/bll/cards-reducer";

const rootReducer = combineReducers({
        login: authReducer,
        registration: registrationReducer,
        newPassword: newPasswordReducer,
        profile: profileReducer,
        resetPassword: resetPasswordReducer,
        test: testReducer,
        packs: packsReducer,
        cards: cardsReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
type AppActionType=ActionsLoginType
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppRootStateType, unknown, AppActionType>
export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
