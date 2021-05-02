import React from "react";
import SuperInputText from "../../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../../main/ui/common/c2-SuperButton/SuperButton";
import styles from "./Registration.module.css"

function Registration() {
    return (
        <div className={styles.formContainer}>
            Registration
            <SuperInputText />
            <SuperInputText />
            <SuperButton>Register</SuperButton>
        </div>
    );
}

export default Registration;

