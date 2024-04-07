import { createAction, createSlice } from '@reduxjs/toolkit'
import { SignInNew } from '../API/api'
export const resetSuccessSignin = createAction("signInReducer/resetLogin")
const initialState = {

    isLoading: false,
    isError: false,
    isLogedIn: false,
    success: false,
    message: "",
    token: ""
}

const signInSlice = createSlice({
    name: "signInReducer",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(SignInNew.pending, (state) => {
            state.isLoading = true
            state.isError = true
        })
            .addCase(SignInNew.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.token = action.payload.Token
                state.message = action.payload.message
                console.log(state.token)
                console.log(state.message)

            })
            .addCase(SignInNew.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload.message
                console.log(state.message)
            })
            .addCase(resetSuccessSignin, (state) => {
                state.success = false;
                state.isError = false;
            })
    }
})

export default signInSlice.reducer