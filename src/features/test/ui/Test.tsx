import React from "react";
import SuperInputText from "../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../main/ui/common/c3-SuperCheckbox/SuperCheckbox";
import styles from './Test.module.css'

const Test = () => {
    return (
        <div className={styles.container}>
           <SuperInputText />
            <SuperButton>Click me </SuperButton>
           <SuperCheckbox />
        </div>
    );
}

export default Test;
