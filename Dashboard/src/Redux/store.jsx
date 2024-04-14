import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice/LoginSlice";
import CategoriesSlice from "./Slice/CategoriesSlice/CategoriesSlice";
export const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice,
    CategoriesSlice: CategoriesSlice,
  },
});
