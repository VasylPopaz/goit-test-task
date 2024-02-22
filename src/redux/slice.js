import { createSlice } from '@reduxjs/toolkit';
import { getUsers } from './operations';

const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.users = payload;
        state.isLoading = false;
      })
      .addCase(getUsers.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});
export const usersReducer = usersSlice.reducer;
