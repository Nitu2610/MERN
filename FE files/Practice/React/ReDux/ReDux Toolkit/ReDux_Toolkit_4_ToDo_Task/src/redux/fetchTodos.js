import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import React from "react";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  let data =  res;
 // console.log(data);
  return data;
});
