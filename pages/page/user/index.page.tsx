import {
  Avatar,
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
import { HOST_URL } from "../../../config/apollo";
import { ICondition } from "../condition/action";
import { IRootState } from "../../../config/reducer";
import { IUserState } from "./reducer";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const columns: GridColDef[] = [
  {
    field: "avatar",
    width: 200,
    headerName: "avatar",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end", py: 5 }}>
        <Avatar
          alt=""
          src={HOST_URL + "storage/" + params.value}
          sx={{ width: 60, height: 60 }}
        />
      </Box>
    ),
  },
  { field: "first_name", headerName: "First name", flex: 1 },
  { field: "last_name", headerName: "Last name", flex: 1 },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "role",
    headerName: "Role",
    width: 200,
    sortable: true,
    valueGetter: (params: GridValueGetterParams) => `${params.row.role?.name}`,
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
            color: "white",
            textTransform: "uppercase",
            fontSize: "0.7rem",
            fontWeight: "bold",
          }}
        />
      </Box>
    ),
  },
];

function User() {
  const state = useSelector((state: IRootState): IUserState => state.user);
  const router = useRouter();
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
                User
              </Typography>

              <Button
                onClick={() => router.push("/page/user/create")}
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
                      rows={state.list || []}
                      onRowClick={(
                        params: GridRowParams,
                        event: MuiEvent<React.MouseEvent>
                      ) => {
                        router.push("/page/user/profile?pid=" + params.id);
                        console.log("params", params);
                      }}
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

export default User;
