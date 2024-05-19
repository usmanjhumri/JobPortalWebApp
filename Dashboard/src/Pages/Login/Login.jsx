import { Box, Button, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import {
  getLoginValue,
  setloginIn,
} from "../../Redux/Slice/LoginSlice/LoginSlice";
import axiosInstance from "../../Utils/AxiosInstance";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import { CheckUserAuth } from "../../Api/UserAuth/CheckUserAuth";

const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      minHeight: "100vh",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px",
    },
    subContainer: {
      width: "100%",
      maxWidth: "450px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
  };
});

const Login = () => {
  const { container, subContainer } = useStyle();
  const [value, setvalues] = useState({});
  const { setsnackBarData } = useContext(SnackBarContext);
  const handleChange = (e) => {
    setvalues({ ...value, [e.target.name]: e.target.value });
  };
  const { token, isLogedin } = useSelector(getLoginValue);
  console.log(token, isLogedin);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    const respone = await axiosInstance.post("/user/login", value);
    console.log(respone);
    if (respone.data.status) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          token: respone.data.Token,
          userID: respone.data.userID,
        })
      );
      setsnackBarData({
        type: respone.data.status,
        message: respone.data.message,
        openToast: true,
      });
      dispatch(setloginIn(respone.data));
      navigate("/dashboard");
    } else {
      setsnackBarData({
        type: "error",
        message: "something went wrong",
        openToast: true,
      });
    }
  };

  useEffect(() => {
    checkloginuser();
  }, [isLogedin]);
  const checkloginuser = async () => {
    if (isLogedin) {
      navigate("/dashboard");
    } else {
      let res = await CheckUserAuth();
      if (res.data?.user?.usertype === "admin") {
        dispatch(setloginIn());
        navigate("/dashboard");
      }
      setsnackBarData(res.data?.snackBarData);
    }
  };
  return (
    <Box className={container}>
      <form onSubmit={handleSubmit} className={subContainer}>
        <Box>
          <Typography variant="h5" sx={{ fontWeight: "bold" }}>
            Login
          </Typography>
        </Box>
        <Box>
          <Typography>Email</Typography>
          <TextField
            name="email"
            required
            fullWidth
            type="email"
            placeholder="Email"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Typography>Password</Typography>
          <TextField
            name="password"
            required
            fullWidth
            type="password"
            placeholder="Password"
            size="small"
            onChange={handleChange}
          />
        </Box>
        <Box>
          <Button type="submit" fullWidth variant={"contained"} size={"small"}>
            Signin
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Login;
