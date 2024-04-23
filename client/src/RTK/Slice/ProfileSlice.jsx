import { createAction, createSlice } from "@reduxjs/toolkit";

export const resetSuccessSignin = createAction("signInReducer/resetLogin");
const initialState = {
  personalInformations: null,
  EducationDetails: [],
  ExperienceDetails: [],
  SkillDetails: [],
  status: "idle", //loading success failure
};

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
});
export const GetProfileDetails = (state) => state.ProfileSlice;
export const {
  SetExperienceDetails,
  SetEducationDetails,
  SetPersonalInformation,
  SetSkillDetails,
} = ProfileSlice.actions;
export default ProfileSlice.reducer;
