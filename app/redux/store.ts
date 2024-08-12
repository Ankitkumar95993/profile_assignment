import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Slices/CartSlice";
import LoadingSlice from "./Slices/LoadingSlice";

export const store = configureStore({
    reducer:{
        cart:CartSlice,
        loading:LoadingSlice
    },
});