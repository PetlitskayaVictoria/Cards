import axios from "axios";
import {PackType} from "../bll/packs-reducer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})

export const packsAPI = {
    fetchPacks(packName?: string, min?: number, max?: number, sortPacks?: number, page?: number, pageCount?: number) {
        return instance.get<ResponseType>('cards/pack', {params: {packName, min, max, sortPacks, page, pageCount}});
    },
    addPack() {
        return instance.post('cards/pack', {cardsPack: {name: "Testik 2", type: "pack"}})
    },
    updatePack(_id: string) {
        return instance.put('cards/pack', {cardsPack: {_id, name: "Testik 2 changed"}})
    },
    deletePack(id: string) {
        return instance.delete('cards/pack', {params: {id}})
    }
}

type ResponseType = {
    cardPacks: Array<PackType>
    cardPacksTotalCount: number
    maxCardsCount: number
    minCardsCount: number
    page: number
    pageCount: number
    token: string
    tokenDeathTime: number
}
