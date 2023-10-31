import { setDecrement, setIncrement } from "../../Store/buttonIncrementSlice";
import { setTrue, setFalse } from "../../Store/buttonStateSlice";
import { add, remove } from "../../Store/cartSlice";

export const handleToggle = (ele, isAdding, setIsAdding, setCount, count, dispatch) =>{
    console.log("hello", { ...isAdding, [ele.id]: true })
    // console.log("hello", ...isAdding)
    setIsAdding({ ...isAdding, [ele.id]: true });
    setCount({ ...count, [ele.id]: 1 });
    dispatch(setTrue({ ...isAdding, [ele.id]: true }));
    dispatch(setIncrement({ ...count, [ele.id]: 1 }));
    addtoCart(ele, dispatch,{ ...count, [ele.id]: 1 });
  }

export const handleIncrement = (ele, count, setCount, dispatch, buttonvalue) =>{
    setCount((prev) => ({
        ...prev,
        [ele.id]: (parseInt(prev[ele.id]) || 0) + 1,
      }));
  
      dispatch(setIncrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] + 1 }))
      addtoCart(ele,dispatch, { ...count, [ele.id]: count[ele.id] + 1 });
}

export const handleDecrement = (ele, setCount,buttonvalue, dispatch, setIsAdding, statevalue, count) => {
    setCount((prev) => ({
      ...prev,
      [ele.id]: prev[ele.id] - 1,
    }));

    dispatch(setDecrement({ ...buttonvalue, [ele.id]: buttonvalue[ele.id] - 1 }));
    if (buttonvalue[ele.id] === 1) {
      setIsAdding({ ...buttonvalue, [ele.id]: false });
      dispatch(setFalse({ ...statevalue, [ele.id]: false }));
    }

    removetocart(ele,dispatch, { ...count, [ele.id]: count[ele.id] - 1 });
  };

  export const addtoCart = (ele, dispatch, quantity) => {
    dispatch(add({ ...ele, quantity: quantity }));
  };

 export const removetocart = (ele,dispatch,quantity) => {
    dispatch(remove({ ...ele, quantity: quantity }));
  };


