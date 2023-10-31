import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './cartSlice';
import buttonStateSlice from "./buttonStateSlice";
import buttonIncrementSlice from "./buttonIncrementSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        buttonState: buttonStateSlice,
        buttonIncrement: buttonIncrementSlice
    }
})

export default store;