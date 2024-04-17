/* eslint-disable no-unused-vars */
import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import HowToCards from "./Cards/HowToCards";

const useStyle = makeStyles(() => {
  return {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px",
      marginTop: "1rem",
    },
    subContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      gap: "30px",
      padding: "20px",
    },
    Typo: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px",
      flexDirection: "column",
      textAlign: "center",
    },
    cardContainer: {
      width: "100%",
      display: "flex",
      alignItems: "start",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
      gap: "10px",
    },
  };
});

const HowToGetStarted = () => {
  const { container, subContainer, Typo, cardContainer } = useStyle();
  const [data, setdata] = useState([
    {
      icon: "https://care-job.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-1.31cb4efd.png&w=96&q=75",
      title: "Need Any Jobs?",
      desc: "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
    },
    {
      icon: "https://care-job.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-2.04177d61.png&w=96&q=75",
      title: "Post Your Jobs",
      desc: "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
    },
    {
      icon: "https://care-job.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ficon-3.1e2b83bb.png&w=96&q=75",
      title: "Job Market Data",
      desc: "But must expla to you how all this mistaken idea of denouncing pleure and praising pain was born",
    },
  ]);
  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Box className={Typo}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            How To Get Started
          </Typography>
          <Typography sx={{ width: "100%", maxWidth: "800px" }}>
            Set up a comprehensive profile highlighting your skills, experience,
            and aspirations. Make a strong first impression on potential
            employers.
          </Typography>
        </Box>
        <Box className={cardContainer}>
          {data?.map((d, i) => {
            return <HowToCards key={i} d={d} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default HowToGetStarted;
