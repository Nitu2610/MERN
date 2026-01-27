import { createSlice } from "@reduxjs/toolkit";
import { addTodoThunk, fetchTodos } from "./actions";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodoTask: (state, action) => {
      state.data.push(action.payload);
    },
    deleteTodoTask: (state, action) => {
      let fileredData = state.data.filter((todo, i) => {
        return todo.title !== action.payload;
      });
      state.data = fileredData;
    },
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
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // ---- addTodoThunk cases
      .addCase(addTodoThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTodoThunk.fulfilled, (state, action) => {
        state.data.push(action.payload);
        state.loading = false;
      })
      .addCase(addTodoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { addTodoTask, deleteTodoTask,handleStatusToggle } = todoSlice.actions;

export default todoSlice.reducer;
