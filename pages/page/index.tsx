import * as React from "react";
import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../layout/Layout";
import styles from "../styles/Home.module.css";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import {
  DataGrid,
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 130 },
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

const Home: NextPage = () => {
  return (
    <Layout>
      <h1>Dashboard</h1>
      <Paper
        sx={{
          width: "100%",
          minHeight: "200px",
          backgroundColor: "info.light",
          py: 3,
          px: 10,
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h2" color="secondary.main">
          Welcome {/* Welcome to Moringapp */}
        </Typography>
        <Typography component="p" variant="body1" color="secondary.main">
          Your dashboard has been improved! Explore new features
        </Typography>
        <Button
          variant="contained"
          color="success"
          disableElevation
          sx={{ mt: 2 }}
        >
          <Typography variant="button" color="secondary.main">
            Dismiss banner{" "}
          </Typography>
        </Button>
      </Paper>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12} md={8}>
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
        <Grid item xs={12} md={4}>
          <Paper color="secondary" sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Inbox
            </Typography>

            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d5/d55b21c2d44d79dfa40fce867ba36b54b758e67a.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Brunch this weekend?"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Ali Connors
                      </Typography>
                      {" — I'll be in your neighborhood doing errands this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Travis Howard"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/d5/d55b21c2d44d79dfa40fce867ba36b54b758e67a.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Summer BBQ"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      {" — Wish I could come, but I'm out of town this…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dac76a99a5b7f10de939c864c9f622b6eed66b06.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Cindy Baker"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/da/dac76a99a5b7f10de939c864c9f622b6eed66b06.jpg"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary="Oui Oui"
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      {" — Do you have Paris recommendations? Have you ever…"}
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Button
                variant="text"
                sx={{ color: "primary.light", fontWeight: "bold", mt: 3 }}
                disableElevation
              >
                Go to chat
              </Button>
            </List>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ mt: 5 }}>
        {[1, 2, 3, 4].map((value) => (
          <Grid item xs={12} md={6} key={value}>
            <Card elevation={1}>
              <CardContent>
                <Typography
                  sx={{ fontSize: "1.2rem" }}
                  color="text.primary"
                  gutterBottom
                >
                  See yours tasks
                </Typography>
                <Typography variant="h5" component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt vitae molestiae autem fuga, voluptatem porro facere
                  fugiat laboriosam minus ab expedita.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
};

export default Home;
