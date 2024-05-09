import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../API/api";


const initialState = {
    userID: "",
    isLoading: false,
    isError: false,
}

const userLoggedData = createSlice({
    name: 'userLoggedReducer',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(UserData.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
            .addCase(UserData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isError = false
                state.userID = action.payload.user._id
                console.log(state.userID)
            })
            .addCase(UserData.rejected, (state) => {
                state.isLoading = false

            })
    }
})
export default userLoggedData.reducer