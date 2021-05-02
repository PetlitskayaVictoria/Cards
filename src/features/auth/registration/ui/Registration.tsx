import React, {useState} from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import styles from "./Registration.module.css"

function Registration() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChange = (value: string) =>  {
        setEmail(value)
    }
    const onPasswordChange = (value: string) => {
        setPassword(value)
    }

    return (
        <div className={styles.formContainer}>
            Registration
            <SuperInputText onChangeText={onEmailChange}/>
            <SuperInputText onChangeText={onPasswordChange}/>
            <SuperButton>Register</SuperButton>
        </div>
    );
}

export default Registration;

