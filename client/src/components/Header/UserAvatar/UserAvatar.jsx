/* eslint-disable no-case-declarations */
/* eslint-disable react/prop-types */
import {
    Avatar,
    Box,
    IconButton,
    Menu,
    MenuItem,
    Typography,
} from "@mui/material";
import { CiUser } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { storageKey } from "../../../Const/Const";
import { resetSuccessSignin } from "../../../RTK/Slice/SignInSlice";
const settings = ["Profile", "Logout",];
const Useravatar = ({
    setUserLoggedIn,
    handleOpenUserMenu,
    handleCloseUserMenu,
    anchorElUser,
}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleUserAvatar = async (avatarmenu) => {
        switch (avatarmenu) {
            case "Profile":
                navigate("/profile");
                break;
            case "Logout":
                setUserLoggedIn(false);
                dispatch(resetSuccessSignin());
                navigate("/login");
                localStorage.removeItem(storageKey);
                break;
        }
    };
    return (
        <>

            <Box>
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    {/* <Box component="img" src={logoImage} width="20%" /> */}
                    <Avatar
                        // src={`${baseUrl}/${userImage}`}
                        sx={{
                            background: "#2697fa",
                            // background: logoImage ? `url${logoImage}` : "#2697fa",

                            width: "35px",
                            height: "35px",
                        }}
                    >
                        <CiUser />
                    </Avatar>
                </IconButton>

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
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    {settings.map((setting) => (
                        <MenuItem
                            key={setting}
                            onClick={() => {
                                handleUserAvatar(setting);
                                handleCloseUserMenu();
                            }}
                        >
                            <Typography textAlign="center">{setting}</Typography>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>

        </>
    );
};

export default Useravatar;
