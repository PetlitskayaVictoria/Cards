import React from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../../main/ui/common/c3-SuperCheckbox/SuperCheckbox";

type LoginType = {}

function Login() {
    return (
        <div>
            <div>SIGN IN</div>
            <SuperInputText type={'email'} placeholder={'Enter email'}/>
            <div><SuperInputText type={'password'} placeholder={'Password'}/></div>
            <div><SuperCheckbox/></div>
            <SuperButton/>
        </div>
    );
}

export default Login;

