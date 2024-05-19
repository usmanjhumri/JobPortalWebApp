import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Utils/AxiosInstance";

const initialState = {
  allApplications: [],
  status: "idle", //loading, success, failure
};

export const GetAllApplications = createAsyncThunk(
  "/jobapplications",
  async (id) => {
    console.log(id);
    const res = await axiosInstance.get(`/jobs/getjobsapplications/${id}`);

    return res.data;
  }
);

const ApplicationSlice = createSlice({
  name: "ApplicationSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetAllApplications.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetAllApplications.fulfilled, (state, action) => {
        state.allApplications = action.payload.data;
        state.status = "success";
      })
      .addCase(GetAllApplications.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export const getApplicationData = (state) => state.ApplicationSlice;
export default ApplicationSlice.reducer;
