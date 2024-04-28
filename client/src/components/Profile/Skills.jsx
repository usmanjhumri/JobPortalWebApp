import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
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
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileDetails,
  SetSkillDetails,
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
const tableheads = ["Sr#", "Title", "Expertise Level", ""];
const Skills = ({ handleNext, index, handleBack }) => {
  const {
    MainContainer,
    nextButtonContainer,
    nextButtonStyle,
    sectionDevider,
    backbuttonStyle,
  } = useStyle();
  const [values, setvalues] = useState([]);
  const [formvalues, setformvalues] = useState({
    title: "",
    level: "",
  });
  const dispatch = useDispatch();
  const { SkillDetails } = useSelector(GetProfileDetails);
  useEffect(() => {
    if (SkillDetails) {
      setvalues(SkillDetails);
    }
  }, [SkillDetails]);
  const handleChange = (val) => {
    setformvalues({ ...formvalues, [val.target.name]: val.target.value });
  };
  const handleAddEducation = () => {
    setvalues([...values, formvalues]);
  };
  const removeValue = (ind) => {
    const arr = JSON.parse(JSON.stringify(values));
    arr.splice(ind, 1);
    setvalues(arr);
    dispatch(SetSkillDetails(arr));
  };
  const handleNextButton = (val) => {
    dispatch(SetSkillDetails(values));
    if (val === "next") {
      handleNext();
    } else {
      handleBack();
    }
  };

  return (
    <Grid container className={MainContainer} spacing={3}>
      <Box className={sectionDevider}>
        <Typography variant="h6">Skills Details</Typography>
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
        <Typography variant="h6">Add Skills</Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Title:</Typography>
          <TextField
            size="small"
            type="text"
            name="title"
            value={formvalues?.title}
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
          <Typography>Level:</Typography>
          <TextField
            size="small"
            name="level"
            value={formvalues?.level}
            onChange={handleChange}
            fullWidth
            select
          >
            <MenuItem value={"expert"}>Expert</MenuItem>
            <MenuItem value={"intermediate"}>Intermediate</MenuItem>
            <MenuItem value={"beginner"}>Beginner</MenuItem>
          </TextField>
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
          Add Skills
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

export default Skills;
