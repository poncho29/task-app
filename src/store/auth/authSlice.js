import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'name',
  initialState: {
    status: 'checking',
    emial: null,
    displayName: null,
    errorMessage: null
  },
  reducers: {
    login: (state, action) => {},
    logut: (state, payload) => {},
    checkingCredentials: (state) => {
      state.status = "checking";
    },
  }
});


// Action creators are generated for each case reducer function
export const { login, logut, checkingCredentials } = authSlice.actions;