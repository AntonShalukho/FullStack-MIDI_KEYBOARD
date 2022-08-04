import { AxiosResponse } from "axios";
import api from "../API";
import { AuthResponse, AuthResponsLogin } from "../models/response/AuthResponse";

export default class AuthService {
    static async registration(name: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return api.post<AuthResponse>('/registration', {name, email, password})
    }

    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponsLogin>> {
        return api.post<AuthResponsLogin>('/login', {email, password})
    }

    static async logout(): Promise<void> {
        return api.post('/logout')
    }

    static async changeName(newName: string): Promise<AxiosResponse<AuthResponse>> {
        return api.put('/changename',{newName})
    }
}