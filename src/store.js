import { configureStore } from "@reduxjs/toolkit";
import customerReducer  from './slices/customerSlice';

export const store = configureStore({
    devTools:false,
    reducer: {
        customers: customerReducer
    }
})