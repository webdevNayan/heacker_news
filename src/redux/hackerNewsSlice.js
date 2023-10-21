// src/redux/hackerNewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  searchResults: [],
  postDetail: {},
};

export const fetchSearchResults = createAsyncThunk('hackerNews/fetchSearchResults', async (query) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`);
  return response.data.hits;
});

export const fetchPostDetail = createAsyncThunk('hackerNews/fetchPostDetail', async (objectID) => {
  const response = await axios.get(`http://hn.algolia.com/api/v1/items/${objectID}`);
  return response.data;
});

const hackerNewsSlice = createSlice({
  name: 'hackerNews',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchResults.fulfilled, (state, action) => {
        state.searchResults = action.payload;
      })
      .addCase(fetchPostDetail.fulfilled, (state, action) => {
        state.postDetail = action.payload;
      });
  },
});

export default hackerNewsSlice.reducer;
