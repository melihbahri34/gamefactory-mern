import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// redux
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// reducer
import userReducer from "./features/user";
import blogReducer from "./features/blog";

const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer
  },
});

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
)