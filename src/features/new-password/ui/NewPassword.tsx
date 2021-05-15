import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Redirect} from "react-router-dom";
import {AppRootStateType} from "../../../main/bll/store";
import {recoveryPasswordTC} from "../bll/new-password-reducer";
import {PATH} from "../../../main/ui/Routes";

function NewPassword() {
    const isForgot = useSelector<AppRootStateType, boolean>(state => state.newPassword.isForgot)
    const [isRecoveryPassword, setIsRecoveryPassword] = useState<string>('')
    const dispatch = useDispatch();
    const onChangePasswordHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setIsRecoveryPassword(e.currentTarget.value)
    }
    const sendEmail = () => {
        dispatch(recoveryPasswordTC(isRecoveryPassword))
    }
    if (isForgot) {
        return <Redirect to={PATH.RESET_PASSWORD}/>
    }
    return (
        <div>
            <form>
                <span>Email:</span> <input type={'email'} onChange={onChangePasswordHandler}/>
                <div>
                    <button type={'submit'} onClick={sendEmail}>Send</button>
                </div>
            </form>
            <div>
                <NavLink to={PATH.LOGIN}>Login</NavLink>
            </div>
        </div>

    );
}

export default NewPassword;
