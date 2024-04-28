import { createAsyncThunk } from "@reduxjs/toolkit";

import { storageKey } from "../../Const/Const";
import axiosInstance from "../../Const/AxiosInstance";

export const SignUpUser = createAsyncThunk(
  "createUser/signUpUser",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axiosInstance.post(`/user/register`, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res.data);
      if (res) {
        const localStorageData = JSON.stringify({
          token: res?.data.Token,
        });
        window.sessionStorage.setItem(storageKey, localStorageData);
        return res.data;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const SignInNew = createAsyncThunk(
  "signInReducer",
  async function (data, { rejectWithValue }) {
    try {
      const res = await axiosInstance.post("/user/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(res);
      if (res) {
        const localStorageData = JSON.stringify({
          token: res?.data.Token,
          userID: res?.data?.userID,
        });
        window.sessionStorage.setItem(storageKey, localStorageData);
        return res.data;
      }
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error.response.data);
    }
  }
);

export const UserData = createAsyncThunk(
  "userData/userlogged",
  async function (data, { rejectWithValue }) {
    try {
      const token = JSON.parse(sessionStorage.getItem(storageKey));
      console.log(token);
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      const response = await axiosInstance.get("/user/userlogged", data, {
        headers,
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const GetJobs = createAsyncThunk("getjob/jobs", async () => {
  try {
    const response = await axiosInstance.get("/jobs/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const GetCategory = createAsyncThunk("/categories", async () => {
  try {
    const response = await axiosInstance.get("/category/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
