import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'name',
  initialState: {
    status: 'no-authenticated',
    user: {},
    errorMessage: undefined
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.user = payload,
      state.errorMessage = undefined;
    },

    logout: (state, { payload }) => {
      state.status = 'no-authenticated';
      state.user = {},
      state.errorMessage = payload;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
      state.user = {},
      state.errorMessage = undefined;
    },

    clearErrorMessage: (state) => {
      state.errorMessage = undefined
    }
  }
});


// Action creators are generated for each case reducer function
export const { login, logout, checkingCredentials, clearErrorMessage } = authSlice.actions;