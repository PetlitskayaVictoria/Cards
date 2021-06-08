import React from "react";
import ModalConfirmationDialog from "./ModalConfirmationDialog";
import ModalWithInput from "./ModalWithInput";
import ModalUp from "./Modal/ModalUp";

const ModalsPage = () => {
    return (
        <div>
            <div style={{marginTop: "300px"}}>
                <ModalConfirmationDialog modalTitle={"Are you sure?"}
                                         buttonName={"Confirm"}
                                         onConfirm={() => {console.log("confirmed")}}/>
                <ModalWithInput buttonName={"Modal 1"}
                                modalTitle={"Modal 1"}
                                onSave={() => {console.log("saved")}}/>
            </div>
            <ModalUp/>
            <div style={{marginTop: "5000px"}}>bottom</div>
        </div>
    )
}

export default ModalsPage
