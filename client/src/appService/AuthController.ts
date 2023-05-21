// import AuthService from "./AuthService";

export default class AuthControllerOld {

    static setTokenToLocStor(accessToken: string) {
        localStorage.setItem('token', accessToken)
    }

    // static async registration(name: string, email: string, password: string): Promise<Boolean> {
    //     try {
    //         const respons = await AuthService.registration(name, email, password);
    //         console.log(respons)
    //         this.setTokenToLocStor(respons.data.accessToken)
            
    //         return true
    //     } catch (e: any) {
    //         console.error('registration ', e.response?.data?.message);
    //         return false
    //     }
    // }

    // static async login(email: string, password: string): Promise<Boolean | string> {
    //     try {
    //         console.log('start login')
    //         const respons = await AuthService.login(email, password);
    //         console.dir(respons)
    //         this.setTokenToLocStor(respons.data.tokens.accessToken)
    //         console.log('setToken')
    //         const username = respons.data.name
    //         console.log('save username')
    //         return username 
    //     } catch (e: any) {
    //         console.error('login ', e.response?.data?.message);
    //         return false
    //     }
    // }

    // static async logout() {
    //     try {
    //         const respons = await AuthService.logout();
    //         localStorage.removeItem('token')
    //     } catch (e: any) {
    //         console.error('logout ', e.response?.data?.message);
    //     }
    // }

    // static async changeName(newName: string): Promise<Boolean> {
    //     try {
    //         const respons = await AuthService.changeName(newName)
    //         this.setTokenToLocStor(respons.data.accessToken)
    //         return true
    //     } catch (e: any) {
    //         console.error('changeName ', e.response?.data?.message);
    //         return false
    //     }
    // }
}