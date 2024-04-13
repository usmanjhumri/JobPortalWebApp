import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from './Slice/SignUpUser'
import signInReducer from './Slice/SignInSlice'

export const store = configureStore({
    reducer: {
        userRegister: userRegisterReducer,
        signInReducer,
    }
})