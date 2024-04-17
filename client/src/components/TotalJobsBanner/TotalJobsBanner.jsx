/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { useAsyncError } from "react-router-dom";
import banner from "../../assets/banner.jpg";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import CountUp from "react-countup";
const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "3rem",
      padding: "20px",

      backgroundImage: `url(${banner})`,
      color: "while",
    },
    subContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-evenly",
      alignItems: "center",
      gap: "20px",
      flexWrap: "wrap",

      padding: "20px",
    },
    card: {
      display: "flex",
      gap: "10px",
      alignItems: "start",
      color: "white !important",
    },
  };
});

const TotalJobsBanner = () => {
  const { container, subContainer, card } = useStyle();
  const [data, setdata] = useState([
    {
      icon: (
        <CardGiftcardIcon
          sx={{ color: "#26ae61 !important", fontSize: "50px" }}
        />
      ),
      value: 3500,
      title: "Available Jobs",
    },
    {
      icon: (
        <AccountCircleIcon
          sx={{ color: "#26ae61 !important", fontSize: "50px" }}
        />
      ),
      value: 8000,
      title: "Employees",
    },
    {
      icon: (
        <ReceiptLongIcon
          sx={{ color: "#26ae61 !important", fontSize: "50px" }}
        />
      ),
      value: 1500,
      title: "CV/Resume",
    },
    {
      icon: (
        <LocalCafeIcon sx={{ color: "#26ae61 !important", fontSize: "50px" }} />
      ),
      value: 800,
      title: "Campaigns",
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        {data?.map((d, i) => {
          return (
            <Box key={i} className={card}>
              <Box>{d?.icon}</Box>
              <Box>
                <Box sx={{ marginBottom: "10px 0px" }}>
                  <Typography variant="h3">
                    <CountUp end={d?.value} duration={1} />
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="">{d?.title}</Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default TotalJobsBanner;
