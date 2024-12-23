import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async (url = "https://jsonplaceholder.typicode.com/posts") => {
  const response = await fetch(url);
  const data = await response.json();
  return data.map((post) => ({
    ...post,
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  }));
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.posts.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addReaction } = postsSlice.actions;
export default postsSlice.reducer;