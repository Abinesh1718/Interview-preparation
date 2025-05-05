import { configureStore } from '@reduxjs/toolkit'
import slice from './Slice'


const storess = configureStore({
    reducer: {
        cart: slice

    }
})

export default storess