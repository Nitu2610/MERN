import { createSlice } from "@reduxjs/toolkit";
import {
  addTodoThunk,
  deleteTodoThunk,
  editedTodoThunk,
  fetchTodos,
  toggleStatusTodoThunk,
} from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const handlePending = (state) => {
  state.loading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.error.message;
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    // addTodoTask: (state, action) => {
    //   state.data.push(action.payload);
    // },
    // deleteTodoTask: (state, action) => {
    //   let fileredData = state.data.filter((todo, i) => {
    //     return todo.title !== action.payload;
    //   });
    //   state.data = fileredData;
    // },

    handleStatusToggle: (state, action) => {
      // Old way, not using the immer property.
      //   let modifiedData=  state.data.map((todo,i)=>{
      //     if(todo.title ===action.payload){
      //         return {...todo, completed: !todo.completed}
      //     }
      //     return todo;
      //     })
      //     state.data=modifiedData;

      // Using the immer property
      const todo = state.data.find((todo) => todo.title === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, handlePending)
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, handleRejected)
      // ---- addTodoThunk cases
      .addCase(addTodoThunk.pending, handlePending)
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(addTodoThunk.rejected, handleRejected)
      // ----------deleteTodoThunk---------
      .addCase(deleteTodoThunk.pending, handlePending)
      .addCase(deleteTodoThunk.fulfilled, (state, action) => {
        let filteredData = state.data.filter((todo) => {
          return todo.id !== action.payload;
        });
        state.data = filteredData;
        state.loading = false;
      })
      .addCase(deleteTodoThunk.rejected, handleRejected)
      // ----------toggleStatusTodoThunk---------
      .addCase(toggleStatusTodoThunk.pending, handlePending)
      .addCase(toggleStatusTodoThunk.fulfilled, (state, action) => {
        let todo = state.data.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.completed = action.payload.completed;
        }
        state.loading = false;
      })
      .addCase(toggleStatusTodoThunk.rejected, handleRejected)
      // ----------editedTodoThunk---------
      .addCase(editedTodoThunk.pending, handlePending)
      .addCase(editedTodoThunk.fulfilled, (state, action) => {
        let todo = state.data.find((todo) => todo.id === action.payload.id);
        if (todo) {
          todo.title = action.payload.title;
        }
        state.loading = false;
      })
      .addCase(editedTodoThunk.rejected, handleRejected);
  },
});

// export const { addTodoTask, deleteTodoTask, handleStatusToggle } =
  todoSlice.actions;

export default todoSlice.reducer;
