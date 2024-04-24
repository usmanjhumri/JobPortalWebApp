import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Utils/AxiosInstance";

const initialState = {
  AllJobs: [],
  status: "idle", //loading, success, failure
};

export const GetAllJobs = createAsyncThunk("/jobs", async () => {
  const res = await axiosInstance.get("/jobs");
  console.log(res.data);
  return res.data;
});

const JobSlice = createSlice({
  name: "JobSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetAllJobs.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllJobs.fulfilled, (state, action) => {
        console.log(action.payload.data);
        state.AllJobs = action.payload.data;
        state.status = "success";
      })
      .addCase(GetAllJobs.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export const GetJobStatus = (state) => state.JobSlice;
export default JobSlice.reducer;
