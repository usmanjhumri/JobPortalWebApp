import { createAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Const/AxiosInstance";

export const resetSuccessSignin = createAction("signInReducer/resetLogin");
const initialState = {
  personalInformations: null,
  EducationDetails: [],
  ExperienceDetails: [],
  SkillDetails: [],
  status: "idle", //loading success failure
};

export const GetUserProfile = createAsyncThunk("/userprofile", async () => {
  let userid = JSON.parse(sessionStorage.getItem("user"));

  let res = await axiosInstance.get(`/profile/${userid?.userID}`);
  console.log(res?.data);
  return res.data;
});


const ProfileSlice = createSlice({
  name: "ProfileSlice",
  initialState,
  reducers: {
    SetPersonalInformation: (state, action) => {
      state.personalInformations = action.payload;
    },
    SetEducationDetails: (state, action) => {
      state.EducationDetails = action.payload;
    },
    SetSkillDetails: (state, action) => {
      state.SkillDetails = action.payload;
    },
    SetExperienceDetails: (state, action) => {
      state.ExperienceDetails = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetUserProfile.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(GetUserProfile.fulfilled, (state, action) => {
        console.log(action.payload);
        state.status = "success";
        state.EducationDetails = action.payload.data?.education;
        state.personalInformations = action.payload.data?.personalInformation;
        state.ExperienceDetails = action.payload.data?.experience;
        state.SkillDetails = action.payload.data?.skills;
      })
      .addCase(GetUserProfile.rejected, (state) => {
        state.status = "failed";
      });
  },
});
export const GetProfileDetails = (state) => state.ProfileSlice;
export const {
  SetExperienceDetails,
  SetEducationDetails,
  SetPersonalInformation,
  SetSkillDetails,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;
