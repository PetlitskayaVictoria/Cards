import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/Routes";
import style from "./Pack.module.css"
import {PackType} from "../dal/packs-api";
import ModalWithInput from "../../../main/ui/common/c6-Modal/ModalWithInput";
import ModalConfirmationDialog from "../../../main/ui/common/c6-Modal/ModalConfirmationDialog";

type PackPropsType = {
    pack: PackType
    updatePack: (id: string, name: string) => void
    deletePack: (id: string) => void
}

const Pack: React.FC<PackPropsType> = (props) => {
    const onUpdateClick = (packName: string) => {
        props.updatePack(props.pack._id, packName)
    }
    const onDeleteClick = () => {
        props.deletePack(props.pack._id)
    }
    const id = props.pack._id
    return (
        <>
            <tr className={style.packItem}>
                <td>{props.pack.name}</td>
                <td>{props.pack.cardsCount}</td>
                <td>{props.pack.updated}</td>
                <ModalWithInput onSave={onUpdateClick}
                                buttonName={"update"}
                                packName={props.pack.name}
                                modalTitle={"Edit a pack"} />
                <ModalConfirmationDialog modalTitle={`Are you sure you want to delete the pack "${props.pack.name}"?`}
                                         onConfirm={onDeleteClick} buttonName={"delete"} />
                <NavLink
                         to={`${PATH.CARDS}/${id}`}
                         >cards</NavLink>
            </tr>

        </>
    );
}

export default Pack;
