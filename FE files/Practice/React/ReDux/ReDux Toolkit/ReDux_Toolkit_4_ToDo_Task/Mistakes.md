# 🧠 Redux Thunk Debugging — Mistake List

### ❌ 1. Forgot to await res.json()

- res.json() returns a Promise
- You were returning a Promise to Redux instead of real data
- ✅ Always write:
  const data = await res.json();

---

### ❌ 2. Wrong configureStore structure

- You wrote:

        configureStore({ todo: todoSlice })

- ✅ Correct format is:

        configureStore({
        reducer: {
            todo: todoSlice,
        },
        });

---

### ❌ 3. Used comma instead of semicolon in reducer

- This line:

        state.loading=false,
        state.error=...

- Only executes last expression
- ✅ Always use:

        state.loading = false;
        state.error = ...

❌ 4. Forgot to set loading = false on success

- Caused infinite loading state
- ✅ Always update loading in:

        pending → true
        fulfilled → false
        rejected → false

---

### ❌ 5. Didn’t read Redux state in component

- You dispatched but never used:

        useSelector()

- So you couldn’t see if fetch worked

---

### ❌ 6. Mutating Redux State

- 🚫 You did:==> data.push(newTask)
- ✅ Correct:==> [...data, newTask]
- Or inside slice:==> state.data.push(newTask) // Just share the data and inside the reducer perform the modification operation.

##### 🧠 Rule: Never mutate Redux or React state directly.

- 🧠 Lesson:==> Always copy → modify copy → replace state.

---

### ❌ 7. Typo bug

- 🚫: data.lenght ; ✅: data.length
- 🚫: statue vs status

- 🧠 Lesson: One letter difference = hours of debugging.

---

### 8. Form Errors

- ❌ onClick instead of onSubmit on form
  `🚫: <form onClick={handleSubmit}>`
  `✅: <form onSubmit={handleSubmit}>`

- ❌ onChange on `<option>` instead of `<select>`
  ` 🚫: <option onChange={...}>`
  ` ✅: <select onChange={...}>`

---

### ❌ 9. Overcomplicated Codes/logics

- Wrong boolean logic ()
  `🚫:status === "Completed" ? true : false`
  `✅:status === "Completed"`

---

### ❌ 10. Naming collision (BIG real-world bug)

- `🚫:let addTodoTask = { ... }  // overwrote function`
- 🧠 Lesson: Never name variables same as imported functions.

---

### 11. Incorrect thunk argument structure

- ❌ You wrote:
  `async (id, status, { rejectWithValue }) => { ... }`

- ✅ createAsyncThunk only accepts one payload argument, plus thunkAPI.
- Fix: wrap multiple values in an object:
  `async ({ id, status }, { rejectWithValue }) => { ... }`

---

### 12.Confusion about UI toggle

- ❌ Some versions didn’t clearly flip the status before sending.
- ✅ Correct: use !completed to toggle:
  `dispatch(toggleStatusTodoThunk({ id, completed: !completed }));`

---

### 13. Repetitive pending and rejected handlers

- Each thunk repeats:
  `state.loading = true;`
  `state.error = null;`
- And for rejected:
  `state.loading = false;`
  `state.error = action.error.message;`
- ❌ Could be DRY’ed into helper functions. Use helper functions for pending/rejected

       ~ `const handlePending = (state) => { state.loading = true; state.error = null; };`
        `const handleRejected = (state, action) => { state.loading = false; state.error = action.error.message; };`

## 🏆 Golden Rules (Memorize These)

- ✅ Always await res.json().
- ✅ Redux state must contain real data, not Promises.
- ✅ configureStore always needs reducer: {}.
- ✅ Handle all 3 states: pending, fulfilled, rejected.
- ✅ Always verify Redux DevTools payload.
- ✅ UI must read from Redux, not just dispatch.
- ✅ React & Redux state are immutable.
- ✅ Always check naming collisions
- ✅ Forms use onSubmit, not onClick
- ✅ A side effect is anything your code does outside of just calculating and returning a value.
- ✅ Thunk arguments structure (must be one object).
