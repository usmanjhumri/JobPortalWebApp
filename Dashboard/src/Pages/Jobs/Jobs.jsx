import React, { useContext, useEffect, useState } from "react";
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

import DeleteIcon from "@mui/icons-material/Delete";
import { Box, IconButton } from "@mui/material";
import Loader from "../../Components/Loader/Loader";
import { GetAllJobs, GetJobStatus } from "../../Redux/Slice/JobSlice/JobSlice";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";
import VisibilityIcon from "@mui/icons-material/Visibility";
import JobDescModal from "../../Components/Jobs/JobDescModal";
import { DeleteJobApi } from "../../Api/Jobs/DeleteJobApi";
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
function Jobs() {
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);
  const { AllJobs } = useSelector(GetJobStatus);
  const [loader, setLoader] = useState(false);
  const [rows, setrows] = React.useState([]);
  const [desc, setdesc] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(GetAllJobs());
  }, [dispatch]);

  const DeleteJob = async (data) => {
    console.log(data);
    setLoader(true);
    let res = await DeleteJobApi(data);
    if (res?.data?.isSuccess) {
      setsnackBarData(res?.snackBarData);
      dispatch(GetAllJobs());
      setLoader(false);
    } else {
      setLoader(false);
    }
  };

  React.useEffect(() => {
    let rowData = [];
    console.log(AllJobs);
    AllJobs?.map((data, i) => {
      rowData.push({
        id: i + 1,
        _id: data?._id,
        title: data?.title,
        experience: data?.experience,
        salary: `${data?.salaryfrom}$ - ${data?.salaryto}$`,
        date: data?.date,
        location: data?.location,
        category: data?.category?.title,
        company: data?.company,
        lastdate: data?.lastdate,
        jobtype: data?.jobtype,
        desc: data?.desc,
      });
    });
    setrows(rowData);
  }, [AllJobs]);
  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "category",
      headerName: "Category",
      width: 100,
    },
    {
      field: "jobtype",
      headerName: "Job Type",
      width: 100,
    },
    {
      field: "company",
      headerName: "Company",
      width: 120,
    },
    {
      field: "location",
      headerName: "Location",
      width: 150,
    },
    {
      field: "date",
      headerName: "Posted On",
      width: 150,
    },
    {
      field: "lastdate",
      headerName: "Last Date",
      width: 150,
    },
    {
      field: "salary",
      headerName: "Salary Range",
      width: 150,
    },
    {
      field: "experience",
      headerName: "Experience",
      width: 150,
    },

    {
      field: "Action",
      headerName: "Action",
      width: 250,
      renderCell: (cellVal) => {
        return (
          <Box>
            <IconButton
              onClick={() => {
                setdesc(cellVal?.row?.desc);
                setOpen(true);
              }}
            >
              <VisibilityIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                console.log(cellVal?.row);
                DeleteJob(cellVal?.row?._id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Box>
      {loader ? (
        <Loader />
      ) : (
        <Box
          sx={{
            height: "calc(100vh - 180px)",
            width: "100%",
            overflowX: "visible",
          }}
        >
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
      {open ? <JobDescModal open={open} setOpen={setOpen} desc={desc} /> : null}
    </Box>
  );
}

export default Jobs;
