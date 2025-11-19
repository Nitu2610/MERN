import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore, createAsyncThunk } from "@reduxjs/toolkit";
import './App.css';


// createAsyncThunk: A function that accepts a Redux action type string and a callback function that should return a "promise". It generates promise lifecycle action types based on the action type prefix that you pass in, and returns a thunk action creator that will run the promise callback and dispatch the lifecycle actions based on the returned promise.
// Create async thunk for increment
// The return value true value isn't being used anywhere in the reducers or the component; we may not return it;
// The actual increment logic happens in the reducer (extraReducers), not based on the returned value
// It's a Redux Toolkit convention to return something from async thunks, even if the value isn't used. Some TypeScript setups might complain about not returning a value



// Async Thunks
const incrementAsync = createAsyncThunk("counter/incrementAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return true;
});

const decrementAsync = createAsyncThunk("counter/decrementAsync", async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return true;
});

// Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // INCREMENT
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(incrementAsync.fulfilled, (state) => {
        state.loading = false;
        state.count += 1;
      })
      .addCase(incrementAsync.rejected, (state) => {
        state.loading = false;
      })

      // DECREMENT
      .addCase(decrementAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(decrementAsync.fulfilled, (state) => {
        state.loading = false;
        state.count -= 1;
      })
      .addCase(decrementAsync.rejected, (state) => {
        state.loading = false;
      });
  },
});

// Store
const store = configureStore({
  reducer: counterSlice.reducer,
});

// Component
const Counter = () => {
  const count = useSelector((state) => state.count);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h1>Redux Toolkit Async Counter</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(decrementAsync())} disabled={loading}>
        -
      </button>

      <button onClick={() => dispatch(incrementAsync())} disabled={loading}>
        {loading ? "Loading..." : "+"}
      </button>
    </div>
  );
};

// App
const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);

export default App;
