import { Container, Grid, Typography, Box } from "@mui/material";
import HomeStyle from "./HomeStyle";
import Popular from "../PopularCategory/PopularCategory";
import NewsandBlogs from "../Latest News & Blog/News&Blog";

import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import LocationOn from "@mui/icons-material/LocationOn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SIDEIMG from "../../assets/homeSide.png";
import TextImg from "../../assets/hometextBG.png";
import "./Home.css";
import CommonJobs from "../../components/commonJobs/CommonJobs";
import Text from "../../components/commonJobs/Text";
import TotalJobsBanner from "../../components/TotalJobsBanner/TotalJobsBanner";
import HowToGetStarted from "../../components/HowToGetStarted/HowToGetStarted";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GetCategory, GetJobs } from "../../RTK/API/api";
import { GetJobDetails } from "../../RTK/Slice/JobSlice";
import Loader from "../../components/Loader/Loader";
import { GetCategoryStatus } from "../../RTK/Slice/CategoriesSlice";
// import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import { useNavigate } from "react-router-dom";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import { MdKeyboardVoice } from "react-icons/md";
import { IoStopCircleOutline } from "react-icons/io5";
const Home = () => {
  const dispatch = useDispatch();
  const { JobStatus, jobs } = useSelector(GetJobDetails);
  const { categoryStatus, Categories } = useSelector(GetCategoryStatus);
  const [values, setvalues] = useState({ title: "", location: "" });
  const [isListening, setIsListening] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!jobs || !Categories) {
      dispatch(GetJobs());
      dispatch(GetCategory());
    }
  }, []);
  const handleChange = (e) => {
    setvalues({ ...values, [e.target.name]: e.target.value });
  };
  const handleNavigate = () => {
    const searchVal = { state: { values: values, path: "search" } }
    if (searchVal) {
      navigate("/jobs");
    }
  };
  const { transcript, browserSupportsSpeechRecognition, resetTranscript } = useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support speech recognition.</span>;
  }

  const StartListening = () => {
    SpeechRecognition.startListening();
    console.log('first')
    resetTranscript()
    setIsListening(true)
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setIsListening(false);
  };

  const combineVal = values?.title || transcript

  return (
    <>
      {JobStatus == "pending" || categoryStatus == "pending" ? (
        <Loader />
      ) : (
        <>
          <Box sx={HomeStyle.mainBox}>
            <Container>
              <Grid container>
                <Box>
                  <span className="circle"></span>
                  <span className="circle circle-yellow"></span>
                  <span className="shape-plus">+</span>
                </Box>
                <Grid item xs={12} md={7} sx={{ margin: "auto" }}>
                  <Box sx={HomeStyle.bgImg}>
                    <Box component="img" maxWidth="100%" src={TextImg} />
                  </Box>
                  <Box sx={{ marginTop: { md: "3rem", xs: "12rem" } }}>
                    <Typography sx={HomeStyle.dreamJobs}>
                      <span style={{ color: "#fe9703" }}>2560</span> Thousands
                      Dream Jobs Available Now
                    </Typography>
                    <Box mt={4} sx={HomeStyle.searchBox1}>
                      <Input
                        placeholder="Job location"
                        value={values?.location}
                        name="location"
                        onChange={handleChange}
                        endDecorator={
                          <LocationOn
                            sx={{ color: "#fe9703", fontSize: "18px" }}
                          />
                        }
                        sx={HomeStyle.searchInput}
                      />
                      <Input
                        placeholder="Job Title"
                        // value={values?.title}
                        value={combineVal}
                        name="title"
                        onChange={handleChange}

                        endDecorator={
                          // <MdKeyboardVoice
                          //   onClick={StartListening}
                          //   style={{ color: '#fe9703', fontSize: '18px', cursor: "pointer" }}
                          // />

                          isListening ? (
                            <IoStopCircleOutline
                              onClick={StartListening}
                              style={{ color: '#fe9703', fontSize: '18px', cursor: "pointer" }}
                            />
                          ) : (

                            <MdKeyboardVoice
                              onClick={stopListening}
                              style={{ color: '#fe9703', fontSize: '18px', cursor: "pointer" }}
                            />
                          )

                        }
                        sx={HomeStyle.searchInput}
                      />

                      <Button
                        sx={HomeStyle.searchBtn}
                        endDecorator={<ArrowForwardIcon />}
                        onClick={handleNavigate}
                      >
                        Find Jobs
                      </Button>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={5} sx={{ margin: "auto" }}>
                  {" "}
                  <Box mt={20}>
                    <Box
                      component="img"
                      src={SIDEIMG}
                      sx={{
                        maxWidth: "100%",
                        display: { md: "block", xs: "none" },
                      }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Popular />
          <Text />
          <CommonJobs />
          <TotalJobsBanner />
          <HowToGetStarted />
          <NewsandBlogs />
        </>
      )}
    </>
  );
};

export default Home;
