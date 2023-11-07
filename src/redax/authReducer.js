import { createSlice } from '@reduxjs/toolkit';

import {
  loginThunk,
  refreshThunk,
  registerThunk,
} from './authReducerThunk';

const INITIAL_STATE = {
    token: null,
    user: {
      email: null,
      name: null,
    },
    authenticated: false,
    isLoading: false,
    error: null,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: 'auth',
  // Початковий стан редюсера слайсу
  initialState: INITIAL_STATE,
  // Об'єкт редюсерів

  extraReducers: builder =>
    builder
    // ---------- REGISTER USER ----------------
    .addCase(registerThunk.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(registerThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(registerThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // ---------- LOGIN USER ----------------
    .addCase(loginThunk.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    })
    .addCase(loginThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    // ---------- REFRESH USER ----------------
    .addCase(refreshThunk.pending, state => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(refreshThunk.fulfilled, (state, action) => {
      state.isLoading = false;
      state.authenticated = true;
      state.user = action.payload;
    })
    .addCase(refreshThunk.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    }),
});

export const authReducer = authSlice.reducer;
