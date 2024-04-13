import { createSlice } from "@reduxjs/toolkit";
import { DummyBlogData } from "../../../Resources/DummyBlogData";

const initialState = {
  blogs: DummyBlogData,
  status: "idle", //success, fail, pending
};

export const BlogSlice = createSlice({
  name: "BlogSlice",
  initialState,
  reducers: {},
  extraReducers: {},
});

export const getBlogState = (state) => state.BlogSlice;
export default BlogSlice.reducer;
