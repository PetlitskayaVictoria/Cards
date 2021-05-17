import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../../main/bll/store";
import {
    addPackTC,
    deletePackTC,
    fetchPacksTC,
    PackType,
    SetPacksSearchTermAC,
    setPageAC,
    updatePackTC
} from "../bll/packs-reducer";
import Search from "../../../main/ui/common/c5-Search/Search";
import Pack from "../pack/Pack";
import style from "./Packs.module.css"
import Paginator from "../../../main/ui/common/c4-Paginator/Paginator";
import SuperButton from "../../../main/ui/common/c2-SuperButton/SuperButton";

const Packs = () => {
    const dispatch = useDispatch()
    const packs = useSelector<AppRootStateType, Array<PackType>>((state) => state.packs.packsList)
    const packName = useSelector<AppRootStateType, string>((state) => state.packs.packName)
    const page = useSelector<AppRootStateType, number>((state) => state.packs.page)
    const pageCount = useSelector<AppRootStateType, number>((state) => state.packs.pageCount)
    const min = useSelector<AppRootStateType, number>((state) => state.packs.min)
    const max = useSelector<AppRootStateType, number>((state) => state.packs.max)
    const sortPacks = useSelector<AppRootStateType, number>((state) => state.packs.sortPacks)
    const cardPacksTotalCount = useSelector<AppRootStateType, number>((state) => state.packs.cardPacksTotalCount)

    useEffect(() => {
        dispatch(fetchPacksTC(packName, min, max, sortPacks, page, pageCount))
    }, [])

    const setFilteredResults = (packName: string) => {
        dispatch(SetPacksSearchTermAC(packName))
        dispatch(fetchPacksTC(packName, min, max, sortPacks, page, pageCount))

    }
    const setPage = (page: number) => {
        dispatch(setPageAC(page))
        dispatch(fetchPacksTC(packName, min, max, sortPacks, page, pageCount))
    }

    const addPack = () => {
        dispatch(addPackTC(packName, min, max, sortPacks, page, pageCount))
    }
    const updatePack = (id: string) => {
        dispatch(updatePackTC(id, packName, min, max, sortPacks, page, pageCount))
    }
    const deletePack = (id: string) => {
        dispatch(deletePackTC(id, packName, min, max, sortPacks, page, pageCount))
    }

    return (
        <div>
            <h2>Packs</h2>
            <div className={style.filtersContainer}>
                <Search setFilteredResults={setFilteredResults}/>
                <Paginator totalItemsCount={cardPacksTotalCount}
                           pageSize={pageCount}
                           currentPage={page}
                           onPageChanged={setPage}
                           portionSize={10}
                />
            </div>
            <table className={style.tableContainer}>
                <tr className={style.tableHeaders}>
                    <td>Name</td>
                    <td>Cards Count</td>
                    <td>Updated</td>
                    <SuperButton onClick={addPack} className={style.addButton}>ADD</SuperButton>
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
