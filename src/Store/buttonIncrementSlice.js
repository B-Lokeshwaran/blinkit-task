import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const buttonIncrementSlice = createSlice({
  name: "buttonIncrement",
  initialState,
  reducers: {
    setIncrement: (state, action) => {
       
      return { ...state, ...action.payload };
    },
    setDecrement: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { setIncrement, setDecrement } = buttonIncrementSlice.actions;
export default buttonIncrementSlice.reducer;
