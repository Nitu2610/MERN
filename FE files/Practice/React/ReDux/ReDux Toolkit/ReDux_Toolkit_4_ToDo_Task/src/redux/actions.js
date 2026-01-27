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
  async (newTask, { rejectWithValue }) => {
    // rejectWithValue lets you handle errors the same way you handle success data — via action.payload.
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

export const deleteTodoThunk = createAsyncThunk(
  "todo/deleteToDoTasks",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      console.log(`post reply of delete`, res.data);
      return id; // JSONPlaceholder returns an empty object {} on delete — it does NOT return the deleted todo. So taking id as unique point to filter.
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const toggleStatusTodoThunk = createAsyncThunk(
  "todo/toggleStatusTodoThunk",
  async ({ id, completed }, { rejectWithValue }) => {
    // rejectWithValue lets you handle errors the same way you handle success data — via action.payload.
    try {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { completed },
      );
      //   console.log(`post reply of toggle change`,res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const editedTodoThunk = createAsyncThunk(
  "todo/editedTodoThunk",
  async ({ id, title }, { rejectWithValue }) => {
    try {
      const res = await axios.patch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        { title },
      );
      // console.log(`post reply of toggle change`,res.data)
      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
