import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogState } from "../../Redux/Slice/BlogSlice/BlogSlice";
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
import {
  GetCategories,
  getCategoriesStatus,
} from "../../Redux/Slice/CategoriesSlice/CategoriesSlice";
import { DeleteCategories } from "../../Api/Categories/DeleteCategories";
import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";

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
function Categories() {
  const { blogs } = useSelector(getBlogState);
  const dispatch = useDispatch();
  const { setsnackBarData } = useContext(SnackBarContext);
  const { allCategories } = useSelector(getCategoriesStatus);
  const [loader, setLoader] = useState(false);
  console.log(blogs);
  const [rows, setrows] = React.useState([]);
  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);

  const DeleteCat = async (data) => {
    console.log(data);
    setLoader(true);
    const res = await DeleteCategories(data?.id);
    if (res?.data?.isSuccess) {
      setLoader(false);
      setsnackBarData(res?.snackBarData);
      dispatch(GetCategories());
    } else {
      setLoader(false);
    }
    console.log(res?.data);
  };

  React.useEffect(() => {
    let rowData = [];
    allCategories?.map((data, i) => {
      rowData.push({
        sr: i + 1,
        id: data?._id,
        name: data?.title,
      });
    });
    console.log(rowData);
    setrows(rowData);
  }, [allCategories]);
  const columns = [
    { field: "sr", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Categories Name",
      width: 250,
    },
    {
      field: "Action",
      headerName: "Action",
      width: 250,
      renderCell: (cellVal) => {
        return (
          <Box>
            <IconButton onClick={() => DeleteCat(cellVal?.row)}>
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
            onPageSizeChange={(newPage) => {
              setpagesize(newPage);
            }}
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
    </Box>
  );
}

export default Categories;
