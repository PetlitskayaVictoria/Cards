import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:7542/2.0/'
})

export const registrationAPI = {
    registerUser(email: string, password: string) {
        const promise = instance.post('auth/register', {email, password});
        return promise;
    }
}
