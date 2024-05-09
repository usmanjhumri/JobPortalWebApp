/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { ForGotPassword } from "../API/api";

const initialState = {
    isLoading: false,
    sMessage: "",
    eMessage: "",
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
                state.sMessage = action.payload.message

            })
            .addCase(ForGotPassword.rejected, (state, action) => {
                state.isLoading = false
                state.eMessage = action.payload.message
            })
    }
})
export default ForgotPasswordSlice.reducer