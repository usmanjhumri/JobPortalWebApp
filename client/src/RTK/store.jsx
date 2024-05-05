import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "./Slice/SignUpUser";
import signInReducer from "./Slice/SignInSlice";
import ProfileSlice from "./Slice/ProfileSlice";
import JobSlice from "./Slice/JobSlice";
import CategoriesSlice from "./Slice/CategoriesSlice";
import SavedJobSlice from "./Slice/SavedJobSlice";

export const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    signInReducer: signInReducer,
    ProfileSlice: ProfileSlice,
    JobSlice: JobSlice,
    CategoriesSlice: CategoriesSlice,
    SaveJobSlice: SavedJobSlice,
  },
});
