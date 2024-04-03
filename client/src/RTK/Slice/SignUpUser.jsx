import { createSlice } from "@reduxjs/toolkit";
import { SignUpUser } from "../API/api";







const initialState = {
    isLoading: false,
    isError: false,
    isLogedIn: false,
    success: false,
    errorMessage: "",
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
                console.log(action.payload);
            })
            .addCase(SignUpUser.rejected, (state, action) => {
                console.log(action.payload);
            })
    }
})
export default userRegister.reducer