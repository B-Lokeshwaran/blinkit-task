import {configureStore} from "@reduxjs/toolkit";
import cartSlice from './CartSlice';

import buttonIncrementSlice from "./ButtonIncrementSlice";

const store = configureStore({
    reducer:{
        cart: cartSlice,
       
        buttonIncrement: buttonIncrementSlice
    }
})

export default store;