import React, { useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  // CircularProgress,
  FormControl,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import { makeStyles } from "@mui/styles";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
// import Loader from '../../Loader/Loader';
import FmdGoodIcon from "@mui/icons-material/FmdGood";

import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
const useStyle = makeStyles(() => {
  return {
    container: {
      height: "100%",
      width: "100%",
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    subContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      padding: "20px",
      width: "100%",
      maxWidth: "1000px",
    },
    formContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "10px",
    },
    FieldInRow: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignContent: "center",
      gap: "20px",
    },
  };
});
function CreateJobs() {
  const { container, subContainer, formContainer, FieldInRow } = useStyle();

  const initialValues = {
    title: "",
  };
  const navigate = useNavigate();

  const handleSubmit = async (values, resetForm, setSubmitting) => {
    console.log(values);
    console.log(editorState);
    setSubmitting(false);
    resetForm();
  };
  const handleNavigate = () => {
    navigate(-1);
  };
  const ValidationSchema = Yup.object().shape({
    title: Yup.string().required("Please Enter Title Name"),
    company: Yup.string().required("Please Enter Company Name"),
    location: Yup.string().required("Please Enter Location"),
    salaryto: Yup.string().required("Please Enter Salary Range"),
    salaryfrom: Yup.string().required("Please Enter Salary Range"),
    experience: Yup.string().required("Please Enter experience"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { resetForm, setSubmitting }) => {
      handleSubmit(values, resetForm, setSubmitting);
    },
  });

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    console.log(typeof(draftToHtml(convertToRaw(state.getCurrentContent()))));
  };

  // const sendContent = () => {
  //   
  // };

  return (
    <Box className={container}>
      <Box className={subContainer}>
        <Typography variant="h5" sx={{ textAlign: "left", fontWeight: 400 }}>
          Create Job
        </Typography>
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
                  error={
                    Boolean(formik.errors.title) &&
                    Boolean(formik.touched.title)
                  }
                  helperText={
                    Boolean(formik.errors.title) && Boolean(formik.errors.title)
                  }
                />
              </FormControl>
              <Box className={FieldInRow}>
                <FormControl fullWidth>
                  <Typography>Company Name</Typography>
                  <TextField
                    name="company"
                    value={formik.values?.company}
                    size={"small"}
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      Boolean(formik.errors.company) &&
                      Boolean(formik.touched.company)
                    }
                    helperText={
                      Boolean(formik.errors.company) &&
                      Boolean(formik.errors.company)
                    }
                  />
                </FormControl>

                <FormControl fullWidth>
                  <Typography>Location</Typography>
                  <TextField
                    name="location"
                    value={formik.values?.location}
                    size={"small"}
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      Boolean(formik.errors.location) &&
                      Boolean(formik.touched.location)
                    }
                    helperText={
                      Boolean(formik.errors.location) &&
                      Boolean(formik.errors.location)
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <FmdGoodIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <Typography sx={{ fontWeight: "bold" }}>Salary Range</Typography>
              <Box className={FieldInRow}>
                <FormControl fullWidth>
                  <Typography>From</Typography>
                  <TextField
                    name="salaryfrom"
                    value={formik.values?.salaryfrom}
                    size={"small"}
                    type="number"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      Boolean(formik.errors.salaryfrom) &&
                      Boolean(formik.touched.salaryfrom)
                    }
                    helperText={
                      Boolean(formik.errors.salaryfrom) &&
                      Boolean(formik.errors.salaryfrom)
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>

                <FormControl fullWidth>
                  <Typography>To</Typography>
                  <TextField
                    name="salaryto"
                    value={formik.values?.salaryto}
                    size={"small"}
                    type="number"
                    fullWidth
                    onChange={formik.handleChange}
                    error={
                      Boolean(formik.errors.salaryto) &&
                      Boolean(formik.touched.salaryto)
                    }
                    helperText={
                      Boolean(formik.errors.salaryto) &&
                      Boolean(formik.errors.salaryto)
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <AttachMoneyIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </Box>
              <FormControl fullWidth>
                <Typography>Experience Required (years)</Typography>
                <TextField
                  name="experience"
                  value={formik.values?.experience}
                  size={"small"}
                  fullWidth
                  onChange={formik.handleChange}
                  type="number"
                  error={
                    Boolean(formik.errors.experience) &&
                    Boolean(formik.touched.experience)
                  }
                  helperText={
                    Boolean(formik.errors.experience) &&
                    Boolean(formik.errors.experience)
                  }
                />
              </FormControl>
              <div>
                <Editor
                  editorState={editorState}
                  onEditorStateChange={handleEditorChange}
                  wrapperClassName="wrapper-class"
                  editorClassName="editor-class"
                  toolbarClassName="toolbar-class"
                />
                
              </div>
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
                    {formik.isSubmitting ? (
                      <Box>
                        {/* <Loader/> */}
                        <CircularProgress />
                      </Box>
                    ) : (
                      <Button variant="contained" type="submit">
                        <Typography sx={{ fontWeight: "bold" }}>
                          Save
                        </Typography>
                      </Button>
                    )}
                  </Box>
                </Box>
              </Box>
            </Box>
          </form>
        </Paper>
      </Box>
    </Box>
  );
}

export default CreateJobs;
