import { add, remove ,setIncrement,setDecrement } from "../../store/cartSlice";

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
  buttonIncrement
) => {
  setCount((prev) => ({
    ...prev,
    [ele.id]: (parseInt(prev[ele.id]) || 0) + 1,
  }));

  dispatch(setIncrement({ ...buttonIncrement, [ele.id]: buttonIncrement[ele.id] + 1 }));
  addtoCart(ele, dispatch, { ...buttonIncrement, [ele.id]: buttonIncrement[ele.id] + 1 });
};

export const handleDecrement = (
  ele,
  setCount,
  buttonIncrement,
  dispatch,
  count
) => {
  setCount((prev) => ({
    ...prev,
    [ele.id]: prev[ele.id] - 1,
  }));

  dispatch(setDecrement({ ...buttonIncrement, [ele.id]: buttonIncrement[ele.id] - 1 }));
  removetocart(ele, dispatch, { ...buttonIncrement, [ele.id]: buttonIncrement[ele.id] - 1 });
};

export const addtoCart = (ele, dispatch, quantity, ) => {
  dispatch(add({ ...ele, quantity:quantity  }));
 
};

export const removetocart = (ele, dispatch, quantity) => {
  dispatch(remove({ ...ele, quantity:quantity }));
};
