import React, { useContext, useEffect, useState } from "react";
import {
  Box,
  Button,
  CircularProgress,
  // CircularProgress,
  FormControl,
  InputAdornment,
  MenuItem,
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
import { useDispatch, useSelector } from "react-redux";
import {
  GetCategories,
  getCategoriesStatus,
} from "../../Redux/Slice/CategoriesSlice/CategoriesSlice";
import { CreateJobsApi } from "../../Api/Jobs/CreateJobsApi";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
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
  const { allCategories } = useSelector(getCategoriesStatus);
  const [jobCategories, setJobCategories] = useState(null);
  const [editorvalues, seteditorValues] = useState(null);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);
  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);
  useEffect(() => {
    setJobCategories(allCategories);
  }, [allCategories]);
  const initialValues = {
    title: "",
  };
  const navigate = useNavigate();
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const handleEditorChange = (state) => {
    setEditorState(state);
    seteditorValues(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  const handleSubmit = async (values, setSubmitting) => {
    let obj = {
      ...values,
      desc: editorvalues,
      date: new Date().toLocaleDateString(),
    };
    console.log(obj);
    let res = await CreateJobsApi(obj);
    if (res?.data?.isSuccess) {
      setsnackBarData(res?.snackBarData);
      setSubmitting(false);
      handleNavigate();
    } else {
      setSubmitting(false);
    }
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
    category: Yup.string().required("Please Select Job Category"),
    lastdate: Yup.string().required("Please Select Last Date To Apply"),
    jobtype: Yup.string().required("Please Select Job Type"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: ValidationSchema,
    onSubmit: (values, { setSubmitting }) => {
      handleSubmit(values, setSubmitting);
    },
  });

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
              <FormControl fullWidth>
                <Typography>Select Job Category</Typography>
                <TextField
                  name="category"
                  size={"small"}
                  fullWidth
                  defaultValue={jobCategories ? jobCategories[0]?.title : ""}
                  select
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.category) &&
                    Boolean(formik.touched.category)
                  }
                  helperText={
                    Boolean(formik.errors.category) &&
                    Boolean(formik.errors.category)
                  }
                >
                  {jobCategories?.map((d, i) => {
                    return (
                      <MenuItem key={i} value={d?._id}>
                        {d?.title}
                      </MenuItem>
                    );
                  })}
                </TextField>
              </FormControl>
              <FormControl fullWidth>
                <Typography>Select Job Type</Typography>
                <TextField
                  name="jobtype"
                  size={"small"}
                  fullWidth
                  select
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.jobtype) &&
                    Boolean(formik.touched.jobtype)
                  }
                  helperText={
                    Boolean(formik.errors.jobtype) &&
                    Boolean(formik.errors.jobtype)
                  }
                >
                  <MenuItem value={"part time"}>Full Time</MenuItem>
                  <MenuItem value={"full time"}>Part Time</MenuItem>
                  <MenuItem value={"permanent"}>Permanent</MenuItem>
                  <MenuItem value={"contractual"}>Contractual</MenuItem>
                </TextField>
              </FormControl>
              <FormControl fullWidth>
                <Typography>Last Date To Apply</Typography>
                <TextField
                  name="lastdate"
                  size={"small"}
                  fullWidth
                  type="date"
                  onChange={formik.handleChange}
                  error={
                    Boolean(formik.errors.lastdate) &&
                    Boolean(formik.touched.lastdate)
                  }
                  helperText={
                    Boolean(formik.errors.lastdate) &&
                    Boolean(formik.errors.lastdate)
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
