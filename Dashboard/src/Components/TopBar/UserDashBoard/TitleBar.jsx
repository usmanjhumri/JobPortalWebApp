import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box, Button, useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../../theme";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles(() => {
  return {
    appbar_main: {
      padding: "0px !important",
      display: "flex",
      justifyContent: "space-between",
    },
    topbar_title: {
      height: "100%",
      color: theme.palette.secondary.main,
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        // display: "none",
      },
    },

    topbar_username: {
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
  };
});
const ScrollHandler = (props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: props.window ? window() : undefined,
  });

  return React.cloneElement(props.children, {
    style: {
      backgroundColor: trigger ? "white" : "transparent",
    },
  });
};

const TitleBar = ({ headerTitle, buttons }) => {
  const { appbar_main, topbar_title } = useStyles();

  console.log(buttons);
  const navigate = useNavigate();
  const handleClick = (obj) => {
    console.log(obj);
    navigate(obj?.Path);
  };
  return (
    <ScrollHandler threshold={0}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: (theme) => theme.palette.background.main,
          borderRadius: "5px",
          boxShadow: "none !important",
        }}
      >
        <Toolbar className={appbar_main}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              padding: "0px 20px",
            }}
          >
            <Typography variant="h5" noWrap href="/" className={topbar_title}>
              {headerTitle}
            </Typography>

            <Box sx={{ display: "flex", gap: "20px" }}>
              {buttons &&
                buttons?.map((button, i) => {
                  return (
                    <Box key={i}>
                      <Button
                        variant="contained"
                        onClick={(e) => {
                          e.stopPropagation(), handleClick(button);
                        }}
                      >
                        {button?.content}
                      </Button>
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ScrollHandler>
  );
};
export default TitleBar;

TitleBar.propTypes = {
  headerTitle: PropTypes.string.isRequired,
  buttons: PropTypes.any,
};
