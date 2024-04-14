import { makeStyles } from "@mui/styles";
import { useState } from "react";

const Education = () => {
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
  console.log(useStyle);
  return (
    <div>Education</div>
  )
}

export default Education