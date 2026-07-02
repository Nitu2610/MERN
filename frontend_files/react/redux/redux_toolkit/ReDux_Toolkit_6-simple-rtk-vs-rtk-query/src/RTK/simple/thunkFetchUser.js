import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const thunkFetchUser = createAsyncThunk(
  "simple/fetchUser", 
  async (_,{rejectWithValue}) => {
  try {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    let data = res.data;
    console.log("simple redux--", data);
    return data;
  } catch (error) {
    return rejectWithValue({
      message:"Unable to fetch via simple RTK",
      code:520
    })
  }
});
