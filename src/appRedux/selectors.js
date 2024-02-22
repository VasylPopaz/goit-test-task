import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users;
export const selectPage = state => state.page;
export const selectIsLoading = state => state.isLoading;
export const selectError = state => state.error;
export const selectFilter = state => state.filter;
export const selectFilteredUsers = createSelector(
  [selectUsers, selectFilter],
  (users, filter) => {
    switch (filter) {
      case 'all':
        return users;
      case 'follow':
        return users.filter(user => !user.isFollowing);
      case 'followings':
        return users.filter(user => user.isFollowing);
      default:
        break;
    }
  }
);
