import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import PropTypes from "prop-types";
import SideBar from "../../Components/SideBar/SideBar";
import TopBar from "../../Components/TopBar/UserDashBoard/TopBar";
import TitleBar from "../../Components/TopBar/UserDashBoard/TitleBar";
// import { Divider } from "@mui/material";
// import TopBar from "../../Components/TopBar/UserDashBoard/TopBar";
// import { Divider } from "@mui/material";
// import TitleBar from "../../Components/TopBar/UserDashBoard/TitleBar";


const UseContainer = ({ activePage, headerTitle,buttons,disableTitleBar,transparentBackground }) => {
    console.log(buttons);
    const [open, setOpen] = useState(false);
    const [OnHover, setOnHover] = useState(false);
    const [selectedTab, setselectedTab] = useState("");
    const [selectedSecondTab, setselectedSecondTab] = useState("");
    const [openDialog, setopenDialog] = useState(false);


    return (
        <Box
            sx={{
                display: "flex",
                backgroundColor: (theme) => theme.palette.background.main,
            }}
        >
            <CssBaseline />
            {/* Side Bar Component  */}
            <SideBar
                open={open}
                setOpen={setOpen}
                setOnHover={setOnHover}
                OnHover={OnHover}
                selectedTab={selectedTab}
                setselectedTab={setselectedTab}
                selectedSecondTab={selectedSecondTab}
                setselectedSecondTab={setselectedSecondTab}
                isAdmin={false}
            />
            {/* Top Bar Component  */}

            <Box sx={{ flex: 1 }}>
                <TopBar
                    open={open}
                    setOpen={setOpen}
                    setOnHover={setOnHover}
                    openDialog={openDialog}
                    setopenDialog={setopenDialog}
                    isSettings={false}
                    headerTitle={headerTitle}
                />
                {/* <Divider /> */}
                {
                    !disableTitleBar?  <Box
                    position="sticky"
                    sx={{
                        backgroundColor: (theme) => theme.palette.background.main,
                        padding: "10px",
                    }}
                >
                    <TitleBar headerTitle={headerTitle} buttons={buttons} />
                </Box>:null
                }
              

                <Box
                    sx={{
                        backgroundColor: (theme) => theme.palette.background.main,
                        padding: "0px 10px",
                    }}
                >
                    <Box
                        component="main"
                        sx={{
                            flexGrow: 1,
                            minHeight: disableTitleBar?"calc(100vh - 77px)":"calc(100vh - 165px)",
                            maxHeight: "fit-content ",
                            backgroundColor:(theme)=>transparentBackground? theme.palette.background.main:"white !important",
                            borderRadius: "5px",
                            padding:'10px',
                           
                        }}
                        onMouseOver={() => {
                            if (OnHover === true) {
                                setOpen(false);
                                setOnHover(false);
                            }
                        }}
                    >
                        <Box >{activePage}</Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
};
export default UseContainer;

UseContainer.propTypes = {
    activePage: PropTypes.any.isRequired,
    headerTitle: PropTypes.string.isRequired,
    buttons: PropTypes.any,
    disableTitleBar: PropTypes.any,
    transparentBackground: PropTypes.bool,
    
};
