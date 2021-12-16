import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'counter',
  initialState: {
    name: '',
    email: '',
    password: '',
    about: '',
    currentPosition: '',
    location: '',
    phone: 0,
    title: '',
  },
  reducers: {
    saveName: (state, action) => {
      state.name += action.payload
    },
    saveEmail: (state, action) => {
      state.email += action.payload
    },
    savePassword: (state, action) => {
      state.password += action.payload
    },
    saveAbout: (state, action) => {
      state.about += action.payload
    },
  },
});

// Action creators are generated for each case reducer function
export const { saveName, saveEmail, savePassword, saveAbout } = authSlice.actions;

export const saveNameAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveName(value));
    }, 1000);
};

export const saveEmailAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveEmail(value));
    }, 1000);
};

export const savePasswordAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(savePassword(value));
    }, 1000);
};

export const saveAboutAsync = value => dispatch => {
    setTimeout(() => {
      dispatch(saveAbout(value));
    }, 1000);
};

export const selectName = state => state.name;
export const selectEmail = state => state.email;
export const selectPassword = state => state.password;
export const selectAbout = state => state.about;

export default authSlice.reducer;