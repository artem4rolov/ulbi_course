import { createSlice } from '@reduxjs/toolkit'
import { CounterSchema } from '../types/conter-slice.types'

// Define the initial state using that type
const initialState: CounterSchema = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('increment')
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
    },
})

export const { actions: counterActions } = counterSlice
export const { reducer: counterReducer } = counterSlice

// Other code such as selectors can use the imported `RootState` type
export default counterSlice.reducer