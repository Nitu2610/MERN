import "./App.css";
import { createStore } from "redux";
import { Counter } from "./Counter";

/** 1.Step create the reducer with initial state value */
const counterReDuxReducer = (currentState = 0, action) => {
  {
    /** 
  1st Approach 

    if (action.type == "INCREMENT") {
    return currentState + 1;
  } else if (action.type == "DECREMENT") {
    return currentState - 1;
  } else {
    return currentState;
  }
  */
  }
  {
    /** 2nd Approach */
    /**here the increment and decrement const are manually written because is already availiable in the Counter component. */
  }

  /**
 const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

  switch (action.type) {
    case INCREMENT:
      return currentState + 1;
    case DECREMENT:
      return currentState - 1;
    default:
      return currentState;
  }
};
 */

  {
    /** 3rd Approach- object variable */
  }

  const counterActionTypes = {
    INCREMENT: "INCREMENT",
    DECREMENT: "DECREMENT",
  };

 
  switch (action.type) {
    case counterActionTypes.INCREMENT:
      return currentState + 1;
    case counterActionTypes.DECREMENT:
      return currentState - 1;
    case  "INCREMENT_BY_3":
      return currentState + action.payload;
    default:
      return currentState;
  }
};

/** 2.Step create the store and pass the reducer fn. next step is wrap the <App/> with redux provider. */
export const reduxStore = createStore(counterReDuxReducer);

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
