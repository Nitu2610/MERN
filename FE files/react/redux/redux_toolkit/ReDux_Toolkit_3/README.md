# 🧠 REDUX MASTER NOTES (REVISION)
## 🏗️ Core Redux

- Store holds one global state object
- UI cannot modify state directly
- UI must use dispatch(action)
- Reducer:
    - Pure
    - Sync only
    - Returns new state

- State flow:

        UI → dispatch → reducer → store → UI
---
### 📦 Store
        store.getState()

- Store internally holds currentState
- Reducer receives it as state
- initialState used only once
---
### 🧩 combineReducers / RTK Store
        configureStore({
        reducer: {
            counter: counterReducer,
            auth: authReducer
        }
        })

State shape:

    {
    counter: {...},
    auth: {...}
    }

- Key name decides selector path
---
### 🧱 Slice (RTK)

- Slice only knows its own state
- Store decides where it lives
- Inside slice reducer:
            
        state === sliceState
- RTK uses Immer
- You can:
    - ✅ Mutate state
    - ✅ Or return new state
    - ❌ Not both
---
### 🛑 Immer Rule

✅ Do:
            
            state.value += 1
or

    return { value: state.value + 1 }


❌ Never:

    state.value += 1 // and also return something
---
### 🧠 Actions

- Normal Redux:
        
        { type: "INC", payload: 1 }

- RTK:

         increment() // returns action object

- Must call action creators:

        dispatch(increment())
---
### ⚡ Thunk

- Thunk is middleware
- Allows dispatching functions
- If action is:
    - Object → goes to reducer
    - Function → thunk runs it
---
### 🔁 Thunk Flow
    Component(useEffect)

    ↓ dispatch(thunk)

    Thunk runs async

    ↓ dispatch({type})

    Reducer updates store
    ↓
    UI re-renders
---
### 🧩 Thunk Shape
    const fetchData = () => async (dispatch, getState) => {
    dispatch({ type: "LOADING" })
    const data = await api()
    dispatch({ type: "SUCCESS", payload: data })
    }
---
### ⚙️ createAsyncThunk (RTK)

- Automatically creates:
    - pending
    - fulfilled
    - rejected
- Handled in extraReducers
---
### 🧱 extraReducers
    extraReducers: builder => {
    builder
        .addCase(fetchUser.pending, ...)
        .addCase(fetchUser.fulfilled, ...)
        .addCase(fetchUser.rejected, ...)
    }
---
### 📦 Multiple Thunks

- Each thunk = 3 actions
- 2 thunks = 6 actions
---
### 🧠 Context vs Redux

- Context: all consumers re-render
- Redux: only selector-changed components re-render
---
### 🏁 Golden Rules
- Reducer:
    - ❌ No async
    - ❌ No side effects

- ✅ Only state calculation 
    - Async always in:
---

#### 🧠 One-line Mental Models

- Reducer = calculator 🧮
- Thunk = async worker 🌐
- Dispatch = gate 🚪
- Store = memory 🧠
- Slice = state manager 📦