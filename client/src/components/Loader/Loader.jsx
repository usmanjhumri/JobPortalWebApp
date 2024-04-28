import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ReactLoading from "react-loading";
const useStyle = makeStyles(() => {
  return {
    container: {
      height: "100vh",
      width: "100%",
      backgroundColor: "black",
      position: "absolute",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  };
});

const Loader = () => {
  const { container } = useStyle();
  return (
    <Box className={container}>
      <ReactLoading
        type={"bars"}
        color={"white"}
        height={"40px"}
        width={"50px"}
      />
    </Box>
  );
};

export default Loader;
