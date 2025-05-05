import { createSlice } from "@reduxjs/toolkit";
const slice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addCart: (state, action) => {
            state.push(action.payload)

        },
        remove: (state, action) => {
            return state.filter((_, i) => i !== action.payload)

        }


    }
})

export default slice.reducer
export const { addCart,remove } = slice.actions