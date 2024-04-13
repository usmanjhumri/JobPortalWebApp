import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Utils/AxiosInstance";

const initialState = {
  allCategories: [],
  status: "idle", //loading, success, failure
};

export const GetCategories = createAsyncThunk("/getcategories", async () => {
  const res = await axiosInstance.get("/category");
  console.log(res.data);
  return res.data;
});

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetCategories.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetCategories.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.allCategories = action.payload.data;
        state.status = "success";
      })
      .addCase(GetCategories.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export const getCategoriesStatus = (state) => state.CategoriesSlice;
export default CategoriesSlice.reducer;
