import React, {ChangeEvent} from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../../main/ui/common/c3-SuperCheckbox/SuperCheckbox";

type LoginType = {
    onChangeHandlerEmail: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerPassword: (e: ChangeEvent<HTMLInputElement>) => void
    onChangeHandlerRememberMe: (e: ChangeEvent<HTMLInputElement>) => void
    onClickHandler:()=>void
}

function Login(props: LoginType) {
    return (
        <div>
            <div>SIGN IN</div>
            <SuperInputText type={'email'} placeholder={'Enter email'} onChange={props.onChangeHandlerEmail}/>
            <div><SuperInputText type={'password'} placeholder={'Password'} onChange={props.onChangeHandlerPassword}/>
            </div>
            <div><SuperCheckbox onChange={props.onChangeHandlerRememberMe}>Remember Me</SuperCheckbox></div>
            <SuperButton onClick={props.onClickHandler}>Sign In</SuperButton>
        </div>

    );
}

export default Login;

