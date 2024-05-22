import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import PropTypes from "prop-types";
import wave from "../../Assets/wave.png";

const useStyle = makeStyles(() => {
  return {
    cards: {
      width: "100%",
      padding: "10px",
      minHeight: "150px",
      boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      backgroundImage: `url(${wave})`,
      backgroundSize: "100%",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
    },
    cardsheading: {
      textTransform: "uppercase",
      fontWeight: "600",
    },
  };
});

const Cards = ({ values, title }) => {
  const { cards, cardsheading } = useStyle();

  return (
    <Box className={`${cards}`} sx={{ maxWidth: { md: "300px", xs: "100%" } }}>
      <Typography className={cardsheading} color={"primary"}>
        {title}
      </Typography>
      <Typography variant="h3" sx={{ fontWeight: "bolder" }}>
        {" "}
        {values}
      </Typography>
    </Box>
  );
};

export default Cards;
Cards.propTypes = {
  values: PropTypes.any,
  title: PropTypes.any,
};
