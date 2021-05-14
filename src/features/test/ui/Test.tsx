import React from "react";
import SuperInputText from "../../../main/ui/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";
import SuperCheckbox from "../../../main/ui/common/c3-SuperCheckbox/SuperCheckbox";
import styles from './Test.module.css'
import Paginator from "../../../main/ui/common/c4-Paginator/Paginator";
import Packs from "../../packs/ui/Packs";

function Test() {
    return (
        <div className={styles.container}>
            <SuperInputText/>
            <SuperButton>Click me </SuperButton>
            <SuperCheckbox/>
            <Paginator totalItemsCount={1479}
                       pageSize={20}
                       currentPage={2}
                       onPageChanged={(pageNumber: number) => console.log('Page number is' + pageNumber)}
                       portionSize={10}
            />
            <Packs/>
        </div>
    );
}

export default Test;
