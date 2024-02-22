import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://65d4deb13f1ab8c634362b55.mockapi.io/';

export const getUsers = createAsyncThunk(
  'users/getAll',
  async (config, thunkApi) => {
    try {
      const { data } = await axios.get('users', config);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'users/updateUser',
  async (user, thunkApi) => {
    try {
      const { data } = await axios.put(`users/${user.id}`, user);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
