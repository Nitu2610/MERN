import { createSlice } from "@reduxjs/toolkit";
import { thunkFetchUser } from "./thunkFetchUser";


const initialState={
  user:null,
  loading:false,
  error:null
}

const simpleSlice=createSlice({
  name:"simpleRTK",
  initialState,
  reducers:{},

  extraReducers :(builder)=>{
    builder
    .addCase(thunkFetchUser.pending,(state)=>{
      state.loading=true;
      state.error=null
    })
    .addCase(thunkFetchUser.fulfilled,(state, action)=>{
      state.loading=false;
      state.user=action.payload
    })
    .addCase(thunkFetchUser.rejected,(state, action)=>{
      state.loading=false;
      state.error=action.error
    })
  }
})


export default simpleSlice.reducer;