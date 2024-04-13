import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogedin: false,
  user: null,
  status: "idle", //pending,success,failure
};

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    setloginIn: (state, action) => {
      state.isLogedin = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    setLogout: (state, ) => {
      state.isLogedin = false;
      state.token = "";
      state.user = null;
    },
  },
});
export const getLoginValue = (state) => state.LoginSlice;
export const { setloginIn, setLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
