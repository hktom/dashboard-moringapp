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
// import { Payment } from "@mui/icons-material";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  { field: "amount", headerName: "Amount", flex: 1 },
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

const rows: [] = [];

function Payment() {
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
                Payment
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={10} sx={{ mx: "auto" }}>
            <Paper elevation={0} sx={{ py: 3, px: 3 }}>
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

export default Payment;
