import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Grid, Typography } from "@mui/material";
import CommonPage from "../../components/commonPage/CommonPage";
import { useLocation, useNavigate } from "react-router-dom";
const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "20px",
    },
    layoutContainer: {
      gap: "20px",
      justifyContent: "space-between",
      padding: "20px 50px",
    },
    sidebar: {
      width: "100%",
      maxWidth: "350px",
      padding: "20px 50px",
      border: "1px solid rgba(210,210,210,0.8)",
      boxShadow: " rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    },
    contentContainer: {
      width: "100%",
      padding: "20px 50px",
    },
    linkStyle: {
      padding: "10px 20px",

      transition: "0.3s",

      "&:hover": {
        transform: "scale(1.05)",
        backgroundColor: "#26ae61",
        borderRadius: "20px",
        color: "white",
        cursor: "pointer",
      },
    },
    activeLink: {
      backgroundColor: "#26ae61",
      borderRadius: "20px",
      color: "white",
    },
  };
});

const Profille = ({ activePage }) => {
  const {
    container,
    layoutContainer,
    sidebar,
    contentContainer,
    linkStyle,
    activeLink,
  } = useStyle();
  let location = useLocation();
  let navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
  }, []);
  const [profilelinks, setprofilelinks] = useState([
    {
      title: "Profile",
      isActive: true,
      path: "/profile",
    },
    {
      title: "Personal Information",
      isActive: false,
      path: "/profile/personalinfo",
    },
    {
      title: "Educations",
      isActive: false,
      path: "/profile/education",
    },
    {
      title: "Skills",
      isActive: false,
      path: "/profile/skills",
    },
    {
      title: "Experience",
      isActive: false,
      path: "/profile/experience",
    },
    {
      title: "Logout",
      isActive: false,
      path: "/profile/logout",
    },
  ]);



  return (
    <Box className={container}>
      <CommonPage value={"Profile"} />
      <Grid container spacing={4} className={layoutContainer}>
        <Grid item xs={12} md={4} className={sidebar}>
          {profilelinks?.map((d, i) => {
            return (
              <Box
                key={i}
                className={`${linkStyle} ${d?.isActive ? activeLink : ""}`}
              >
                <Typography variant={"h5"}>{d?.title}</Typography>
              </Box>
            );
          })}
        </Grid>
        <Grid item xs={12} md={7.5} className={contentContainer}>
          {activePage}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profille;
