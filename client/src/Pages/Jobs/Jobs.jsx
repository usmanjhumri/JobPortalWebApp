import { Box, Container, Grid, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { Button, Input, Option, Select } from "@mui/joy";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import LocationOn from "@mui/icons-material/LocationOn";
import jobsStyle from "./JobsStyle";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { RiCalendar2Line } from "react-icons/ri";
import { VscLocation } from "react-icons/vsc";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import JobsArray from "./JobsArray";
import CommonPage from "../../components/commonPage/CommonPage";

const Jobs = () => {
    return (
        <>

            <CommonPage value="Jobs" />
            <Box mt={6}>
                <Container>
                    <Box sx={jobsStyle.jobSearchmainBox}>
                        <Input fullWidth
                            placeholder="Your location"
                            endDecorator={<LocationOn sx={{ color: "#fe9703", fontSize: "18px" }} />}
                            sx={jobsStyle.jobSearchInput}
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
                        {
                            JobsArray.map((item, ind) => {
                                return (
                                    <>
                                        <Grid key={ind} item xs={12} md={6}>
                                            <Box sx={{ padding: "25px", border: "1px solid #ebebeb", background: "#FFF" }}>
                                                <Box sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}>
                                                    <Typography sx={jobsStyle.jobtime}>
                                                        {item.timing}
                                                    </Typography>
                                                    <Box sx={jobsStyle.jobandcalendar}>
                                                        <RiCalendar2Line style={{ fontSize: "16px", color: "#26ae61" }} />
                                                        <Typography sx={jobsStyle.jobpostedDate}>
                                                            {item.calendar}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={5} sx={jobsStyle.commonStyle}>
                                                    <Box>
                                                        <img src={item.img} alt="job picutre" width={70} height={70} style={{ borderRadius: "50%" }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h4" sx={jobsStyle.jobname}>
                                                            {item.jobName}
                                                        </Typography>
                                                        <a href="http://google.com" style={jobsStyle.companyname}>{item.companyName}</a>
                                                        <Box sx={jobsStyle.companyloaction}>
                                                            <VscLocation style={{ fontSize: "20px", color: "#26ae61" }} />
                                                            <Typography sx={jobsStyle.companycountry}>{item.companyCountry}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box mt={5} sx={jobsStyle.commonStyle}>
                                                    <Typography sx={{ fontSize: "13px" }}>{item.pay}</Typography>
                                                    <Typography sx={jobsStyle.experienceandpay}>
                                                        <IoBriefcaseOutline style={{ color: "#26ae61", fontSize: "16px" }} />
                                                        {item.experience}
                                                    </Typography>
                                                </Box>

                                                <Box mt={5} sx={jobsStyle.lastdateAndJobDetail}>
                                                    <Typography sx={jobsStyle.jobLastDate}>
                                                        <MdHistory style={{ fontSize: "18px", color: "#26ae61" }} />
                                                        {item.jobLastDate}
                                                    </Typography>
                                                    <Typography sx={jobsStyle.jobDetailAndIcon}>
                                                        <Link to="/" style={jobsStyle.jobDetailLink}>
                                                            Job Details
                                                        </Link>
                                                        <BsArrowRightShort style={{ fontSize: "20px", color: "#26ae61" }} />
                                                    </Typography>

                                                </Box>
                                            </Box>
                                        </Grid>
                                    </>
                                )
                            })
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

export default Jobs