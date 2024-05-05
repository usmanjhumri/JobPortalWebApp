import {
  Box,
  Button,
  FormControl,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import AddRoadIcon from "@mui/icons-material/AddRoad";
import { useDispatch, useSelector } from "react-redux";
import {
  GetProfileDetails,
  SetEducationDetails,
  SetPersonalInformation,
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

const PersonalInformation = ({ handleNext, index, handleBack }) => {
  const {
    MainContainer,
    nextButtonContainer,
    nextButtonStyle,
    sectionDevider,
    backbuttonStyle,
  } = useStyle();
  const dispatch = useDispatch();
  const [values, setvalues] = useState(null);
  const { personalInformations } = useSelector(GetProfileDetails);
  useEffect(() => {
    if (personalInformations) {
      setvalues(personalInformations);
    }
  }, [personalInformations]);
  const handleChange = (val) => {
    setvalues({ ...values, [val.target.name]: val.target.value });
  };
  const handleNextButton = () => {
    
    dispatch(SetPersonalInformation(values));
    handleNext();
  };
  return (
    <Grid container className={MainContainer} spacing={3}>
      <Box className={sectionDevider}>
        <Typography variant="h6">Personal Information</Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Name:</Typography>
          <TextField
            size="small"
            type="text"
            name="name"
            value={values?.name}
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
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Father Name:</Typography>
          <TextField
            size="small"
            name="fathername"
            value={values?.fathername}
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
      <Grid item xs={12} md={12}>
        <FormControl fullWidth>
          <Typography>Date Of Birth:</Typography>
          <TextField
            size="small"
            name="dob"
            value={values?.dob}
            onChange={handleChange}
            fullWidth
            type="date"
          />
        </FormControl>
      </Grid>
      <Box className={sectionDevider}>
        <Typography variant="h6">Address Information</Typography>
      </Box>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>Steet #:</Typography>
          <TextField
            size="small"
            fullWidth
            name="street"
            value={values?.street}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <AddRoadIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <Typography>City:</Typography>
          <TextField
            size="small"
            fullWidth
            name="city"
            value={values?.city}
            onChange={handleChange}
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
      <Grid item xs={12} md={12}>
        <FormControl fullWidth>
          <Typography>Country:</Typography>
          <TextField
            size="small"
            fullWidth
            name="country"
            value={values?.country}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FlagCircleIcon sx={{ color: "#26ae61" }} />
                </InputAdornment>
              ),
            }}
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
          onClick={handleNextButton}
        >
          Next
        </Button>
      </Box>
    </Grid>
  );
};

export default PersonalInformation;
