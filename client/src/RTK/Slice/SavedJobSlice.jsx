import { createSlice } from "@reduxjs/toolkit";
import { GetSaveJobs } from "../API/api";

const initialState = {
  saved: null,
  JobStatus: "idle", //loading success failure
};

const SaveJobSlice = createSlice({
  name: "SaveJobSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetSaveJobs.pending, (state, action) => {
        state.JobStatus = "pending";
      })
      .addCase(GetSaveJobs.fulfilled, (state, action) => {
     
        state.saved = action.payload.data;
        state.JobStatus = "success";
      })
      .addCase(GetSaveJobs.rejected, (state) => {
        state.JobStatus = "rejected";
      });
  },
});
export const GetSavedJobsDetails = (state) => state.SaveJobSlice;

export default SaveJobSlice.reducer;
