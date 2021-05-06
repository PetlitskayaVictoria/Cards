import React, {ChangeEvent} from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../../main/ui/common/c3-SuperCheckbox/SuperCheckbox";
import s from './Login.module.css'

type LoginType = {
    onChangeHandlerEmail: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerPassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerRememberMe: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandler:()=>void
    error:string|null
}

function Login(props: LoginType) {
    return (
        <div className={s.formContainer}>
            <div>SIGN IN</div>
            <SuperInputText type={'email'} placeholder={'Enter email'} onChange={props.onChangeHandlerEmail}/>
            <div><SuperInputText type={'password'} placeholder={'Password'} onChange={props.onChangeHandlerPassword}/>
            </div>
            <div><SuperCheckbox onChange={props.onChangeHandlerRememberMe}>Remember Me</SuperCheckbox></div>
            {props.error&&<span className={s.error}>{props.error}</span>}
            <div><SuperButton onClick={props.onClickHandler}>Sign In</SuperButton></div>
        </div>

    );
}

export default Login;

