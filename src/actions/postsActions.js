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

export const getPost = createAsyncThunk('getPost', async (id) => {
  try {
    const response = await axios.get(`${POSTS_FETCH_URL}/${id}`);

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

export const updatePost = createAsyncThunk('updatePost', async (postData) => {
  try {
    const { id, userId, title, body, reactions } = postData;

    const config = {
      headers: { 'Content-Type': 'application/json' }
    };

    const data = {
      userId,
      title,
      body,
      reactions
    };

    const response = await axios.put(
      `${POSTS_FETCH_URL}/${id}`, data, config
    );

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch(error) {
    if (error instanceof Error)
      return error.message;
  }
});

export const deletePost = createAsyncThunk('deletePost', async (id) => {
  try {
    const response = await axios.delete(`${POSTS_FETCH_URL}/${id}`);

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return id;
  } catch(error) {
    if (error instanceof Error)
      return error.message;
  }
});