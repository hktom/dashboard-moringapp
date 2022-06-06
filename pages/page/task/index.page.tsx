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
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
// import { IHomeState } from "../../../store/home/reducer";
import { ITaskState } from "./reducer";
// import { getTaskList, ITask } from "../../../store/task/action";
import { ICondition } from "../condition/action";
import { ICategory } from "../category/action";
import { useRouter } from "next/router";
import { HOST_URL } from "../../../config/apollo";
import { IHomeState } from "../home/reducer";

const columns: GridColDef[] = [
  {
    field: "image",
    width: 200,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <CardMedia
          component="img"
          sx={{ height: "100px", width: "100px", py: 1 }}
          image={HOST_URL + "storage/" + params.value}
          alt="green iguana"
        />
      </Box>
    ),
  },
  { field: "name", headerName: "Name", width: 200 },
  { field: "price_by_hour", headerName: "Price By Hour ($)", width: 200 },
  { field: "min_price", headerName: "Min Price ($)", width: 200 },
  { field: "can_be_booked", headerName: "Can be booked", width: 200 },
  { field: "can_be_urgent", headerName: "Can be Urgent", width: 200 },
  { field: "accept_offer", headerName: "Accept offer", width: 200 },
  {
    field: "category",
    headerName: "Category",
    width: 200,
    sortable: false,
    valueGetter: (params: GridValueGetterParams<ICategory>) =>
      params.value?.name,
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
          color="success"
          sx={{
            color: "secondary.main",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        />
      </Box>
    ),
  },
];

function Task() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const state = useSelector((state: IRootState): ITaskState => state.task);
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  // const [data, setData] = React.useState<ITask[] | undefined>(undefined);
  // const homeState = useSelector((state: IRootState): IHomeState => state.home);
  // const dispatch = useDispatch();

  // React.useEffect(() => {
  //   if (!state.list) {
  //     dispatch(getTaskList())
  //   }
  // }, []);

  return (
    <>
      <Layout>
        <Grid container>
          <Grid item xs={12} md={12} sx={{ mx: "auto", my: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                Task
              </Typography>

              <Button
                variant="contained"
                size="small"
                color="info"
                disableElevation
                onClick={() => router.push("/page/task/create")}
              >
                <AddIcon sx={{ fontSize: "1rem" }} /> Add
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={12} sx={{ mx: "auto" }}>
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
                      rows={
                        (homeState?.role?.value == 1
                          ? state.list
                          : homeState?.tasks) || []
                      }
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      onRowClick={(
                        params: GridRowParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        router.push("/page/task/update?pid=" + params.id);
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

export default Task;
