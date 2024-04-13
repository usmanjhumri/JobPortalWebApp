import React, { useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { PostCategories } from "../../Api/Categories/PostCategories";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
const useStyle = makeStyles(() => {
  return {
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      width: "100%",
      maxWidth: "500px",
      margin: "20px auto",
    },
  };
});

function CreateCategories() {
  const { formContainer } = useStyle();
  const initialValues = {
    title: "",
  };
  const navigate = useNavigate();
  const { setsnackBarData } = useContext(SnackBarContext);
  const handleSubmit = async (values) => {
    console.log(values);
    const res = await PostCategories(values);
    setsnackBarData(res?.snackBarData);
    console.log(res?.data);
    if (res?.data?.isSuccess) {
      navigate(-1);
    }
  };
  const handleNavigate = () => {
    navigate(-1);
  };
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter Category title"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    },
  });
  return (
    <Paper
      elevation={0}
      sx={{
        padding: "20px",
      }}
    >
      <form onSubmit={formik.handleSubmit}>
        <Box className={formContainer}>
          <FormControl fullWidth>
            <Typography>Category Title</Typography>
            <TextField
              name="title"
              value={formik.values?.title}
              size={"small"}
              fullWidth
              onChange={formik.handleChange}
              error={
                Boolean(formik.errors.title) && Boolean(formik.touched.title)
              }
              helperText={Boolean(formik.errors.title) && formik.errors.title}
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
                  <Typography sx={{ fontWeight: "bold" }}>Back</Typography>
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

                <Button
                  type="submit"
                  sx={{
                    backgroundColor: (theme) => theme.palette.primary.main,
                    color: (theme) => theme.palette.white.main,
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </form>
    </Paper>
  );
}

export default CreateCategories;
