/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import { Box, IconButton, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storageKey } from "../../../Const/Const";
import { resetSuccessSignin } from "../../../RTK/Slice/SignInSlice";
import { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const settings = ["Profile", "Logout"];
const Useravatar = ({
  setUserLoggedIn,
  handleOpenUserMenu,
  handleCloseUserMenu,
  anchorElUser,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUserAvatar = async (avatarmenu) => {
    switch (avatarmenu) {
      case "Profile":
        navigate("/profile");
        break;
      case "Logout":
        setUserLoggedIn(false);
        dispatch(resetSuccessSignin());
        navigate("/login");
        localStorage.removeItem(storageKey);
        break;
    }
  };
  return (
    <>
      <Box className={"profilemenu"}>
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <AccountCircleIcon sx={{ fontSize: "40px", color: "#26ae61" }} />
        </IconButton>
        <Box className={"profileMenuItems"}>
          {settings?.map((d, i) => {
            return (
              <Typography
                key={i}
                sx={{ fontWeight: 500, cursor: "pointer" }}
                onClick={() => {
                  handleUserAvatar(d);
                }}
              >
                {d}
              </Typography>
            );
          })}
        </Box>
      </Box>
    </>
  );
};

export default Useravatar;
