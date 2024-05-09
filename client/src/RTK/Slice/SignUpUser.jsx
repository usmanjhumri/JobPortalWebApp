import { createSlice } from "@reduxjs/toolkit";
import { SignUpUser } from "../API/api";

const initialState = {
    isLoading: false,
    isError: false,
    success: false,
    message: "",
    token: "",
    data: null,


}

const userRegister = createSlice({
    name: 'createUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(SignUpUser.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
            .addCase(SignUpUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.success = true
                state.data = action.payload
                state.message = action.payload?.message
                state.token = action.payload?.Token


            })
            .addCase(SignUpUser.rejected, (state, action) => {
                state.isLoading = false
                state.message = action.payload?.message

            })
    }
})
export default userRegister.reducer