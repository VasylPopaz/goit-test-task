import { createSlice, isAnyOf } from '@reduxjs/toolkit';
//
import { getUsers, updateUser } from './operations';

const initialState = {
  users: [],
  page: 1,
  isLoading: false,
  error: null,
  filter: 'all',
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    increasePage: state => {
      state.page += 1;
    },
    changeFilter: (state, { payload }) => {
      console.log('payload', payload);
      state.filter = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.users.push(...payload);
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.users = state.users.map(user => {
          if (user.id === payload.id) return payload;
          return user;
        });
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(getUsers.pending, updateUser.pending), state => {
        state.isLoading = true;
      })
      .addMatcher(
        isAnyOf(getUsers.rejected, updateUser.rejected),
        (state, { payload }) => {
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const { increasePage, changeFilter } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
