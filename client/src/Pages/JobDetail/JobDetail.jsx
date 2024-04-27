import { Box, Container, Grid, Typography } from "@mui/material"
import CommonPage from "../../components/commonPage/CommonPage"
import jobsStyle from "../Jobs/JobsStyle"
import DS from '../../assets/jobsIMGDataScience.jpg'
import { VscLocation } from "react-icons/vsc"
import { Button } from "@mui/joy"
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux"
import Swal from 'sweetalert2'
import { useState } from "react"
const JobDetail = () => {
    const isLoggedIn = useSelector((state) => state.signInReducer?.isLoggedIn)
    console.log(isLoggedIn);
    const message = useSelector((state) => state.signInReducer?.message)
    const [userlogged, setUserLogged] = useState(false)
    console.log(message)

    const navigate = useNavigate()

    const handleApplyJob = () => {
        if (isLoggedIn) {

            navigate('/appilcation-form')

        } else {
            Swal.fire({
                title: "User not loggedin",
                showClass: {
                    popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                    popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
            });
            navigate('/login')
        }
    }
    return (
        <>
            <CommonPage value="Job Detail" />
            <Box>
                <Container sx={{
                    borderTop: "5px solid #fe9703",
                    background: "#FFF",
                    padding: "50px"
                }}>
                    <Box mt={5} sx={{
                        display: { md: "flex", xs: "wrap" },
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}>
                        <Box sx={jobsStyle.commonStyle}>
                            <Box>
                                <img src={DS} alt="job picutre" width={70} height={70} style={{ borderRadius: "50%" }} />
                            </Box>
                            <Box>
                                <Typography variant="h4" sx={jobsStyle.jobname}>
                                    Data Science
                                </Typography>
                                <a href="http://google.com" style={jobsStyle.companyname}>Google</a>
                                <Box sx={jobsStyle.companyloaction}>
                                    <VscLocation style={{ fontSize: "20px", color: "#26ae61" }} />
                                    <Typography sx={jobsStyle.companycountry}>USA</Typography>
                                </Box>
                            </Box>
                        </Box>

                        <Box sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 4
                        }}>
                            <Box sx={jobsStyle.commonStyle}>
                                <Box sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2
                                }}>
                                    <Box sx={jobsStyle.companyloaction}>
                                        <VscLocation style={{ fontSize: "20px", color: "#26ae61" }} />
                                        <Typography sx={jobsStyle.companycountry}>USA</Typography>
                                    </Box>
                                    <Typography sx={{ fontSize: "13px" }}>$ 1.2k - 3k</Typography>
                                </Box>
                            </Box>
                            <Box>
                                <Button onClick={handleApplyJob} sx={{
                                    background: "#26ae61",
                                    color: "#FFF",
                                    fontWeight: 700,
                                    fontSize: "15px",
                                    padding: "17px 35px",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "30px",
                                }} endDecorator={<FaArrowRight style={{ fontSize: "16px", color: "#FFF" }} />}>
                                    Apply Job
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Grid container>

                    </Grid>
                </Container>
            </Box>

        </>
    )
}

export default JobDetail