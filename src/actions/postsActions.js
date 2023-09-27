import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const POSTS_FETCH_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getPosts = createAsyncThunk('getPosts', async () => {
  try {
    const response = await axios.get(POSTS_FETCH_URL);

    return response.data;
  } catch (error) {
    if (error instanceof Error)
      return error.message;
  }
});

export const createPost = createAsyncThunk('createPost', async (postData) => {
  try {
    const { userId, title, body } = postData;

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const data = {
      userId,
      title,
      body,
      reactions: {
        like: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
      }
    };

    const response = await axios.post(POSTS_FETCH_URL, data, config);

    return response.data;
  } catch (error) {
    if (error instanceof Error)
      return error.message;
  }
});