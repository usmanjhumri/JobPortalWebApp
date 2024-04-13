import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles(() => {
  return {
    contain: {
      width: "100%",
      maxWidth: "380px",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "20px",
      textAlign: "center",
      border: "1px solid rgba(210,210,210,0.9)",
    },
    btn: {
      padding: "10px 20px !important",
      borderRadius: "20px !important",
    },
  };
});

const HowToCards = ({ d }) => {
  const { contain, btn } = useStyle();
  const navigate = useNavigate();
  return (
    <Box className={`${contain} cardcontain`}>
      <img src={d?.icon} alt={d?.icon} />
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {d?.title}
      </Typography>
      <Typography>{d?.desc}</Typography>
      <Button
        className={`${btn} cardbtn`}
        variant="contained"
        onClick={() => navigate("/jobs")}
      >
        Learn More
      </Button>
    </Box>
  );
};

export default HowToCards;
