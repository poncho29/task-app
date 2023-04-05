import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'name',
  initialState: {
    status: 'no-authenticated',
    emial: null,
    name: null,
    token: null,
    errorMessage: null
  },
  reducers: {
    login: (state, { payload }) => {
      state.status = 'authenticated';
      state.emial = payload.emial;
      state.name = payload.name;
      state.token = payload.token;
      state.errorMessage = null;
    },

    logut: (state, { payload }) => {
      state.status = 'no-authenticated';
      state.emial = null
      state.name = null
      state.token = null
      state.errorMessage = payload.errorMessage;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },
  }
});


// Action creators are generated for each case reducer function
export const { login, logut, checkingCredentials } = authSlice.actions;