import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {PackType} from "../bll/packs-reducer";
import Search from "../../../main/ui/common/c5-Search/Search";

const Packs = () => {
    const packs = useSelector<AppRootStateType, Array<PackType> >((state) => state.packs.packsList)
    const searchTerm = useSelector<AppRootStateType, string>((state) => state.packs.searchTerm)
    const filteredPacks = packs.filter((p) => {
            if (p.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                return p
            }
    })
    console.log(filteredPacks)
    return (
        <div>
                <Search />
                <ul>
                    {filteredPacks.map((p) => {
                        return <li key={p.id}>{p.name}</li>
                    })}
                </ul>
        </div>
    );
}

export default Packs;
