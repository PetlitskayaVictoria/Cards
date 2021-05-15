import React, {ChangeEvent, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setNewPasswordTC, setResetPassword} from "../bll/reset-password-reducer";
import {AppRootStateType} from "../../../main/bll/store";
import {NavLink, Redirect, RouteComponentProps, useParams} from "react-router-dom";
import {PATH} from "../../../main/ui/Routes";
import s from "../../auth/login/ui/Login.module.css";
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";

/*
type PathParamsType = {
    token: string
}
type PropsType = RouteComponentProps<PathParamsType>
*/

const ResetPassword: React.FC = (props) => {
    const [newPassword, setNewPassword] = useState<string>('')
    const [repeatNewPassword, setRepeatNewPassword] = useState<string>("")
    const dispatch = useDispatch()
    const {token} = useParams<Record<string, string>>();
    const isNewPassword = useSelector<AppRootStateType, boolean>(state => state.resetPassword.isNewPassword)
    const tokenName = token ? token : ''
    const onChangeNewPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.currentTarget.value)
    }
    const onChangeRepeatPassword = (e: ChangeEvent<HTMLInputElement>) => {
        setRepeatNewPassword(e.currentTarget.value)
    }
    const onClickNewPassword = () => {
        if (newPassword === repeatNewPassword) {
            dispatch(setNewPasswordTC(newPassword, tokenName))
        } else {
            alert('Password mismatch')
        }
    }
    if (isNewPassword) {
        return <Redirect to={PATH.LOGIN}/>}
    return (
        <div className={s.formContainer}>
            <div>Reset Password</div>
            <form><input type={'password'} onChange={onChangeNewPassword}/>
                <input type={'password'} onChange={onChangeRepeatPassword}/>
                <div>
                    <div><SuperButton onClick={onClickNewPassword}>Send</SuperButton></div>
                </div>
            </form>
            <div>
                <NavLink className={s.text} to={PATH.LOGIN}>Login</NavLink>
            </div>
        </div>
    );
}

export default ResetPassword;

