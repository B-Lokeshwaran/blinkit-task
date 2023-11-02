import {
  setDecrement,
  setIncrement,
} from "../../../store/ButtonIncrementSlice";
import { setFalse } from "../../../store/ButtonStateSlice";
import { add, remove } from "../../../store/CartSlice";

export const handleIncrement = (dispatch, ele, buttonvalue) => {
  console.log({ hi: ele });
  dispatch(setIncrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] + 1 }));
  addtoCart(dispatch, ele, {
    ...buttonvalue,
    [ele.id]: buttonvalue[ele.id] + 1,
  });
};

export const handleDecrement = (dispatch, ele, buttonvalue, statevalue) => {
  dispatch(setDecrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] - 1 }));

  if (buttonvalue[ele.id] === 1) {
    dispatch(setFalse({ ...statevalue, [ele.id]: false }));
  }

  removetoCart(dispatch, ele, {
    ...buttonvalue,
    [ele.id]: buttonvalue[ele.id] - 1,
  });
};

export const addtoCart = (dispatch, ele, quantity) => {
  dispatch(add({ ...ele, quantity: quantity }));
};

export const removetoCart = (dispatch, ele, quantity) => {
  dispatch(remove({ ...ele, quantity: quantity }));
};
