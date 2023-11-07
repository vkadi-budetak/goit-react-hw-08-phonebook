import { createAsyncThunk } from '@reduxjs/toolkit';

import { requestLogin, requestRefreshUser, requestRegister, setToken } from 'services/phonebookApi';

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (FormData, thunkAPI) => {
    try {
      const response = await requestLogin(FormData);
      console.log('response', response)

      return response; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const registerThunk = createAsyncThunk(
  'auth/register',
  async (FormData, thunkAPI) => {
    try {
      const authData = await requestRegister(FormData);
      console.log('authData', authData)

      return authData; //це буде записано в екшин пейлоад
    } catch (error) {
      return thunkAPI.rejectWithValue(error.massage);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const token = state.auth.token;
    
    try {
      setToken(token);
      const authData = await requestRefreshUser();
      console.log('authData: ', authData);

      return authData; // ЦЕ БУДЕ ЗАПИСАНО В ЕКШИН ПЕЙЛОАД
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const state = thunkAPI.getState();
      const token = state.auth.token;

      if (!token) return false;
      return true;
    },
  }
);