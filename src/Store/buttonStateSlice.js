import { createSlice } from "@reduxjs/toolkit";

const initialState ={}

const buttonStateSlice = createSlice({
  name: "buttonState",
  initialState,
  reducers: {
    setTrue: (state, action) => {
     return {...state,...action.payload}
    },
    setFalse: (state, action) => {
     return {...state, ...action.payload}
    },
  },
});

export const {setTrue , setFalse} = buttonStateSlice.actions;
export default buttonStateSlice.reducer;
