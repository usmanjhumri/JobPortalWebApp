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
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/material";
import Loader from "../../Components/Loader/Loader";
import {
  GetCategories,
  getCategoriesStatus,
} from "../../Redux/Slice/CategoriesSlice/CategoriesSlice";
// import { DeleteCategories } from "../../Api/Categories/DeleteCategories";
// import { SnackBarContext } from "../../Context/SnackBarContext/SnackBarContext";

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
  const dispatch = useDispatch();
  // const { setsnackBarData } = useContext(SnackBarContext);
  const { allCategories } = useSelector(getCategoriesStatus);
  const [loader] = useState(false);

  const [rows, setrows] = React.useState([]);
  useEffect(() => {
    dispatch(GetCategories());
  }, [dispatch]);

  React.useEffect(() => {
    let rowData = [];
    Array(100)
      .fill("")
      ?.map((data, i) => {
        rowData.push({
          id: i + 1,
          _id: `sfsfd${i}`,
          title: `sfsfd${i}`,
        });
      });
    console.log(rowData);
    setrows(rowData);
  }, [allCategories]);
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "title",
      headerName: "Title",
      width: 150,
    },
    {
      field: "company",
      headerName: "Company",
      width: 150,
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
      renderCell: () => {
        return (
          <Box>
            {/* <IconButton onClick={() => DeleteCat(cellVal?.row)}> */}
            <DeleteIcon />
            {/* </IconButton> */}
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
              console.log(newPage);
              // setpagesize(newPage);
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
