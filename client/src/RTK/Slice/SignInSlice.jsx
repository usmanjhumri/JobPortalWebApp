import { createAction, createSlice } from "@reduxjs/toolkit";
import { SignInNew } from "../API/api";
export const resetSuccessSignin = createAction("signInReducer/resetLogin");
const initialState = {
  isLoading: false,
  isError: false,
  isLoggedIn: false,
  success: false,
  message: "",
  token: "",
};

const signInSlice = createSlice({
  name: "signInReducer",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(SignInNew.pending, (state) => {
        state.isLoading = true;
        state.isError = true;
      })
      .addCase(SignInNew.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isLoggedIn = true;
        state.token = action.payload.Token;
        state.message = action.payload.message;
        console.log(state.token);
        console.log(state.message);
        console.log(state.isLoggedIn);
      })
      .addCase(SignInNew.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isLoggedIn = false;
        state.message = action.payload.message;
        console.log(state.message);
        console.log(state.isLoggedIn);
      })
      .addCase(resetSuccessSignin, (state) => {
        state.isLoggedIn = ""
        state.success = false;
        state.isError = false;
      });
  },
});
export const getUserSliceData = (state) => state.signInReducer;
export default signInSlice.reducer;
