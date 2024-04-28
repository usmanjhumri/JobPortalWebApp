import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileDetails,
  SetExperienceDetails,
} from "../../RTK/Slice/ProfileSlice";
import axiosInstance from "../../Const/AxiosInstance";
import ReactLoading from "react-loading";

const useStyle = makeStyles(() => {
  return {
    MainContainer: {
      justifyContent: "space-between",
    },
    nextButtonContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "end",
      margin: "20px 0px",
      gap: "20px",
    },
    nextButtonStyle: {
      padding: "10px 30px !important",
      backgroundColor: "#26ae61 !important",
      color: "white !important",
      opacity: "0.8",
      "&:hover": {
        backgroundColor: "#26ae61 !important",
        opacity: "1",
      },
    },
    backbuttonStyle: {
      padding: "10px 30px !important",
      backgroundColor: "rgb(210,210,210) !important",
      color: "rgb(10,10,10) !important",
      opacity: "0.8",
      "&:hover": {
        backgroundColor: "rgb(180,180,180) !important",
        opacity: "1",
      },
    },
    sectionDevider: {
      width: "100%",
      marginTop: "20px",
    },
  };
});
const tableheads = [
  "Sr#",
  "Job Title",
  "Institude",
  "Starting Year",
  "Ending Year",
  "",
];
const Experience = ({ handleNext, index, handleBack }) => {
  const {
    MainContainer,
    nextButtonContainer,
    nextButtonStyle,
    sectionDevider,
    backbuttonStyle,
  } = useStyle();
  const [values, setvalues] = useState([]);
  const [loading, setloading] = useState(false);
  const [formvalues, setformvalues] = useState({
    job: "",
    institude: "",
    startingyear: "",
    endingyear: "",
  });
  const dispatch = useDispatch();
  const {
    ExperienceDetails,
    SkillDetails,
    EducationDetails,
    personalInformations,
  } = useSelector(GetProfileDetails);
  useEffect(() => {
    if (ExperienceDetails) {
      setvalues(ExperienceDetails);
    }
  }, [ExperienceDetails]);
  const handleChange = (val) => {
    setformvalues({ ...formvalues, [val.target.name]: val.target.value });
  };
  const handleAddEducation = () => {
    console.log(formvalues);
    setvalues([...values, formvalues]);
  };

  const removeValue = (ind) => {
    console.log(ind);
    const arr = JSON.parse(JSON.stringify(values));
    arr.splice(ind, 1);
    console.log(arr);
    setvalues(arr);
    dispatch(SetExperienceDetails(arr));
  };
  const handleNextButton = (val) => {
    dispatch(SetExperienceDetails(values));
    if (val === "next") {
      handleNext();
    } else if (val === "back") {
      handleBack();
    } else {
      handleSave();
    }
  };

  const handleSave = async () => {
    let userid = JSON.parse(sessionStorage.getItem("user"));
    const obj = {
      userID: userid?.userID,
      education: EducationDetails,
      personalInformation: personalInformations,
      skills: SkillDetails,
      experience: values,
    };
    setloading(true);
    let res = await axiosInstance.post("/profile/create", obj);
    console.log(res.data);
    if (res.data.isSuccess) {
      setloading(false);
      dispatch(GetUserProfile());
    }
    setloading(false);
  };

  return (
    <Grid container className={MainContainer} spacing={3}>
      <Box className={sectionDevider}>
        <Typography variant="h6">Experience Details</Typography>
      </Box>
      <Grid item xs={12} md={12}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                {tableheads?.map((d, i) => {
                  return (
                    <TableCell key={i} align={i == 0 ? "left" : "right"}>
                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, fontSize: "16px" }}
                      >
                        {d}
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {values?.map((val, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>{i + 1}</TableCell>
                    {Object.keys(val)?.map((k, ind) => {
                      return k !== "_id" ? (
                        <TableCell key={ind} align={"right"}>
                          {val[k]}
                        </TableCell>
                      ) : null;
                    })}
                    <TableCell align="right">
                      <IconButton onClick={() => removeValue(i)}>
                        <DeleteForeverIcon sx={{ color: "#26ae61" }} />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
      <Box className={sectionDevider}>
        <Typography variant="h6">Add Experience</Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Job Title:</Typography>
          <TextField
            size="small"
            type="text"
            name="job"
            value={formvalues?.job}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <WorkspacePremiumIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Institude/Company:</Typography>
          <TextField
            size="small"
            name="institude"
            value={formvalues?.institude}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ApartmentIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Starting Date:</Typography>
          <TextField
            size="small"
            name="startingyear"
            value={formvalues?.startingyear}
            type={"date"}
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Ending Date:</Typography>
          <TextField
            size="small"
            name="endingyear"
            value={formvalues?.endingyear}
            type={"date"}
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      {loading ? (
        <Box className={nextButtonContainer}>
          <ReactLoading
            type={"bars"}
            color={"#26ab5f"}
            height={"40px"}
            width={"50px"}
          />
        </Box>
      ) : (
        <Box className={nextButtonContainer}>
          <Button
            variant=""
            className={backbuttonStyle}
            disabled={index === 0 ? true : false}
            onClick={() => handleNextButton("back")}
          >
            Back
          </Button>
          <Button
            variant=""
            className={nextButtonStyle}
            onClick={handleAddEducation}
          >
            Add Experience
          </Button>
          <Button
            variant=""
            className={nextButtonStyle}
            onClick={() => handleNextButton("save")}
          >
            Save
          </Button>
        </Box>
      )}
    </Grid>
  );
};

export default Experience;
