import {instance} from "../../../../main/dal/instance";

export const loginAPI = {
    login(email: string, password: string, rememberMe: boolean) {
        const promise= instance.post(`auth/login`, {email, password, rememberMe})
        return promise
    },
    logout() {
        return instance.delete('auth/me')
    }
}
