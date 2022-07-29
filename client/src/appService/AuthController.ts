import AuthService from "./AuthService";

export default class AuthController {

    setTokenToLocStor(accessToken: string) {
        localStorage.setItem('token', accessToken)
    }

    async registration(name: string, email: string, password: string): Promise<Boolean> {
        try {
            const respons = await AuthService.registration(name, email, password);
            console.log(respons)
            this.setTokenToLocStor(respons.data.accessToken)
            return true
        } catch (e: any) {
            console.error('registration ', e.response?.data?.message);
            return false
        }
    }

    async login(email: string, password: string): Promise<Boolean> {
        try {
            const respons = await AuthService.login(email, password);
            this.setTokenToLocStor(respons.data.accessToken)
            return true
        } catch (e: any) {
            console.error('login ', e.response?.data?.message);
            return false
        }
    }

    async logout() {
        try {
            const respons = await AuthService.logout();
            localStorage.removeItem('token')
        } catch (e: any) {
            console.error('logout ', e.response?.data?.message);
        }
    }

    async changeName(newName: string): Promise<Boolean> {
        try {
            const respons = await AuthService.changeName(newName)
            this.setTokenToLocStor(respons.data.accessToken)
            return true
        } catch (e: any) {
            console.error('changeName ', e.response?.data?.message);
            return false
        }
    }
}