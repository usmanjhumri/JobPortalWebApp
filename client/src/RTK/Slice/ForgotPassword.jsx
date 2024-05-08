/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { ForGotPassword } from "../API/api";

const initialState = {
    isLoading: false,
    message: "",
}

const ForgotPasswordSlice = createSlice({
    name: 'forgotReducer',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(ForGotPassword.pending, (state) => {
            state.isLoading = true
        })
            .addCase(ForGotPassword.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false
                state.message = action.payload.message
                console.log(state.message)
            })
            .addCase(ForGotPassword.rejected, (state) => {
                state.isLoading = false
            })
    }
})
export default ForgotPasswordSlice.reducer