import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {PackType} from "../bll/packs-reducer";
import Search from "../../../main/ui/common/c5-Search/Search";
import Pack from "../pack/Pack";
import style from "./Packs.module.css"

const Packs = () => {
    const packs = useSelector<AppRootStateType, Array<PackType> >((state) => state.packs.packsList)
    const searchTerm = useSelector<AppRootStateType, string>((state) => state.packs.searchTerm)
    const filteredPacks = packs.filter((p) => {
            if (p.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return p
            }
    })

    return (
        <div>
                {/*<Search />*/}
                <table className={style.tableContainer}>
                    <tr>
                        <td>Name</td>
                        <td>Cards Count</td>
                        <td>Updated</td>
                    </tr>
                    {filteredPacks.map((p) => {
                        return <Pack pack={p}/>
                    })}
                </table>
        </div>
    );
}

export default Packs;
