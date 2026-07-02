import { configureStore } from "@reduxjs/toolkit";
import simpleSlice from "./simpleSlice"

export const store=configureStore({
  reducer:{
    user: simpleSlice,
  }
})