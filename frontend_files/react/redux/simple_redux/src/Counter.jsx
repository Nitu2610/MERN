import React from "react";
import { useDispatch, useSelector } from "react-redux";

  {/** 2nd-a approach => */}

   const INCREMENT="INCREMENT";
   const DECREMENT="DECREMENT";
   

    {/** 3rd-a approach => */}
  const increment=()=>({type:INCREMENT});
  const decrement=()=>({type:DECREMENT});

export const Counter = () => {
  /** 4.Step create the variable to use the state via useSelector */
  const count = useSelector((state) => state);
  /** 5.Step Create a dispatch variable via useDispatch and add to the button to pass the action */
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>


  {/** 6.Step the dispatch must always contain the object with key name "type" */}

     {/** 1st approach => */}
        {/** 
         <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
        <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button> 
        */}

    {/** 2nd-b approach => */}
        {/** 
            <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
            <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button> 
                */}

    {/** 3rd-b approach => */}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch({type:"INCREMENT_BY_3", payload:3})}>Increment BY 3</button>

    </div>
  );
};
