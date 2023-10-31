import {
  setDecrement,
  setIncrement,
} from "../../../Store/buttonIncrementSlice";
import { setFalse } from "../../../Store/buttonStateSlice";
import { add, remove } from "../../../Store/cartSlice";

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
