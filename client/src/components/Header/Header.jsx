import { Box, Container, Hidden, IconButton, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo5.png";
import HeaderStyle from "./HeaderStyle";
import MenuIcon from "@mui/icons-material/Menu";
import { useEffect, useState } from "react";
import ResponsiveDrawer from "./Drawer/ResponsiveDrawer";
import "./Header.css";
import { useSelector } from "react-redux";
import { storageKey } from "../../Const/Const";
import { useNavigate } from "react-router-dom";
import Useravatar from "./UserAvatar/UserAvatar";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeOffest, setActiveOffset] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const isLoggedIn = useSelector((state) => state.signInReducer?.isLoggedIn);
  console.log(isLoggedIn);

  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      setUserLoggedIn(true);
    } else {
      setUserLoggedIn(false);
    }
  }, [isLoggedIn, userLoggedIn]);

  const [anchorElUser, setAnchorElUser] = useState(false);

  const handleOpenUserMenu = () => {
    setAnchorElUser(true);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollYOffset = window.scrollY > 100;
      setActiveOffset(scrollYOffset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <>
      <Box
        className={activeOffest ? "navbar navbar-fixed" : "navbar"}
        sx={HeaderStyle.headerNavBox}
      >
        <Container>
          <Box sx={HeaderStyle.mainBox}>
            <Box sx={{ flexGrow: 1 }}>
              <NavLink to={"/"}>
                <img src={Logo} alt="" style={{ width: "20%" }} />
              </NavLink>
            </Box>
            <Hidden mdDown>
              <Box sx={HeaderStyle.HeaderItem}>
                <Typography>
                  <NavLink
                    to={"/"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#000" : "#FFF",
                    }}
                  >
                    Home
                  </NavLink>
                </Typography>
                <Typography>
                  <NavLink
                    to={"/savedjobs"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#000" : "#FFF",
                    }}
                  >
                    Saved Jobs
                  </NavLink>
                </Typography>
                <Typography>
                  <NavLink
                    to={"/jobs"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#000" : "#FFF",
                    }}
                  >
                    Jobs
                  </NavLink>
                </Typography>
                <Typography>
                  <NavLink
                    to={"/about"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#000" : "#FFF",
                    }}
                  >
                    About
                  </NavLink>
                </Typography>
                <Typography>
                  <NavLink
                    to={"/contact-us"}
                    style={{
                      textDecoration: "none",
                      color: activeOffest ? "#000" : "#FFF",
                    }}
                  >
                    ContactUs
                  </NavLink>
                </Typography>

                {userLoggedIn ? (
                  <Box sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                  }}>
                    <Useravatar
                      setUserLoggedIn={setUserLoggedIn}
                      handleCloseUserMenu={handleCloseUserMenu}
                      handleOpenUserMenu={handleOpenUserMenu}
                      anchorElUser={anchorElUser}
                    />
                  </Box>
                ) : (
                  <Typography
                    onClick={() => {
                      navigate("/login");
                    }}
                    sx={{
                      padding: "10px 40px",
                      borderRadius: "20px",
                      color: "white !important",
                      fontWeight: "bold",
                      background: "#26ae61",
                      transition: "0.3s",
                      cursor: "pointer",
                      "&:hover": {
                        transform: "scale(1.06)",
                      },
                    }}
                  >
                    <Box
                      style={{
                        textDecoration: "none",
                        color: activeOffest ? "#FFF" : "#FFF",
                      }}
                    >
                      Login
                    </Box>
                  </Typography>
                )}
              </Box>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon sx={{ color: activeOffest ? "#000" : "#FFF" }} />
              </IconButton>
            </Hidden>
          </Box>
        </Container>
        <Hidden mdUp>
          <ResponsiveDrawer
            mobileOpen={mobileOpen}
            setMobileOpen={setMobileOpen}
          />
        </Hidden>
      </Box>
    </>
  );
};
export default Header;
