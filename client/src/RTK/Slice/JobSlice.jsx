import { createSlice } from "@reduxjs/toolkit";
import { GetJobs } from "../API/api";

const initialState = {
  jobs: null,
  JobStatus: "idle", //loading success failure
};

const JobSlice = createSlice({
  name: "JobSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetJobs.pending, (state, action) => {
        state.JobStatus = "pending";
      })
      .addCase(GetJobs.fulfilled, (state, action) => {
        console.log(action.payload);
        state.jobs = action.payload.data;
        state.JobStatus = "success";
      })
      .addCase(GetJobs.rejected, (state) => {
        state.JobStatus = "rejected";
      });
  },
});
export const GetJobDetails = (state) => state.JobSlice;

export default JobSlice.reducer;
