import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        loading: false
    },
    reducers: {
        setLoading: ( state, { payload }) => {
            state.loading = payload;
        },
    }
});

// Action creators are generated for each case reducer function
export const { setLoading } = appSlice.actions;