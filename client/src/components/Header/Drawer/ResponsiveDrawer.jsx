/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import {
    Box,
    Button,
    Container,
    Drawer,
    FormControl,
    InputAdornment,
    List,
    OutlinedInput,
    Typography,
} from "@mui/material";
import { LuSearch } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import Logo from "../../../assets/Logo6.png";
import DrawerStyle from "./DrawerStyle";

const ResponsiveDrawer = ({ mobileOpen, setMobileOpen }) => {



    const handleCloseDrawer = () => {
        setMobileOpen(false);
    };

    const handleSearchBtn = () => {
        console.log("working");
        handleCloseDrawer();
    };

    return (
        <>
            <Drawer
                open={mobileOpen}
                onClose={() => {
                    setMobileOpen(!mobileOpen);
                }}
            >
                <Box sx={{ marginTop: "1rem" }}>
                    <List key={1}>
                        <Box sx={{
                            display: "flex",
                            alignItems: "center"
                        }}>
                            <Link
                                to="/"
                                style={{ position: "absolute", bottom: "54%" }}
                                onClick={() => handleCloseDrawer()}
                            >
                                <Box mt={2} component="img" sx={{ width: "50%" }} src={Logo} />
                            </Link>

                            <IoClose
                                onClick={() => setMobileOpen(!mobileOpen)}
                                style={DrawerStyle.closeIconStyle}
                            />
                        </Box>
                        <Box sx={{ marginTop: "5rem" }}>
                            <FormControl sx={{ padding: "7px 4px" }}>
                                <OutlinedInput
                                    onChange={(e) => setSearchProduct(e.target.value)}
                                    size="small"
                                    sx={{ padding: "8px 5px !important" }}
                                    placeholder="Search..."
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button
                                                sx={DrawerStyle.iconBtnStyle}
                                                onClick={handleSearchBtn}
                                            >
                                                <LuSearch style={{ color: "#FFFFFF" }} />
                                            </Button>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        </Box>

                    </List>
                </Box>

                <Container>
                    <Box sx={DrawerStyle.drawerItem}>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/"}
                                style={{ textDecoration: "none", color: "black" }}>
                                Home
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/savedjobs"}
                                style={{ textDecoration: "none", color: "black" }}>
                                Saved Jobs
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/jobs"}
                                style={{ textDecoration: "none", color: "black" }}>
                                Jobs
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/about"}
                                style={{ textDecoration: "none", color: "black" }}>
                                About
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}>
                            <NavLink to={"/contact-us"}
                                style={{ textDecoration: "none", color: "black" }}>
                                ContactUs
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/login"}
                                style={{ textDecoration: "none", color: "black" }}>
                                Login
                            </NavLink>
                        </Typography>
                        <Typography sx={{ margin: "1rem 0px" }}
                            onClick={() => handleCloseDrawer()}
                        >
                            <NavLink to={"/signup"}
                                style={{ textDecoration: "none", color: "black" }}>
                                SignUp
                            </NavLink>
                        </Typography>
                    </Box>
                </Container>

            </Drawer>
        </>
    );
};

export default ResponsiveDrawer;
