import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "./redux/counterSlice";

export const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Counter : {count}</h2>
      <br />
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};
