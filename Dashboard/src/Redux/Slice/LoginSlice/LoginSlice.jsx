import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  isLogedin: false,
  userID: null,
  status: "idle", //pending,success,failure
};

export const LoginSlice = createSlice({
  name: "LoginSlice",
  initialState,
  reducers: {
    setloginIn: (state, action) => {
      state.isLogedin = true;
      
      const uservalues = JSON.parse(sessionStorage.getItem("user"));
      console.log(uservalues);
      state.token = action.payload?.Token || uservalues?.token;
      state.userID = action.payload?.userID || uservalues?.token;
    },
    setLogout: (state) => {
      sessionStorage.removeItem("user");
      state.isLogedin = false;
      state.token = "";
      state.userID = null;
    },
  },
});
export const getLoginValue = (state) => state.LoginSlice;
export const { setloginIn, setLogout } = LoginSlice.actions;
export default LoginSlice.reducer;
