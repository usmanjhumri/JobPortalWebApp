/* eslint-disable react-refresh/only-export-components */
import { createSlice } from "@reduxjs/toolkit";
import { ContactFormReducer } from "../API/api";

const initialState = {
    isLoading: false,
    sMessage: "",
    eMessage: "",
}

const ContactSlice = createSlice({
    name: 'contactUs',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(ContactFormReducer.pending, (state) => {
            state.isLoading = true
        })
            .addCase(ContactFormReducer.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false
                state.sMessage = action.payload.message

            })
            .addCase(ContactFormReducer.rejected, (state, action) => {
                state.isLoading = false
                state.eMessage = action.payload.message
            })
    }
})
export default ContactSlice.reducer