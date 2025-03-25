import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Products from '../views/Products.vue'
import Cart from '../views/Cart.vue'
import Register from '../views/Register.vue'

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'Home', component: Home, meta: { requiresAuth: true } },
    { path: '/login', name: 'Login', component: Login },
    { path: '/register', name: 'Register', component: Register },
    { path: '/products', name: 'Products', component: Products, meta: { requiresAuth: true } },
    { path: '/cart', name: 'Cart', component: Cart, meta: { requiresAuth: true } }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

// redirige toujour vers la page de login
router.beforeEach((to, from, next) => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true'
    if (to.meta.requiresAuth && !isLoggedIn && to.name !== 'Login') {
        next({ name: 'Login' })
    } else {
        next()
    }
})

export default router
