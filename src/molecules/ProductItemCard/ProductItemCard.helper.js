import { setDecrement, setIncrement } from "../../store/ButtonIncrementSlice";
import { add, remove } from "../../store/CartSlice";

export const handleToggle = (ele, setCount, count, dispatch) => {
  setCount({ ...count, [ele.id]: 1 });
  dispatch(setIncrement({ ...count, [ele.id]: 1 }));
  addtoCart(ele, dispatch, { ...count, [ele.id]: 1 });
};

export const handleIncrement = (
  ele,
  count,
  setCount,
  dispatch,
  buttonvalue
) => {
  setCount((prev) => ({
    ...prev,
    [ele.id]: (parseInt(prev[ele.id]) || 0) + 1,
  }));

  dispatch(setIncrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] + 1 }));
  addtoCart(ele, dispatch, { ...count, [ele.id]: count[ele.id] + 1 });
};

export const handleDecrement = (
  ele,
  setCount,
  buttonvalue,
  dispatch,
  count
) => {
  setCount((prev) => ({
    ...prev,
    [ele.id]: prev[ele.id] - 1,
  }));

  dispatch(setDecrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] - 1 }));
  removetocart(ele, dispatch, { ...count, [ele.id]: count[ele.id] - 1 });
};

export const addtoCart = (ele, dispatch, quantity) => {
  dispatch(add({ ...ele, quantity: quantity }));
};

export const removetocart = (ele, dispatch, quantity) => {
  dispatch(remove({ ...ele, quantity: quantity }));
};
