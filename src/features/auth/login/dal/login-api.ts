import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})
export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        const promise= instance.post(`auth/login`, {email, password, rememberMe})
        return promise
    },
    logout() {
        return instance.delete('auth/me')
    }
}