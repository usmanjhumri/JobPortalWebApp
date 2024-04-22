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
import React, { useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
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
  console.log(index);
  const [values, setvalues] = useState([]);
  const [formvalues, setformvalues] = useState({
    degree: "",
    institude: "",
    ontained: "",
    total: "",
    grade: "",
    passingdate: "",
  });

  const handleChange = (val) => {
    setformvalues({ ...formvalues, [val.target.name]: val.target.value });
  };
  const handleAddEducation = () => {
    console.log(formvalues);
    setvalues([...values, formvalues]);
  };
  const handleNextButton = () => {
    console.log(values);
    handleNext();
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
                      return (
                        <TableCell key={ind} align={"right"}>
                          {val[k]}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <IconButton>
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
                  <PersonIcon sx={{ color: "#26ae61" }} />
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
                  <PersonIcon sx={{ color: "#26ae61" }} />
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
            type="text"
            name="ontained"
            value={formvalues?.ontained}
            onChange={handleChange}
            fullWidth
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={4}>
        <FormControl fullWidth>
          <Typography>Total Marks:</Typography>
          <TextField
            size="small"
            type="text"
            name="total"
            value={formvalues?.total}
            onChange={handleChange}
            fullWidth
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <PersonIcon sx={{ color: "#26ae61" }} />
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
                  <PersonIcon sx={{ color: "#26ae61" }} />
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
          onClick={handleBack}
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
          onClick={handleNextButton}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
};

export default Education;
