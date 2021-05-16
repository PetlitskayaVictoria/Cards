import React from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import styles from "./Registration.module.css"

type RegistrationType = {
    onEmailChange: (value: string) => void
    onPasswordChange: (value: string) => void
    registerUser: () => void
    error: string | null
}

export const Registration = (props: RegistrationType) => {

    return (
        <div className={styles.formContainer}>
            Registration
            <SuperInputText onChangeText={props.onEmailChange} type={"email"}/>
            <SuperInputText onChangeText={props.onPasswordChange} type={"password"}/>
            {props.error && <span className={styles.error}>{props.error}</span>}
            <SuperButton onClick={props.registerUser}>Register</SuperButton>
        </div>
    );
}

export default Registration;

