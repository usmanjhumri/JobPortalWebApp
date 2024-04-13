import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import bellIcon from "../../../Assets/icons/bell.svg";
import logo from "../../../Assets/logo_round.png";
import PropTypes from "prop-types";
import { useScrollTrigger } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import theme from "../../../theme";
// import SearchIcon from "@mui/icons-material/Search";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
const useStyles = makeStyles(() => {
  return {
    appbar_main: {
      padding: "0px 30px",
      display: "flex",
      justifyContent: "space-between",
    },
    topbar_title: {
      height: "100%",
      fontWeight: 700,
      color: theme.palette.secondary.main,
      textDecoration: "none",
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    topbar_hamburger: {
      display: "none !important",
      [theme.breakpoints.down("sm")]: {
        display: "block !important",
      },
    },
    topbar_username: {
      color: theme.palette.secondary.main,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    searchBar: {
      backgroundColor: theme.palette.background.main,
      borderRadius: "5px",
      width: "100% !important",
      "&::placeholder": {
        color: theme.palette.grey.G2,
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
const settings = [
  {
    name: "Profile",
    icon: <ManageAccountsIcon />,
    path: "/setting/profile",
  },
  { name: "Logout", icon: <ExitToAppIcon />, path: "/logout" },
];

const TopBar = ({ isSettings, setOpen, setOnHover }) => {
  const { appbar_main, topbar_hamburger, topbar_username } = useStyles();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [profileData] = useState(null);
  // const {profileData} =useContext(ProfileContext)

  const [avatarImage] = useState("");
  // useEffect(()=>{
  // if(profileData){
  //   setavatarImage(profileData?.profile_image?profileData?.profile_image:"")
  // }
  // },[profileData])
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  // const handleCloseUserMenu = (setting) => {
  //   if (setting.path === "/logout") {
  //     // cookies.remove("user");
  //     // cookies.remove("access_token");
  //     dispatch(logout())
  //     return  navigate("/");
  //   }
  //   navigate(setting.path);
  //   setAnchorElUser(null);
  // };

  return (
    <ScrollHandler threshold={0}>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: (theme) => theme.palette.background.contrastText,
          // backgroundColor: "#c8d8e4 !important" ,
          // boxShadow: "",
          // borderRadius: "20px",
          // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
        }}
        // className={App_Bar}
      >
        <Toolbar disableGutters className={appbar_main}>
          {isSettings ? (
            <img src={logo} alt="" height="40px !important" />
          ) : (
            <>
              <MenuIcon
                onClick={() => {
                  setOpen(true);
                  setOnHover(true);
                }}
                className={topbar_hamburger}
                sx={{ color: (theme) => theme.palette.secondary.main }}
              />
              <Typography
                variant="h5"
                sx={{ fontWeight: "bold", color: "rgb(40,40,04)" }}
              >
                Automated Job Portal
              </Typography>
              <Box sx={{ width: "30%" }}>
                {/*   <TextField
                  size="small"
                  fullWidth
                  className={searchBar}
                  id="outlined-basic"
                  placeholder="Search"
                  variant="standard"
                  // variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon
                          sx={{ color: (theme) => theme.palette.grey.G2 }}
                        />
                      </InputAdornment>
                    ),
                  }}
                  InputLabelProps={{
                    style: {
                      border: "none !important",
                      backgroundColor: (theme) => theme.palette.background.main,
                      color: (theme) => theme.palette.secondary.main,
                      fontWeight: "500",
                    },
                  }}
                />*/}
              </Box>
            </>
          )}
          <Box sx={{ display: "flex", alignItems: "center", gap: "30px" }}>
            {/* <Box
              sx={{
                backgroundColor: (theme) => theme.palette.greenShades.g98,
                borderRadius: (theme) => theme.borderRadius.All,
                padding: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <img src={bellIcon} alt="" />
            </Box> */}
            <Box>
              <Tooltip title="Open settings">
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // border: (theme) =>
                    //   `1px solid ${theme.palette.greenShades.g92}`,
                    alignItems: "center",
                    gap: "5px",
                    padding: "5px",
                    borderRadius: (theme) => theme.borderRadius.All,
                    cursor: "pointer",
                  }}
                  onClick={handleOpenUserMenu}
                >
                  <IconButton
                    sx={{
                      p: 0,
                    }}
                  >
                    <Avatar
                      alt={profileData?.username?.slice(0, 2).toUpperCase()}
                      src={avatarImage}
                      sx={{
                        p: 0,
                        backgroundColor: (theme) => theme.palette.primary.main,
                      }}
                    />
                  </IconButton>
                  <Typography
                    className={topbar_username}
                    sx={{
                      color: (theme) => theme.palette.secondary.main,
                      [(theme) => theme.breakpoints.down("sm")]: {
                        display: "none",
                      },
                    }}
                  >
                    {profileData?.username}
                  </Typography>
                  <KeyboardArrowDownIcon
                    sx={{ color: (theme) => theme.palette.secondary.main }}
                  />
                </Box>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={false}
                // open={Boolean(anchorElUser)}
                // onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem
                    key={setting?.name}
                    // onClick={() => handleCloseUserMenu(setting)}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      gap: "10px",
                      padding: "10px",
                      cursor: "pointer",
                      width: "inherit",
                      "&:hover": {
                        color: (theme) => theme.palette.primary.main,
                      },
                    }}
                  >
                    {setting?.icon}
                    <Typography textAlign="center">{setting?.name}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </ScrollHandler>
  );
};
export default TopBar;

TopBar.propTypes = {
  isSettings: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  setOnHover: PropTypes.func.isRequired,
};
