import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "./fetchUser";

const initialState = {
  user: [],
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.loading = true, state.error = null;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.loading = false; 
          state.user = action.payload;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.loading=false;
        state.error = action.payload;
      });
  },
});


export default userSlice.reducer;