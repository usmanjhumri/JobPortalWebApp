import React from 'react';
import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
  MenuItem
} from "@mui/material";
import { useFormik } from 'formik';
import { makeStyles } from '@mui/styles';
import {  useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import PropTypes from "prop-types";
const useStyle = makeStyles(() => {
  return {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
  };
});

function Details({handleNext}) {
  const {
    // container,
    // subContainer,
    formContainer,
  } = useStyle();
  const initialValues = {
    title: "",
    description: "",
    leadvalue:"",
    source:"",
    salesowner:"",
    closedate:"",


  };
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    console.log(values);
    handleNext();
  };
  const handleNavigate = () => {
    navigate(-1);
  };
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter user title"),
    description: Yup.string().required("Please Enter description"),
    leadvalue: Yup.string().required("Please Enter leadvalue"),
    source: Yup.string().required("Please Enter source"),

  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    }
  });
  return (

    <Paper elevation={3} sx={{ padding: "20px" }}>
      <form onSubmit={formik.handleSubmit}>
        <Box className={formContainer}>
          <FormControl fullWidth>
            <Typography>Title</Typography>
            <TextField
              name="title"
              value={formik.values?.title}
              size={"small"}
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.errors.title) && Boolean(formik.touched.title)}
              helperText={Boolean(formik.errors.title) && formik.errors.title}
            />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Description</Typography>
            <TextField
              name="description"
              multiline
              rows={5}
              value={formik.values?.description}
              size={"small"}
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.errors.description) && Boolean(formik.touched.description)}
              helperText={Boolean(formik.errors.description) && formik.errors.description}
            />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Lead Value</Typography>
            <TextField
              name="leadvalue"
              value={formik.values?.leadvalue}
              size={"small"}
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.errors.leadvalue) && Boolean(formik.touched.leadvalue)}
              helperText={Boolean(formik.errors.leadvalue) && formik.errors.leadvalue}
            />
          </FormControl>
          <FormControl fullWidth>
            <Typography>Source</Typography>
            <TextField
              name="source"
              value={formik.values?.source}
              size={"small"}
              select
              fullWidth
              onChange={formik.handleChange}
              error={Boolean(formik.errors.source) && Boolean(formik.touched.source)}
              helperText={Boolean(formik.errors.source) && formik.errors.source}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Email">Email</MenuItem>
              <MenuItem value="Web">Web</MenuItem>
              <MenuItem value="Web Form">Web Form</MenuItem>
              <MenuItem value="Phone">Phone</MenuItem>
              <MenuItem value="Direct">Direct</MenuItem>
              </TextField>
          </FormControl>
          <FormControl fullWidth>
            <Typography>Sales Owner</Typography>
            <TextField
              name="salesowner"
              value={formik.values?.salesowner}
              size={"small"}
              select
              fullWidth
              onChange={formik.handleChange}
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="Email">Admin</MenuItem>
              <MenuItem value="Web">John</MenuItem>
     
              </TextField>
          </FormControl>
          <FormControl fullWidth>
            <Typography>Expected Close Date</Typography>
            <TextField
              name="closedate"
              type={"date"}
              value={formik.values?.closedate}
              size={"small"}
              fullWidth
              onChange={formik.handleChange}

            />
          </FormControl>

          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              <Box>
                <Button onClick={handleNavigate}>
                  <Typography sx={{ fontWeight: "bold" }}>
                    Back
                  </Typography>
                </Button>
              </Box>
              <Box>

                {/* {
                  activeStep === steps.length - 1 ?    <Button type='submit' sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.white.main }}>
                  less
                </Button> :

                 
                    <Button sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.white.main }} onClick={handleNext}>
                    Next
                  </Button>
                } */}

                <Button type='submit' sx={{ backgroundColor: (theme) => theme.palette.primary.main, color: (theme) => theme.palette.white.main }}>
                  Next
                </Button>

              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}

export default Details;
Details.propTypes = {

  handleNext: PropTypes.any,


};