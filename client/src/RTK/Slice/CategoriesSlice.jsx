import { createSlice } from "@reduxjs/toolkit";
import { GetCategory } from "../API/api";

const initialState = {
  Categories: null,
  categoryStatus: "idle", //loading success failure
};

const CategoriesSlice = createSlice({
  name: "CategoriesSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetCategory.pending, (state, action) => {
        state.categoryStatus = "pending";
      })
      .addCase(GetCategory.fulfilled, (state, action) => {
        console.log(action.payload);
        state.Categories = action.payload.data;
        state.categoryStatus = "success";
      })
      .addCase(GetCategory.rejected, (state) => {
        state.categoryStatus = "rejected";
      });
  },
});
export const GetCategoryStatus = (state) => state.CategoriesSlice;

export default CategoriesSlice.reducer;
