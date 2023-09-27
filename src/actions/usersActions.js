import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const USERS_FETCH_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = createAsyncThunk('getUsers', async () => {
  try {
    const response = await axios.get(USERS_FETCH_URL);

    return response.data;
  } catch(error) {
    if (error instanceof Error)
      return error.message;
  }
});