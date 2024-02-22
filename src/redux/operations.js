import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d4deb13f1ab8c634362b55.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get('users');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
