import { defineStore } from 'pinia'

interface UserState {
    isLoggedIn: boolean;
    user: { username: string } | null;
}

export const useUserStore = defineStore('user', {
    state: (): UserState => ({
        isLoggedIn: false,
        user: null,
    }),
    actions: {
        login(userData: { username: string }) {
            this.isLoggedIn = true
            this.user = userData
            localStorage.setItem('isLoggedIn', 'true')
        },
        logout() {
            this.isLoggedIn = false
            this.user = null
            localStorage.removeItem('isLoggedIn')
        },
        checkLogin() {
            this.isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
        }
    }
})
