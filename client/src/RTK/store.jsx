import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from "./Slice/SignUpUser";
import signInReducer from "./Slice/SignInSlice";
import ProfileSlice from "./Slice/ProfileSlice";

export const store = configureStore({
  reducer: {
    userRegister: userRegisterReducer,
    signInReducer: signInReducer,
    ProfileSlice: ProfileSlice,
  },
});
