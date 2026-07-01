import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let URL="https://jsonplaceholder.typicode.com/users"
export const fetchUser= createAsyncThunk(
  "user/fetchUser",
  async(_,thunkAPI)=>{
    try {
      let res= await axios.get(URL);
      let data= res.data;
    //  console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message:"Unable to fetch",
        code:502
      })
    }
  }
)