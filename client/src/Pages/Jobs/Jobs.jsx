import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styles from "../../components/SignUp/SignUpStyle";
import TextImg from '../../assets/hometextBG.png'
import { Button, Input, Option, Select } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LocationOn from "@mui/icons-material/LocationOn";
import jobsStyle from "./JobsStyle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { RiCalendar2Line } from "react-icons/ri";
import DS from '../../assets/jobsIMGDataScience.jpg'
import { VscLocation } from "react-icons/vsc";

const Jobs = () => {
    return (
        <>

            <Box sx={styles.SingUp} className="sinupSingin">
                <Container>
                    <Grid container>
                        <Box>
                            <span className='circle'></span>
                            <span className='circle circle-yellow'></span>
                            <span className='shape-plus'>+</span>
                        </Box>
                        <Box sx={{
                            position: "absolute",
                            left: "16%",
                            top: "30%",
                            display: { md: "block", xs: "none" }
                        }}>
                            <Box component="img" maxWidth="100%" src={TextImg} />
                        </Box>
                        <Box>
                            <Box sx={styles.containerBox}>
                                <Typography
                                    variant="h1"
                                    sx={styles.register}
                                >
                                    Jobs
                                </Typography>
                                <Box mt={1} sx={styles.signinsingup}>
                                    <Link to='/' style={styles.singupsigninhome}>Home</Link>
                                    <ArrowForwardIosIcon sx={styles.loginsinup} />
                                    <Typography sx={styles.loginsinup}>Jobs</Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Grid>
                </Container>
            </Box>
            <Box mt={6}>
                <Container>
                    <Box sx={{
                        display: { md: "flex", xs: "wrap" },
                        alignItems: "center",
                        gap: 3,
                    }}>
                        <Input fullWidth
                            placeholder="Your location"
                            endDecorator={<LocationOn sx={{ color: "#fe9703", fontSize: "18px" }} />}
                            sx={{
                                padding: "0.7rem 1rem",
                                margin: "0.7rem 0"

                            }}
                        />
                        <Select autoFocus
                            placeholder="Select a Job..."
                            indicator={<KeyboardArrowDown />}
                            sx={jobsStyle.searchSelect}
                        >
                            <Option value="developer">Web Developer</Option>
                            <Option value="graphics">Graphic Designer</Option>
                            <Option value="seo">SEO Expert</Option>
                        </Select>
                        <Button fullWidth sx={{ padding: "0.7rem 1rem", bgcolor: "#fe9703" }} endDecorator={<ArrowForwardIcon />}>
                            Find Jobs
                        </Button>
                    </Box>
                    <Grid container mt={6} spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Box sx={{ padding: "25px", border: "1px solid #ebebeb", background: "#FFF" }}>
                                <Box sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}>
                                    <Typography sx={jobsStyle.jobtime}>
                                        PART TIME
                                    </Typography>
                                    <Box sx={jobsStyle.jobandcalendar}>
                                        <RiCalendar2Line style={{ fontSize: "16px", color: "#26ae61" }} /> <Typography sx={jobsStyle.jobpostedDate}>
                                            2 MONTHS AGO
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box mt={5}>
                                    <Box>
                                        <img src={DS} alt="job picutre" width={80} height={80} style={{ borderRadius: "50%" }} />
                                    </Box>
                                    <Box>
                                        <Typography variant="h4" sx={{
                                            fontSize: "18px",
                                            fontWeight: 700,
                                        }}>
                                            UI/UX Designer
                                        </Typography>
                                        <a href="http://google.com" style={{
                                            textDecoration: "none",
                                            color: "#26ae61",
                                            margin: "2px 0",
                                            textTransform: "capitalize",
                                            fontSize: "14px"
                                        }}>Google</a>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "center"
                                        }}>
                                            <VscLocation /> <Typography sx={{
                                                color: "#667488",
                                                fontSize: "12px"
                                            }}>Florida</Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>this is usman</Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Jobs