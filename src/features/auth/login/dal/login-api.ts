import {instance} from "../../../../main/dal/instance";

type LoginType = {
    _id: string
    email: string
    rememberMe: boolean,
    isAdmin: boolean,
    name: string
    verified: boolean,
    publicCardPacksCount: number
    created: string
    updated: string
    __v: number
    token: string
    tokenDeathTime: number
    avatar: string
    error?: string
}
export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        const promise = instance.post<LoginType>(`auth/login`, {email, password, rememberMe})
        return promise
    },
    logout() {
        return instance.delete('auth/me')
    },
    authMe() {
        return instance.post('auth/me', {})
            .then(response => response.data)
    },
}
