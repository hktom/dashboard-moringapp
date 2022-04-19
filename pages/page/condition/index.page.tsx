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
import { useRouter } from "next/router";
import { IRootState } from "../../../config/reducer";
import { IConditionState } from "./reducer";
import { getConditionList } from "./action";

const columns: GridColDef[] = [
  { field: "value", headerName: "Value", width: 250 },
  { field: "name", headerName: "Name", width: 250 },
  { field: "name_fr", headerName: "Name FR", width: 250 },
  { field: "created_at", headerName: "Created at", width: 250 },
];

function Condition() {

  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector(
    (state: IRootState): IConditionState => state.condition
  );

  // React.useEffect(() => {
  //   if (!state.list) {
  //     dispatch(getConditionList());
  //   }
  // }, [dispatch, state]);
  
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
                Condition
              </Typography>

              <Button
                onClick={() => router.push("/page/condition/create")}
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
              <Box style={{ height: 400, width: "100%" }} sx={{ mt: 4 }}>
                <div style={{ display: "flex", height: "100%" }}>
                  <div style={{ flexGrow: 1 }}>
                    <DataGrid
                      sx={{ border: "none" }}
                      rows={state.list || []}
                      columns={columns}
                      pageSize={5}
                      rowsPerPageOptions={[5]}
                      onRowClick={(
                        params: GridRowParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        router.push("/page/condition/edit/" + params.id);
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

export default Condition;
