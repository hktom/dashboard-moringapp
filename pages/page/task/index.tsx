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
} from "@mui/x-data-grid";

import * as React from "react";
import Layout from "../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { IHomeState } from "../../../reducer/home/reducer";
import { ITaskState } from "../../../reducer/task/reducer";
import { getTaskList, ITask } from "../../../reducer/task/action";
import { ICondition } from "../../../reducer/condition/action";
import { ICategory } from "../../../reducer/category/action";
import { useRouter } from "next/router";

const columns: GridColDef[] = [
  { field: "title", headerName: "Name", flex: 1 },
  {
    field: "image",
    flex: 1,
    headerName: "Image",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <CardMedia
          component="img"
          height="80px"
          image={params.value}
          alt="green iguana"
        />
      </Box>
    ),
  },
  { field: "can_be_booked", headerName: "Can be booked", flex: 1 },
  { field: "can_be_urgent", headerName: "Can be Urgent", flex: 1 },
  { field: "accept_offer", headerName: "Accept offer", flex: 1 },
  { field: "min_price", headerName: "Min Price ($)", flex: 1 },

  {
    field: "category",
    headerName: "Category",
    flex: 1,
    sortable: false,
    valueGetter: (params: GridValueGetterParams<ICategory>) =>
      params.value?.name,
  },
  {
    field: "condition",
    flex: 1,
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
  const [data, setData] = React.useState<ITask[] | undefined>(undefined);
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const taskState = useSelector((state: IRootState): ITaskState => state.task);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (homeState.role?.name == "admin" && !data) {
      dispatch(getTaskList());
      setData(taskState.taskList);
    } else {
      setData(homeState.tasks!);
    }
  }, [
    data,
    dispatch,
    homeState.role?.name,
    homeState.tasks,
    taskState.taskList,
  ]);

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
                      rows={data || []}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
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
