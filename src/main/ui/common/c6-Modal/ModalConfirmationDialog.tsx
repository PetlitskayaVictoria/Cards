import React, {useState} from "react";
import SuperButton from "../c2-SuperButton/SuperButton";
import Modal from "./Modal/Modal";

type ModalConfirmationDialogPropsType = {
    modalTitle: string
    onConfirm: () => void
    buttonName: string
}
const ModalConfirmationDialog: React.FC<ModalConfirmationDialogPropsType> = (props) => {
    const [isShown, setIsShown] = useState(false)
    const closeModalWindow = () => {
        setIsShown(false)
    }
    const onConfirmClick = () => {
        props.onConfirm()
        closeModalWindow()
    }

    return (
        <>
            <SuperButton onClick={() => {
                setIsShown(true)
            }}>{props.buttonName}</SuperButton>
            <div style={{display: "inline-block"}}>
                <Modal closeModalWindow={closeModalWindow}
                       isShown={isShown}
                       showBackground={true}
                       width={600}
                       height={400}
                       top={50}
                       left={50}
                       position={"absolute"}
                >
                    <h3 style={{textAlign: "center"}}>{props.modalTitle}</h3>
                    <div style={{display: "flex"}}>
                        <SuperButton onClick={closeModalWindow}>Cancel</SuperButton>
                        <SuperButton onClick={onConfirmClick}>Confirm</SuperButton>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default ModalConfirmationDialog;
