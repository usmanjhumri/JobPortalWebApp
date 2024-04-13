import { configureStore } from "@reduxjs/toolkit";
import BlogSlice from "./Slice/BlogSlice/BlogSlice";
import LoginSlice from "./Slice/LoginSlice/LoginSlice";
import CategoriesSlice from "./Slice/CategoriesSlice/CategoriesSlice";
export const store = configureStore({
  reducer: {
    BlogSlice: BlogSlice,
    LoginSlice: LoginSlice,
    CategoriesSlice: CategoriesSlice,
  },
});
