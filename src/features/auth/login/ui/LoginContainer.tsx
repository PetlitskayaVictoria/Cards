import React, {ChangeEvent, useCallback, useState} from "react";
import Login from "./Login";
import {AppRootStateType} from "../../../../main/bll/store";
import {NavLink,Redirect} from "react-router-dom";
import {login} from "../bll/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {PATH} from "../../../../main/ui/Routes";

type LoginContainerType = {}

function LoginContainer() {
    const dispatch = useDispatch()

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [rememberMe, setRememberMe] = useState<boolean>(false)
    const isLogin = useSelector<AppRootStateType, boolean>((state) => state.login.isLogin)
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
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <Login
                onChangeHandlerEmail={onChangeHandlerEmail}
                onChangeHandlerPassword={onChangeHandlerPassword}
                onChangeHandlerRememberMe={onChangeHandlerRememberMe}
                onClickHandler={onClickHandler}
            />
            <span>
                <NavLink to={PATH.REGISTRATION}> Registration</NavLink>
            </span>
        </div>
    )
        ;
}

export default LoginContainer;

