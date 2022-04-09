import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
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

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 150 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 180,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "status",
    headerName: "Status",
    width: 120,
    renderCell: (params: GridRenderCellParams<String>) => (
      <Box sx={{ display: "flex", justifyContent: "end" }}>
        <Chip
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
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35, status: "completed" },
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
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16, status: "completed" },
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

function Job() {
  return (
    <Layout>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Job
      </Typography>

      <Grid container spacing={3} sx={{ mt: 0 }}>
        {[1, 2, 3, 4].map((value) => (
          <Grid item xs={12} md={3} key={value}>
            <Card elevation={1}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="primary.light">
                  {
                    [
                      "waiting for approval",
                      "approved",
                      "waiting for payment",
                      "rejected",
                    ][value - 1]
                  }
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                  color="primary.main"
                  gutterBottom
                >
                  890k
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="small" sx={{ color: "info.main" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Paper color="secondary" sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Latest transactions
            </Typography>

            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                sx={{ border: "none" }}
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Job;
