import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './CartSlice';
import buttonStateSlice from "./ButtonStateSlice";
import buttonIncrementSlice from "./ButtonIncrementSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
        // buttonState: buttonStateSlice,
        buttonIncrement: buttonIncrementSlice
    }
})

export default store;