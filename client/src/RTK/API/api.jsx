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
      if (res) {
        const localStorageData = JSON.stringify({
          token: res?.data.Token,
        });
        window.sessionStorage.setItem(storageKey, localStorageData);
        return res.data;
      }
    } catch (error) {
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
      if (res) {
        const localStorageData = JSON.stringify({
          token: res?.data.Token,
          userID: res?.data?.userID,
        });
        window.sessionStorage.setItem(storageKey, localStorageData);
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const UserData = createAsyncThunk(
  "userData/userlogged",
  async function () {
    try {
      const response = await axiosInstance.get("/user/userlogged");
      console.log(response.data);
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const ForGotPassword = createAsyncThunk("forgotpassword/sentmail", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post("/user/send-reset-password-email", data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response.data)
    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)
  }
})

export const userResetPassword = createAsyncThunk(
  "resetPassword/setpassword",
  async ({ id, token, data }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `/user/resetpassword/${id}/${token}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);


export const ContactFormReducer = createAsyncThunk("contactForm/contacus", async (data, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post('/user/contact-us', data, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response);
    return response.data
  } catch (error) {
    console.log(error)
    return rejectWithValue(error.response.data)

  }
})


export const GetJobs = createAsyncThunk("getjob/jobs", async () => {
  try {
    const response = await axiosInstance.get("/jobs/");
    return response.data;
  } catch (error) {
    console.log(error);
  }
});
export const GetSaveJobs = createAsyncThunk("getjob/saved", async () => {
  try {
    const val = JSON.parse(sessionStorage.getItem(storageKey));
    const response = await axiosInstance.get(`/savejobs/${val?.userID}`);
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
