import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  let data = res.data;
  // console.log(data);
  return data;
});

export const addTodoThunk = createAsyncThunk(
  "todo/addToDoTasks",
  async (newTask, { rejectWithValue }) => { // rejectWithValue lets you handle errors the same way you handle success data — via action.payload.
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        newTask,
      );
    //   console.log(`post reply`,res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
