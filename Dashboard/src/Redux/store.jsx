import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice/LoginSlice";
import CategoriesSlice from "./Slice/CategoriesSlice/CategoriesSlice";
import JobSlice from "./Slice/JobSlice/JobSlice";
export const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice,
    CategoriesSlice: CategoriesSlice,
    JobSlice: JobSlice,
  },
});
