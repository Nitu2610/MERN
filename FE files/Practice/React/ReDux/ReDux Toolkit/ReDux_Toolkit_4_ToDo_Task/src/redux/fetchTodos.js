import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  let data =  res.data;
 // console.log(data);
  return data;
});
