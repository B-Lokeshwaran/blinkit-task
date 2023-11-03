import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], count: 0, price: 0, oldPrice: 0 };
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      const {  quantity,newPrice, oldPrice } = action.payload;

      const tempItem = [...state?.items, action.payload];
      return {
        items: Array.from(new Set(tempItem.map((a) => a.id))).map((id) => {
          return tempItem.find((a) => a.id === id);
        }),
        quantity: quantity,
        count: state.count + 1,
        price: state.price + parseInt(newPrice.split("$")[1]),
        oldPrice: state.oldPrice + parseInt(oldPrice.split("$")[1]),
      };
    },
    remove(state, action) {
      const { quantity, id, newPrice, oldPrice } = action.payload;
      if (quantity[id] === 0) {
        const tempItem = state.items.filter((item) => item.id !== id);
        return {
         
          items: tempItem,
          quantity: quantity,
          count: state.count - 1,
          price: state.price - parseFloat(newPrice.split("$")[1]),
          oldPrice: state.price - parseInt(oldPrice.split("$")[1]),
        };
      }
      return {
        quantity: quantity,
        items: state.items,
        count: state.count - 1,
        price: state.price - parseFloat(newPrice.split("$")[1]),
        oldPrice: state.price - parseInt(oldPrice.split("$")[1]),
      };
    },

    //    setIncrement(state,action){
    //     return {...state.productbuttonIncrement , ...action.payload}
    //    },
    //    setDecrement(state, action){
    //      return {...state.productbuttonIncrement , ...action.payload}
    //    }
  },
});

export const { add, remove, setTrue } = cartSlice.actions;
export default cartSlice.reducer;
