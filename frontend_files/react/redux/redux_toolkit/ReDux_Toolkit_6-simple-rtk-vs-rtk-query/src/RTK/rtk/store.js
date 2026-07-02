import { configureStore } from "@reduxjs/toolkit";
import { api } from "./rtkSlice";

export const rtkStore = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
