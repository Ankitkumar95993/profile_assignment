
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface  IProduct {
    id:string;
    title:string;
    img: string; 
    price: number;
    quantity: number;
}

const initialState : Array<IProduct> = [];

export const CartSlice = createSlice({
     name:"cart",
     initialState,
     reducers:{
        add:(state,action:PayloadAction<IProduct>)=>{
            state.push(action.payload);
        },
        remove:(state,action)=>{
           return state.filter((item)=>item.id !== action.payload)
        },
     }
});

export const{add,remove} = CartSlice.actions;
export default CartSlice.reducer;