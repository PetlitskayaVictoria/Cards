import React from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/Routes";
import style from "./Pack.module.css"
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";
import {PackType} from "../dal/packs-api";

type PackPropsType = {
    pack: PackType
    updatePack: (id: string) => void
    deletePack: (id: string) => void
}

const Pack: React.FC<PackPropsType> = (props) => {
    const onUpdateClick = () => {
        props.updatePack(props.pack._id)
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
                <SuperButton onClick={onUpdateClick}>update</SuperButton>
                <SuperButton onClick={onDeleteClick}>delete</SuperButton>
                <NavLink
                         to={`${PATH.CARDS}/${id}`}
                         >cards</NavLink>
            </tr>

        </>
    );
}

export default Pack;
