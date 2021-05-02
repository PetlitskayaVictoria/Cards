import React, {useState} from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import styles from "./Registration.module.css"
import {RegisterUserTC} from "../bll/registration-reducer";
import {useDispatch} from "react-redux";

function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const onEmailChange = (value: string) =>  {
        setEmail(value)
    }
    const onPasswordChange = (value: string) => {
        setPassword(value)
    }
    const registerUser = () => {
        dispatch(RegisterUserTC(email, password))
    }

    return (
        <div className={styles.formContainer}>
            Registration
            <SuperInputText onChangeText={onEmailChange}/>
            <SuperInputText onChangeText={onPasswordChange}/>
            <SuperButton onClick={registerUser}>Register</SuperButton>
        </div>
    );
}

export default Registration;

