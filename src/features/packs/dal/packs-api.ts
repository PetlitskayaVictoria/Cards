import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})

export const packsAPI = {
    fetchPacks() {
        const promise = instance.get('cards/pack');
        return promise;
    }
}
