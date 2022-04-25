import {
  Box,
  Button,
  CardMedia,
  Chip,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  DataGrid,
  GridRowParams,
  MuiEvent,
} from "@mui/x-data-grid";

import * as React from "react";
import Layout from "../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { getCategoryList } from "./action";
import { ICategoryState } from "./reducer";
import { HOST_URL } from "../../../config/apollo";
import { ICondition } from "../condition/action";

const columns: GridColDef[] = [
  {
    field: "image",
    width: 200,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <CardMedia
          component="img"
          sx={{ height: "120px", width: "120px", py: 2 }}
          image={HOST_URL + "storage/" + params.value}
          alt="green iguana"
        />
      </Box>
    ),
  },
  { field: "name", headerName: "Name EN", width: 200 },
  { field: "name_fr", headerName: "Name FR", width: 200 },
  {
    field: "service",
    headerName: "Service",
    width: 200,
    sortable: true,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.service?.name || ""}`,
  },
  {
    field: "condition",
    width: 200,
    headerName: "Status",
    renderCell: (params: GridRenderCellParams<ICondition>) => (
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Chip
          size="small"
          label={params.value?.name}
          color={params.value?.value == 1 ? "success" : "error"}
          sx={{
            color: "#fff",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        />
      </Box>
    ),
  },
];

function Category() {
  const dispatch = useDispatch();
  const router = useRouter();
  const CategoryState = useSelector(
    (state: IRootState): ICategoryState => state.category
  );

  // React.useEffect(() => {
  //   if (!CategoryState.list) {
  //     dispatch(getCategoryList());
  //   }
  // }, [dispatch, CategoryState]);

  return (
    <>
      <Layout>
        <Grid container>
          <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                Category
              </Typography>

              <Button
                onClick={() => router.push("/page/category/create")}
                variant="contained"
                size="small"
                color="info"
                disableElevation
              >
                <AddIcon sx={{ fontSize: "1rem" }} /> Add
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={10} sx={{ mx: "auto" }}>
            <Paper elevation={0} sx={{ py: 3, px: 3 }}>
              <FormControl fullWidth sx={{ m: 1 }}>
                <InputLabel htmlFor="outlined-adornment-amount">
                  Search
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={<SearchIcon />}
                  label="Amount"
                />
              </FormControl>

              <Box style={{ height: 650, width: "100%" }} sx={{ mt: 4 }}>
                <div style={{ display: "flex", height: "100%" }}>
                  <div style={{ flexGrow: 1 }}>
                    <DataGrid
                      sx={{ border: "none" }}
                      rowHeight={100}
                      rows={CategoryState.list || []}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      onRowClick={(
                        params: GridRowParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        router.push("/page/category/update?pid=" + params.id);
                        console.log("params", params);
                      }}
                    />
                  </div>
                </div>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Category;
