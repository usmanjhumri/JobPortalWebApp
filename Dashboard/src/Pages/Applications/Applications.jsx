import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DataGrid,
  gridClasses,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import Loader from "../../Components/Loader/Loader";
import { GetAllJobs, GetJobStatus } from "../../Redux/Slice/JobSlice/JobSlice";
// import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {
  GetAllApplications,
  getApplicationData,
} from "../../Redux/Slice/ApplicationSlice/ApplicationSlice";

function CustomToolbar() {
  return (
    <GridToolbarContainer className={gridClasses.toolbarContainer}>
      <GridToolbarExport csvOptions={{ fileName: "Active Employees" }} />
      <GridToolbarFilterButton />
      <GridToolbarDensitySelector />
      <GridToolbarColumnsButton />
    </GridToolbarContainer>
  );
}
function Applications() {
  // const { setsnackBarData } = useContext(SnackBarContext);
  const { AllJobs } = useSelector(GetJobStatus);
  const { allApplications } = useSelector(getApplicationData);
  console.log(allApplications);
  const dispatch = useDispatch();

  const [loader] = useState(false);
  const [searchvalue, setsearchvalue] = useState(
    AllJobs ? AllJobs[0]?._id : ""
  );
  const [rows, setrows] = React.useState([]);
  useEffect(() => {
    if (AllJobs?.length < 1) {
      dispatch(GetAllJobs());
    } else {
      dispatch(GetAllApplications(AllJobs[0]?._id));
    }
  }, [dispatch]);
  React.useEffect(() => {
    let rowData = [];
    allApplications?.map((data, i) => {
      rowData.push({
        id: i + 1,
        country: data?.personalInformation?.country,
        city: data?.personalInformation?.city,
        fathername: data?.personalInformation?.fathername,
        name: data?.personalInformation?.name,
        _id: data?._id,
      });
    });
    setrows(rowData);
  }, [allApplications]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Applicant Name",
      width: 250,
    },
    {
      field: "fathername",
      headerName: "Applicant Fathername",
      width: 250,
    },
    {
      field: "city",
      headerName: "Application City",
      width: 200,
    },
    {
      field: "country",
      headerName: "Applicant Country",
      width: 200,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 250,
      renderCell: () =>
        // cellVal
        {
          return (
            <Box>
              <IconButton
              // onClick={() => {
              //   setdesc(cellVal?.row?.desc);
              //   setOpen(true);
              // }}
              >
                <VisibilityIcon />
              </IconButton>
            </Box>
          );
        },
    },
  ];

  const handleSearchApplications = async () => {
    dispatch(GetAllApplications(searchvalue));
  };

  return (
    <Box>
      {loader ? (
        <Loader />
      ) : (
        <Box
          sx={{
            height: "calc(100vh - 250px)",
            width: "100%",
            overflowX: "visible",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "end",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <FormControl fullWidth>
              <Typography>Select Job First To View Applications</Typography>
              <TextField
                name="jobs"
                select
                size="small"
                fullWidth
                defaultValue={searchvalue}
                onChange={(val) => {
                  console.log(val?.target.value);
                  setsearchvalue(val?.target.value);
                }}
              >
                {AllJobs?.map((d, i) => {
                  return (
                    <MenuItem key={i} value={d?._id}>
                      {d?.title}
                    </MenuItem>
                  );
                })}
              </TextField>
            </FormControl>
            <Button variant="contained" onClick={handleSearchApplications}>
              Search
            </Button>
          </Box>
          <DataGrid
            rowsPerPageOptions={[5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]}
            experimentalFeatures={{ newEditingApi: true }}
            components={{
              Toolbar: CustomToolbar,
            }}
            rows={rows}
            columns={columns}
            // checkboxSelection
            disableSelectionOnClick
          />
        </Box>
      )}
      {/* {open ? <JobDescModal open={open} setOpen={setOpen} desc={desc} /> : null} */}
    </Box>
  );
}

export default Applications;
