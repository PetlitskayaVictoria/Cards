import React, {ChangeEvent, useState} from "react";
import SuperButton from "../c2-SuperButton/SuperButton";
import Modal from "./Modal/Modal";
import SuperInputText from "../c1-SuperInputText/SuperInputText";

type ModalContainerPropsType = {
    onSave: (inputValue: string) => void
    buttonName: string
    modalTitle: string
    packName?: string
}

const ModalWithInput: React.FC<ModalContainerPropsType> = (props) => {
    const [isShown, setIsShown] = useState(false)
    const [inputValue, setInputValue] = useState(props.packName || "")
    const closeModalWindow = () => {
        setIsShown(false)
    }
    const onSaveClick = (inputValue: string) => {
        props.onSave(inputValue)
        closeModalWindow()
        if (!props.packName) {
            setInputValue("")
        }
    }
    const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
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
                    <SuperInputText onChange={onInputChange} value={inputValue}/>
                    <div>
                        <SuperButton onClick={closeModalWindow}>Close</SuperButton>
                        <SuperButton disabled={!inputValue} onClick={() => {
                            onSaveClick(inputValue)
                        }}>Save</SuperButton>
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default ModalWithInput;
