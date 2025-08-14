import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer'


const storess = configureStore({
    reducer: {
        cart: cartReducer,
        

    }
})

export default storess