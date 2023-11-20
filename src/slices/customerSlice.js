import { createSlice } from "@reduxjs/toolkit";

const initialState  = [];

const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer(state, action) {
            state.push(action.payload)
        },
        deleteCustomer(state, action) {
            const deleteIndex = action.payload;
            return state.filter((val, index) => index !== deleteIndex )
        }
    }

})

export const { addCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer




