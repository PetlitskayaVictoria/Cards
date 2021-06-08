import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {
    addPackTC,
    deletePackTC,
    fetchPacksTC,
    PacksParamsType,
    SetPacksSearchTermAC,
    setPageAC,
    updatePackTC
} from "../bll/packs-reducer";
import {PackType} from "../dal/packs-api";
import style from "./Packs.module.css";
import Search from "../../../main/ui/common/c5-Search/Search";
import Paginator from "../../../main/ui/common/c4-Paginator/Paginator";
import Pack from "../pack/Pack";
import ModalWithInput from "../../../main/ui/common/c6-Modal/ModalWithInput";

const Packs = () => {
    const dispatch = useDispatch()
    const packsParams = useSelector<AppRootStateType, PacksParamsType>((state) => state.packs.packsParams)
    const packs = useSelector<AppRootStateType, Array<PackType>>((state) => state.packs.packsList)

    useEffect(() => {
        dispatch(fetchPacksTC(packsParams))
    }, [packsParams.packName, packsParams.page])

    const setFilteredResults = (packName: string) => {
        dispatch(SetPacksSearchTermAC(packName))
    }
    const setPage = (page: number) => {
        dispatch(setPageAC(page))
    }

    const addPack = (name: string) => {
        dispatch(addPackTC(packsParams, name))
    }
    const updatePack = (id: string, name: string) => {
        dispatch(updatePackTC(id, name, packsParams))
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id, packsParams))
    }

    return (
        <div className={style.packsContainer}>
            <h2>Packs</h2>
            <div className={style.filtersContainer}>
                <Search setFilteredResults={setFilteredResults}/>
                <Paginator totalItemsCount={packsParams.cardPacksTotalCount}
                           pageSize={packsParams.pageCount}
                           currentPage={packsParams.page}
                           onPageChanged={setPage}
                           portionSize={10}
                />
            </div>
            <table className={style.tableContainer}>
                <tr className={style.tableHeaders}>
                    <td>Name</td>
                    <td>Cards Count</td>
                    <td>Updated</td>
                    <ModalWithInput onSave={addPack}
                                    buttonName={"ADD"}
                                    modalTitle={"Create a pack"}/>
                </tr>
                {packs.map((p) => {
                    return <Pack key={p._id}
                                 pack={p}
                                 updatePack={updatePack}
                                 deletePack={deletePack}
                    />
                })}
            </table>
        </div>
    );
}

export default Packs;
