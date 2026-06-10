import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import './App.css'
import { configureStore, createSlice } from "@reduxjs/toolkit";


/** Traditionally method- vanilla RDux
 // a. Action Types 
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

// b. Action Creators 
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });

// c. Reducer 
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
 */
/** ReDux Approach to simplify the step a, b and c.  using createSlicer.
 * a and b are created by createSlicer internally, also a object - action is created inside which the step 'b' is created.
 * counterSlice.reducer will have the access to all the reducer inthe createSlice.
*/

const counterSlice=createSlice({
  name:'counter',
  initialState:0,
  reducers:{
    increment: (state)=> state+1,
    decrement:(state)=> state-1,
  }
});

const {increment, decrement}= counterSlice.actions;
const counterReducer=counterSlice.reducer;


{/** d. Create Store
const store = createStore(counterReducer) 
it will be replaced by storeConfigure*/};

const store=configureStore({
  reducer:counterReducer,
})


// e. React Component
const Counter = () => {
  // Get state from store
  const count = useSelector((state) => state);
  // Get dispatch function
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Counter</h1>
      <div className="count">Count: {count}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment (+)</button>
        <button onClick={() => dispatch(decrement())}>Decrement (-)</button>
      </div>
    </div>
  );
};

// f. App Component with Provider
const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
