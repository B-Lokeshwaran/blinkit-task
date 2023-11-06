import { add, remove, setIncrement,setDecrement } from "../../../store/cartSlice";

export const handleIncrement = (dispatch, ele, cartdata) => {
  dispatch(setIncrement({ ...cartdata, [ele.id]: cartdata[ele.id] + 1 }));
  addtoCart(dispatch, ele, {
    ...cartdata,
    [ele.id]: cartdata[ele.id] + 1,
  });
};

export const handleDecrement = (dispatch, ele, cartdata) => {
  dispatch(setDecrement({ ...cartdata, [ele.id]: cartdata[ele.id] - 1 }));
  removetoCart(dispatch, ele, {
    ...cartdata,
    [ele.id]: cartdata[ele.id] - 1,
  });
};

export const addtoCart = (dispatch, ele, quantity) => {
  dispatch(add({ ...ele, quantity: quantity }));
};

export const removetoCart = (dispatch, ele, quantity) => {
  dispatch(remove({ ...ele, quantity: quantity }));
};
