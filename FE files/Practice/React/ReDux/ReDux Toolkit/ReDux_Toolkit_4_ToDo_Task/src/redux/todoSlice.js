import { createSlice } from "@reduxjs/toolkit"
import { fetchTodos } from "./fetchTodos"


const initialState={
    data:[],
    loading:true,
    error:null
}

const todoSlice=createSlice({
    name:'todoList',
    initialState,
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending, (state)=> {
            state.loading=true;
        })
        .addCase(fetchTodos.fulfilled, (state, action)=> {
            state.data=action.payload.data;
            state.loading=false;
        })
        .addCase(fetchTodos.rejected, (state, action)=> {
            state.loading=false;
            state.error=action.error.message;
        })
    },
})


export default todoSlice.reducer;