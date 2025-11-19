📘 How Redux Toolkit Works Under the Hood (createSlice + wiring)

    Redux Toolkit (RTK) removes the boilerplate of traditional Redux.
    The magic comes from createSlice(), which automatically wires together:
        Action types
        Action creators
        Reducers
        This section explains how it works internally.

    🔥 1. createSlice() Input
        You provide:
            const counterSlice = createSlice({
            name: "counter",
            initialState: 0,
            reducers: {
                increment: (state) => state + 1,
                decrement: (state) => state - 1
            }
            });

    🔧 2. What RTK Generates Automatically
            A. Action Types
                RTK creates unique action types for each reducer key:
                    counter/increment
                    counter/decrement

            B. Action Creators
                RTK generates functions that return action objects:
                    counterSlice.actions.increment()
                    // => { type: "counter/increment" }

                    counterSlice.actions.decrement()
                    // => { type: "counter/decrement" }

                    Equivalent to you manually writing:
                        const increment = () => ({ type: "counter/increment" });
                        const decrement = () => ({ type: "counter/decrement" });

            C. The Reducer Function
                RTK builds a reducer that works like a normal Redux reducer:
                    function generatedReducer(state = 0, action) {
                    switch (action.type) {
                        case "counter/increment":
                        return state + 1;

                        case "counter/decrement":
                        return state - 1;

                        default:
                        return state;
                    }}

            This reducer is available as=>  const counterReducer = counterSlice.reducer;

    🧠 3. How the Store Wires Everything Together
            You pass the auto-generated reducer to the store:
                const store = configureStore({
                reducer: counterReducer
                });

            Now Redux knows:
                which reducer handles which action type
                how state should update

    🔄 4. Dispatch Flow (How the pieces connect)
            When you dispatch:
                dispatch(increment());
            Redux receives:
                { type: "counter/increment" }

            The store runs your reducer:
            switch (action.type) {
            case "counter/increment":
                return state + 1;
            }

Final code:

// 1. Create slice (RTK auto-generates types, actions, reducer)
const counterSlice = createSlice({
name: "counter",
initialState: 0,
reducers: {
increment: (state) => state + 1,
decrement: (state) => state - 1
}
});

// 2. Extract auto-generated action creators
export const { increment, decrement } = counterSlice.actions;

// 3. Extract auto-generated reducer
export const counterReducer = counterSlice.reducer;

// 4. Store uses the generated reducer
const store = configureStore({
reducer: counterReducer
});

// 5. Dispatch auto-generated actions
dispatch(increment());


In createSlice, each key under reducers becomes an action type, and its function becomes the reducer logic that updates the state for that action.

