import { configureStore } from "@reduxjs/toolkit";

import todoSlice from './todoSlice'


export const store=configureStore({
   reducer:{  // Here if we miss to add the write the reducer, we will get- // @reduxjs_toolkit.js?t=1769511998334&v=50d06fb8:2042 Uncaught Error: `reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers
     todo:todoSlice,
   }
})
