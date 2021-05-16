import React from "react";
import {PackType} from "../bll/packs-reducer";
import {NavLink} from "react-router-dom";
import {PATH} from "../../../main/ui/Routes";

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
            <tr>
                <td>{props.pack.name}</td>
                <td>{props.pack.cardsCount}</td>
                <td>{props.pack.updated}</td>
                <button onClick={onUpdateClick}>update</button>
                <button onClick={onDeleteClick}>delete</button>
                <NavLink
                         to={`${PATH.CARDS}/${id}`}
                         >cards</NavLink>
            </tr>

        </>
    );
}

export default Pack;
