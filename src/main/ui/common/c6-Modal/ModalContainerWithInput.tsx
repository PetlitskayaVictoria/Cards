import React, {useState} from "react";
import SuperButton from "../c2-SuperButton/SuperButton";
import Modal from "./Modal/Modal";
import SuperInputText from "../c1-SuperInputText/SuperInputText";

const ModalContainerWithInput: React.FC = () => {
    const [isShown, setIsShown] = useState(false)
    const closeModalWindow = () => {
        setIsShown(false)
    }

    return (
        <>
            <SuperButton onClick={() => {
                setIsShown(true)
            }}>Modal 2</SuperButton>
            <Modal closeModalWindow={closeModalWindow}
                   isShown={isShown}
            >
                <SuperInputText/>
                <SuperInputText/>
                <SuperInputText/>
                <SuperButton onClick={closeModalWindow}>Close</SuperButton>
            </Modal>
        </>
    );
}

export default ModalContainerWithInput;
