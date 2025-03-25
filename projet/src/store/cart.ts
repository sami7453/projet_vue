import { defineStore } from 'pinia'

export interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

export type ProductInput = Omit<Product, 'quantity'>

interface CartState {
    products: Product[];
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        products: []
    }),
    getters: {
        totalAmount: (state): number => {
            return state.products.reduce((total, product) => total + product.price * product.quantity, 0)
        }
    },
    actions: {
        addProduct(product: ProductInput) {
            const exist = this.products.find(p => p.id === product.id)
            if (exist) {
                exist.quantity++
            } else {
                this.products.push({ ...product, quantity: 1 })
            }
        },
        removeProduct(productId: number) {
            this.products = this.products.filter(p => p.id !== productId)
        },
        updateQuantity(productId: number, quantity: number) {
            const product = this.products.find(p => p.id === productId)
            if (product) {
                product.quantity = quantity
            }
        }
    }
})
