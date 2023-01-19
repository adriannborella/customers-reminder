import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './app/appSlice'
import { customerSlice } from './customer/customerSlice'

export const store = configureStore({
    reducer: {
        customer: customerSlice.reducer,
        app: appSlice.reducer
    }
})