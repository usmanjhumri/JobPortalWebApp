import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./Slice/LoginSlice/LoginSlice";
import CategoriesSlice from "./Slice/CategoriesSlice/CategoriesSlice";
import JobSlice from "./Slice/JobSlice/JobSlice";
import ApplicationSlice from "./Slice/ApplicationSlice/ApplicationSlice";
import DashboardSlice from "./Slice/DashboardSlice/DashboardSlice";
export const store = configureStore({
  reducer: {
    LoginSlice: LoginSlice,
    CategoriesSlice: CategoriesSlice,
    JobSlice: JobSlice,
    ApplicationSlice: ApplicationSlice,
    DashboardSlice: DashboardSlice,
  },
});
