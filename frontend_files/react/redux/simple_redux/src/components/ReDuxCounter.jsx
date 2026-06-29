import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { countReducer } from "../countReducer";
import { store } from "../store";
import { decrement, increment, reset } from "../actions";

export const ReDuxCounter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state) => state);
  return (
    <>
      <div>ReDux Counter</div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
};
