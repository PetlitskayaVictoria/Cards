import React, {ChangeEvent, useCallback, useState} from "react";
import Login from "./Login";
import {AppRootStateType} from "../../../../main/bll/store";
import {NavLink, Redirect} from "react-router-dom";
import {login} from "../bll/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {PATH} from "../../../../main/ui/Routes";
import s from './Login.module.css'
import {Logout} from "./logaut/Logout";

type LoginContainerType = {}

function LoginContainer() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isLogin = useSelector<AppRootStateType, boolean>((state) => state.login.isLogin)
    const error = useSelector<AppRootStateType, string | null>((state) => state.login.error)
    let onChangeHandlerEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value)
    }, [setEmail])
    let onChangeHandlerPassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value)
    }, [setPassword])
    let onChangeHandlerRememberMe = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setRememberMe(e.currentTarget.checked)
    }, [setRememberMe])
    let onClickHandler = () => {
        dispatch(login(email, password, rememberMe))
    }

    if (isLogin) {
        return <Redirect to={PATH.PROFILE}/>
    }

    return (
        <div>
            <Login
                onChangeHandlerEmail={onChangeHandlerEmail}
                onChangeHandlerPassword={onChangeHandlerPassword}
                onChangeHandlerRememberMe={onChangeHandlerRememberMe}
                onClickHandler={onClickHandler}
                error={error}
            />
            <span>
                <NavLink className={s.text} to={PATH.REGISTRATION}>Registration</NavLink>
                <NavLink className={s.text} to={PATH.RESET_PASSWORD}>   Forget password</NavLink>
            </span>
        </div>
    )
        ;
}

export default LoginContainer;

