import { createSlice } from '@reduxjs/toolkit';

export const customerSlice = createSlice({
    name: 'calendar',
    initialState: {
        records: [],
        showModal: false,
        activeRecord: {}
    },
    reducers: {
        onLoadData: ( state, { payload }) => {
            state.records = payload;
        },
        onSetActiveRecord: ( state, { payload }) => {
            state.activeRecord = payload;
            state.showModal = true
        },
        onNewRecord: (state, action) => {
            state.activeRecord = {
                first_name: "",
                last_name: "",
                birth_date: new Date().getTime(),
            }

            state.showModal = true
        },
        onFinishSave: (state, action) => {
            state.showModal = false
            state.activeRecord = {}
        },
        onCloseForm: (state, action) => {
            state.showModal = false
        }
    }
});

// Action creators are generated for each case reducer function
export const { onLoadData, onSetActiveRecord, onNewRecord, onFinishSave, onCloseForm } = customerSlice.actions;