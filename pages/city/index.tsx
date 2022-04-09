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
import Layout from "../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "firstName", headerName: "First name", flex: 1 },
  { field: "lastName", headerName: "Last name", flex: 1 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    flex: 1,
    sortable: false,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "status",
    flex: 1,
    headerName: "Status",
    renderCell: (params: GridRenderCellParams<string>) => (
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Chip
          size="small"
          label={params.value}
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

const rows = [
  {
    id: 1,

    lastName: "Snow",
    firstName: "Jon",
    age: 35,
    status: "completed",
  },
  {
    id: 2,

    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
    status: "completed",
  },
  {
    id: 3,

    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
    status: "completed",
  },
  {
    id: 4,

    lastName: "Stark",
    firstName: "Arya",
    age: 16,
    status: "completed",
  },
  {
    id: 5,

    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
    status: "completed",
  },
  {
    id: 6,

    lastName: "Melisandre",
    firstName: null,
    age: 150,
    status: "completed",
  },
  {
    id: 7,

    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
    status: "completed",
  },
  {
    id: 8,

    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
    status: "completed",
  },
  {
    id: 9,

    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
    status: "completed",
  },
];

function City() {
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
                City
              </Typography>

              <Button
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
                      rows={rows}
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

export default City;
