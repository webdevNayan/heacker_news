// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import hackerNewsReducer from './hackerNewsSlice';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    hackerNews: hackerNewsReducer,
  },
  middleware: [thunk],
});

export default store;
