import { createSlice } from "@reduxjs/toolkit";
import { SignUpUser } from "../API/api";

const initialState = {
    isLoading: false,
    isError: false,
    isLogedIn: false,
    success: false,
    errorMessage: "",
    data: []
}

const userRegister = createSlice({
    name: 'createUser',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(SignUpUser.pending, (state, action) => {
            console.log(action.payload);
            state.isLoading = true
            state.isError = false
            state.errorMessage = action.payload
        })
            .addCase(SignUpUser.fulfilled, (state, action) => {
                state.data = action.payload
                console.log(state.data);
            })
            .addCase(SignUpUser.rejected, (state, action) => {
                console.log(action.payload);
            })
    }
})
export default userRegister.reducer