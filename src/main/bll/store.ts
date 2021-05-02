import {combineReducers, createStore, applyMiddleware} from 'redux';
import {loginReducer} from "../../features/auth/login/bll/login-reducer";
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

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
