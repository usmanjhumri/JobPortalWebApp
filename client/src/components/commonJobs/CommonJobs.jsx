import { Box, Container, Grid, Typography } from "@mui/material"
import { BsArrowRightShort } from "react-icons/bs"
import { IoBriefcaseOutline } from "react-icons/io5"
import { MdHistory } from "react-icons/md"
import { RiCalendar2Line } from "react-icons/ri"
import { VscLocation } from "react-icons/vsc"
import CommonJobsArray from "./CommonJobsArray"
import { Link } from "react-router-dom"
import CommonJobsStyle from "./styles"

const CommonJobs = () => {
    return (
        <>
            <Box mt={4}>
                <Container>
                    <Grid container spacing={3}>
                        {
                            CommonJobsArray.map((item, ind) => {
                                return (
                                    <>
                                        <Grid key={ind} item xs={12} md={6}>
                                            <Box sx={{ padding: "25px", border: "1px solid #ebebeb", background: "#FFF" }}>
                                                <Box sx={{
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                }}>
                                                    <Typography sx={CommonJobsStyle.jobtime}>
                                                        {item.timing}
                                                    </Typography>
                                                    <Box sx={CommonJobsStyle.jobandcalendar}>
                                                        <RiCalendar2Line style={{ fontSize: "16px", color: "#26ae61" }} />
                                                        <Typography sx={CommonJobsStyle.jobpostedDate}>
                                                            {item.calendar}
                                                        </Typography>
                                                    </Box>
                                                </Box>
                                                <Box mt={5} sx={CommonJobsStyle.commonStyle}>
                                                    <Box>
                                                        <img src={item.img} alt="job picutre" width={70} height={70} style={{ borderRadius: "50%" }} />
                                                    </Box>
                                                    <Box>
                                                        <Typography variant="h4" sx={CommonJobsStyle.jobname}>
                                                            {item.jobName}
                                                        </Typography>
                                                        <a href="http://google.com" style={CommonJobsStyle.companyname}>{item.companyName}</a>
                                                        <Box sx={CommonJobsStyle.companyloaction}>
                                                            <VscLocation style={{ fontSize: "20px", color: "#26ae61" }} />
                                                            <Typography sx={CommonJobsStyle.companycountry}>{item.companyCountry}</Typography>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                                <Box mt={5} sx={CommonJobsStyle.commonStyle}>
                                                    <Typography sx={{ fontSize: "13px" }}>{item.pay}</Typography>
                                                    <Typography sx={CommonJobsStyle.experienceandpay}>
                                                        <IoBriefcaseOutline style={{ color: "#26ae61", fontSize: "16px" }} />
                                                        {item.experience}
                                                    </Typography>
                                                </Box>

                                                <Box mt={5} sx={CommonJobsStyle.lastdateAndJobDetail}>
                                                    <Typography sx={CommonJobsStyle.jobLastDate}>
                                                        <MdHistory style={{ fontSize: "18px", color: "#26ae61" }} />
                                                        {item.jobLastDate}
                                                    </Typography>
                                                    <Typography sx={CommonJobsStyle.jobDetailAndIcon}>
                                                        <Link to="/jobdetail" style={CommonJobsStyle.jobDetailLink}>
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

export default CommonJobs