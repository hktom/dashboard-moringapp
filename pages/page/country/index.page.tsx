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
import { getCountryList } from "./action";
import { ICountryState } from "./reducer";

const columns: GridColDef[] = [
  { field: "name", headerName: "Name", flex: 2 },
  { field: "name_fr", headerName: "Name FR", flex: 2 },
];

function Country() {
  const dispatch = useDispatch();
  const router = useRouter();
  const state = useSelector(
    (state: IRootState): ICountryState => state.country
  );

  // React.useEffect(() => {
  //   if (!state.list) {
  //     dispatch(getCountryList());
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
                Countries
              </Typography>

              <Button
                onClick={() => router.push("/page/country/create")}
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
                        router.push("/page/country/edit/" + params.id);
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

export default Country;
