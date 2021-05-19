import React from "react";
import style from './Modal.module.css';

type ModalPropsType = {
    closeModalWindow: () => void
    isShown: boolean
};

const Modal: React.FC<ModalPropsType> = (props) => {

    return (
        <div>
            {props.isShown && <div className={style.modal}>
                <div className={style.children}>{props.children}</div>
            </div>}
            {props.isShown && <div className={style.overlay} onClick={props.closeModalWindow}></div>}
        </div>
    );
}

export default Modal;
