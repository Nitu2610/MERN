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
    reducers:{
        addTodoTask: (state, action)=>{
            state.data.push(action.payload);
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.pending, (state)=> {
            state.loading=true;
        })
        .addCase(fetchTodos.fulfilled, (state, action)=> {
            state.data=action.payload;
            state.loading=false;
        })
        .addCase(fetchTodos.rejected, (state, action)=> {
            state.loading=false;
            state.error=action.error.message;
        })
    },
})

export  const {addTodoTask}= todoSlice.actions;  

export default todoSlice.reducer;