
import { configureStore } from '@reduxjs/toolkit'
import slice from './Slice'


const store = configureStore({

    reducer: {
        Cart: slice
    }
})

export default store