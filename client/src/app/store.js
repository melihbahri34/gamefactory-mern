import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';

// import authSlice from '../reducers/authSlice';
// import blogSlice from './blogSlice';

import allReducers from '../reducers';

/*
export default configureStore({
  reducer: {
      auth: authSlice,
  },
});
*/

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;