import {
  Box,
  Button,
  FormControl,
  Grid,
  // InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  // TextField,
  Typography,
} from "@mui/material";

import { DataGrid, GridRowParams, MuiEvent } from "@mui/x-data-grid";

import * as React from "react";
import Layout from "../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
// import { IRootState } from "../../../config/reducer";
// import { IHomeState } from "../../../store/home/reducer";
import { ITaskState } from "./reducer";
// import { getTaskList, ITask } from "../../../store/task/action";
import { useRouter } from "next/router";
import { IHomeState } from "../home/reducer";
import { columns } from "./columns";
import { useAppSelector, AppState } from "../../../config/hooks";

function Task() {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const state = useAppSelector((state: AppState) => state);
  // const homeState = useSelector((state: IRootState): IHomeState => state.home);

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
                        (state?.home?.user?.role?.value == 1
                          ? state.task?.list
                          : state?.home?.user?.tasks) || []
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
