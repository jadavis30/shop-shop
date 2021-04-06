import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state) => {
            state.cart.push()
        },
        addMultipleToCart: (state) => {
           state.cart.push() 
        }
    }
})

export const { addToCart, addMultipleToCart } = cartSlice.actions

export default cartSlice.reducer 