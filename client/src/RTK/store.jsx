import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "./Slice/SignUpUser";
import signInReducer from "./Slice/SignInSlice";
import ProfileSlice from "./Slice/ProfileSlice";
import JobSlice from "./Slice/JobSlice";
import CategoriesSlice from "./Slice/CategoriesSlice";
import SavedJobSlice from "./Slice/SavedJobSlice";
import ForgotPasswordSlice from "./Slice/ForgotPassword";
import userlogged from './Slice/UserLogged'
export const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    signInReducer: signInReducer,
    ProfileSlice: ProfileSlice,
    JobSlice: JobSlice,
    CategoriesSlice: CategoriesSlice,
    SaveJobSlice: SavedJobSlice,
    forgotReducer: ForgotPasswordSlice,
    userLoggedData: userlogged

  },
});
