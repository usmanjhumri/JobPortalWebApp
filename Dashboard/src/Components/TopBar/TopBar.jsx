import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import { useLocation, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../../Assets/logo.png";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import styles from "./TopBar.module.css";
import PropTypes from "prop-types";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
} from "@mui/material";

const drawerWidth = 240;
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const TopBar = ({ open, setOpen, setOnHover, setopenDialog, openDialog }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleDrawer = () => {
    setOpen(!open);

    if (open === true) {
      setOnHover(false);
    }
  };
  const handleClickOpenDialog = () => {
    setopenDialog(true);
    console.log(openDialog);
  };
  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        {!open && <img src={logo} className={styles.logo_img} />}

        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginLeft: 5,
            marginRight: 5,
            // ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" noWrap component="div">
            Top Bar
          </Typography>
          <List>
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  
                  px: 2.5,
                  justifyContent: "center",
                  color: "white",
                }}
              >
                <ListItemText
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-expanded={openMenu ? "true " : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}
                  primary={<SettingsSuggestIcon />}
                  sx={{ color: "white" }}
                />
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={openMenu}
                  onClose={handleClose}
                >
                  <MenuItem
                    sx={{ paddingLeft: 7, paddingRight: 7 }}
                    onClick={() => {
                      handleClickOpenDialog();
                      handleClose();
                    }}
                  >
                    Logout
                  </MenuItem>
                </Menu>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;

TopBar.propTypes = {
  setOpen: PropTypes.any,
  setOnHover: PropTypes.any,
  setopenDialog: PropTypes.any,
  openDialog: PropTypes.any,
  open: PropTypes.bool,
};
