/* eslint-disable react/prop-types */
import { Box, Container, Grid, Typography } from "@mui/material";
import { BsArrowRightShort } from "react-icons/bs";
import { IoBriefcaseOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { RiCalendar2Line } from "react-icons/ri";
import { VscLocation } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import CommonJobsStyle from "./styles";
// import { GetJobDetails } from "../../RTK/Slice/JobSlice";
import moment from "moment";

const AllJobs = ({ alljobs }) => {
  const navigate = useNavigate();

  const handleNavigate = (JobId) => {
    navigate("/jobdetail", { state: { jobId: JobId } });
  };
  return (
    <>
      <Box mt={4}>
        <Container>
          <Grid container spacing={3}>
            {alljobs?.map((item, ind) => {
              return (
                <>
                  <Grid key={ind} item xs={12} md={6}>
                    <Box
                      sx={{
                        padding: "25px",
                        border: "1px solid #ebebeb",
                        background: "#FFF",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography sx={CommonJobsStyle.jobtime}>
                          {item?.jobtype}
                        </Typography>
                        <Box sx={CommonJobsStyle.jobandcalendar}>
                          <RiCalendar2Line
                            style={{ fontSize: "16px", color: "#26ae61" }}
                          />
                          <Typography sx={CommonJobsStyle.jobpostedDate}>
                            {item?.date}
                          </Typography>
                        </Box>
                      </Box>
                      <Box mt={5} sx={CommonJobsStyle.commonStyle}>
                        <Box
                          sx={{
                            border: "1px solid rgba(180,180,180,0.9)",
                            borderRadius: "100%",
                            padding: "10px",
                            height: "100px",
                            width: "100px",
                          }}
                        >
                          <img
                            src={
                              "https://e7.pngegg.com/pngimages/970/1003/png-clipart-laptop-internet-graphy-find-job-electronics-3d-computer-graphics.png"
                            }
                            alt="job picutre"
                            style={{ width: "100%", height: "100%" }}
                          />
                        </Box>
                        <Box>
                          <Typography variant="h4" sx={CommonJobsStyle.jobname}>
                            {item?.title}
                          </Typography>
                          <Typography sx={CommonJobsStyle.companyname}>
                            {item?.company}
                          </Typography>
                          <Box sx={CommonJobsStyle.companyloaction}>
                            <VscLocation
                              style={{ fontSize: "20px", color: "#26ae61" }}
                            />
                            <Typography sx={CommonJobsStyle.companycountry}>
                              {item.location}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box mt={5} sx={CommonJobsStyle.commonStyle}>
                        <Typography sx={{ fontSize: "13px" }}>
                          ${item?.salaryfrom} - ${item?.salaryto}
                        </Typography>
                        <Typography sx={CommonJobsStyle.experienceandpay}>
                          <IoBriefcaseOutline
                            style={{ color: "#26ae61", fontSize: "16px" }}
                          />
                          {item.experience}
                        </Typography>
                      </Box>

                      <Box mt={5} sx={CommonJobsStyle.lastdateAndJobDetail}>
                        <Typography sx={CommonJobsStyle.jobLastDate}>
                          <MdHistory
                            style={{ fontSize: "18px", color: "#26ae61" }}
                          />{" "}
                          Last Date:
                          {moment(item?.lastdate).format("DD/MM/YYYY")}
                        </Typography>
                        <Box
                          sx={CommonJobsStyle.jobDetailAndIcon}
                          onClick={() => {
                            handleNavigate(item?._id);
                          }}
                        >
                          Job Details
                          <BsArrowRightShort
                            style={{ fontSize: "20px", color: "#26ae61" }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AllJobs;
