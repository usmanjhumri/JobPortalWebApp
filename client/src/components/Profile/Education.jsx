/* eslint-disable react/prop-types */
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
import { useEffect, useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ScoreIcon from "@mui/icons-material/Score";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import GradeIcon from "@mui/icons-material/Grade";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileDetails,
  SetEducationDetails,
} from "../../RTK/Slice/ProfileSlice";
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
  "Degree",
  "Institude",
  "Obtained Marks",
  "Total Marks",
  "Grade",
  "Passing Year",
  "",
];
const Education = ({ handleNext, index, handleBack }) => {
  const {
    MainContainer,
    nextButtonContainer,
    nextButtonStyle,
    sectionDevider,
    backbuttonStyle,
  } = useStyle();
  const [values, setvalues] = useState([]);
  const [formvalues, setformvalues] = useState({
    degree: "",
    institude: "",
    ontained: "",
    total: "",
    grade: "",
    passingdate: "",
  });
  const dispatch = useDispatch();
  const { EducationDetails } = useSelector(GetProfileDetails);
  useEffect(() => {
    if (EducationDetails) {
      setvalues(EducationDetails);
    }
  }, [EducationDetails]);
  const handleChange = (val) => {
    setformvalues({ ...formvalues, [val.target.name]: val.target.value });
  };
  const handleAddEducation = () => {
    setvalues([...values, formvalues]);
    setformvalues({
      degree: "",
      institude: "",
      ontained: "",
      total: "",
      grade: "",
      passingdate: "",
    });
  };

  const removeValue = (ind) => {
    const arr = JSON.parse(JSON.stringify(values));
    arr.splice(ind, 1);
    setvalues(arr);
    dispatch(SetEducationDetails(arr));
  };
  const handleNextButton = (val) => {
    dispatch(SetEducationDetails(values));
    if (val === "next") {
      handleNext();
    } else {
      handleBack();
    }
  };
  return (
    <Grid container className={MainContainer} spacing={3}>
      <Box className={sectionDevider}>
        <Typography variant="h6">Education Details</Typography>
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
        <Typography variant="h6">Add Education</Typography>
      </Box>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Degree:</Typography>
          <TextField
            size="small"
            type="text"
            name="degree"
            value={formvalues?.degree}
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
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Institude:</Typography>
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
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Ontained Marks:</Typography>
          <TextField
            size="small"
            type="number"
            name="ontained"
            value={formvalues?.ontained}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <ScoreIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Total Marks:</Typography>
          <TextField
            size="small"
            type="number"
            name="total"
            value={formvalues?.total}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <BookmarksIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Grade:</Typography>
          <TextField
            size="small"
            name="grade"
            value={formvalues?.grade}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <GradeIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Passing Date:</Typography>
          <TextField
            size="small"
            name="passingdate"
            value={formvalues?.passingdate}
            type={"date"}
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
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
          Add Education
        </Button>
        <Button
          variant=""
          className={nextButtonStyle}
          onClick={() => handleNextButton("next")}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
};

export default Education;
