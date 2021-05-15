import React from "react";
import {PackType} from "../bll/packs-reducer";

type PackPropsType = {
    pack: PackType
}

const Pack: React.FC<PackPropsType> = (props) => {


    return (
        <>
            <tr>
                <td>{props.pack.name}</td>
                <td>{props.pack.cardsCount}</td>
                <td>{props.pack.updated}</td>
                <button>update</button>
                <button>delete</button>
            </tr>

        </>
    );
}

export default Pack;
