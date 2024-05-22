import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Utils/AxiosInstance";

const initialState = {
  DashboardData: null,
  status: "idle", //loading, success, failure
};

export const GetDashboardData = createAsyncThunk("/getdashboard", async () => {
  const res = await axiosInstance.get("/jobs/dashboard");

  return res.data;
});

const DashboardSlice = createSlice({
  name: "DashboardSlice",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(GetDashboardData.pending, (state) => {
        state.status = "pending";
      })
      .addCase(GetDashboardData.fulfilled, (state, action) => {
        state.DashboardData = action.payload.data;
        state.status = "success";
      })
      .addCase(GetDashboardData.rejected, (state) => {
        state.status = "failure";
      });
  },
});

export const getDashboardState = (state) => state.DashboardSlice;
export default DashboardSlice.reducer;
