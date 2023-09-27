import { createSlice } from "@reduxjs/toolkit";
import { getPosts, createPost } from "../../actions/postsActions";

const initialState = {
  status: 'idle',
  posts: [],
  error: null
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload;

      const existingPost = state.posts.find(post => post.id === postId);

      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload.map(post => {
          post.reactions = {
            like: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
          };
          return post;
        });
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(createPost.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts.unshift(action.payload);
      })
      .addCase(createPost.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  }
});

export const { addReaction } = postsSlice.actions;

export const selectAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export default postsSlice.reducer;