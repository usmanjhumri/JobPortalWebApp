import { configureStore } from "@reduxjs/toolkit";
import userRegisterReducer from './Slice/SignUpUser'
export const store = configureStore({
    reducer: {
        userRegister: userRegisterReducer,
    }
})