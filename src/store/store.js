import { configureStore } from '@reduxjs/toolkit'
import { customerSlice } from './customer/calendarSlice'

export const store = configureStore({
    reducer: {
        customer: customerSlice.reducer,
    }
})