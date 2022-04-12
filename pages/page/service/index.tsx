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
  GridCellParams,
  MuiEvent,
  GridRowParams,
} from "@mui/x-data-grid";

import * as React from "react";
import Layout from "../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";
import { HOST_URL } from "../../../config/apollo";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { IServiceState } from "../../../reducer/service/reducer";
import { getServiceList } from "../../../reducer/service/action";

const columns: GridColDef[] = [
  {
    field: "image",
    width: 200,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 10 }}>
        <CardMedia
          component="img"
          sx={{ width: "120px" }}
          image={HOST_URL + "storage/" + params.value}
          alt="green iguana"
        />
      </Box>
    ),
  },
  { field: "name", headerName: "Name EN", width: 200 },
  { field: "name_fr", headerName: "Name FR", width: 200 },
  {
    field: "description",
    headerName: "Description",
    width: 400,
  },
  // {
  //   field: "fullName",
  //   headerName: "Full name",
  //   description: "This column has a value getter and is not sortable.",
  //   flex: 1,
  //   sortable: false,
  //   valueGetter: (params: GridValueGetterParams) =>
  //     `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  // },
  // {
  //   field: "status",
  //   flex: 1,
  //   headerName: "Status",
  //   renderCell: (params: GridRenderCellParams<string>) => (
  //     <Box sx={{ display: "flex", justifyContent: "end" }}>
  //       <Chip
  //         size="small"
  //         label={params.value}
  //         color="success"
  //         sx={{
  //           color: "secondary.main",
  //           textTransform: "uppercase",
  //           fontSize: "0.7rem",
  //           fontWeight: "bold",
  //         }}
  //       />
  //     </Box>
  //   ),
  // },
];

function Service() {
  const router = useRouter();
  const dispatch = useDispatch();
  const serviceState = useSelector(
    (state: IRootState): IServiceState => state.service
  );

  React.useEffect(() => {
    console.log(serviceState.list?.length);
    if (serviceState.list?.length === 0) {
      dispatch(getServiceList());
    }
  }, [dispatch, serviceState.list?.length]);

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
                Services
              </Typography>

              <Button
                onClick={() => router.push("/page/service/create")}
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
                      rows={serviceState.list || []}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      onRowClick={(
                        params: GridRowParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        // event.defaultMuiPrevented = true;
                        router.push("/page/service/edit/" + params.id);
                        console.log("params", params);
                      }}
                      onCellClick={(
                        params: GridCellParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        event.defaultMuiPrevented = true;
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

export default Service;
