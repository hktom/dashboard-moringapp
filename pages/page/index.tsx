import * as React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
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
import { useRouter } from "next/router";

import {
  DataGrid,
} from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { IRootState } from "../../config/reducer";
import { IHomeState } from "../../reducer/home/reducer";
import { IMenu, menu1 } from "../../layout/IMenu";
import { columnsJob } from "../../components/columnsJob";

const Home: NextPage = () => {
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const router = useRouter();

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
              Latest Job
            </Typography>

            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                sx={{ border: "none" }}
                rows={homeState?.jobs || []}
                columns={columnsJob}
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
        {menu1
          .filter((i: IMenu) => i.description)
          .map((value: IMenu) => (
            <Grid item xs={12} md={6} key={`${value.path}`}>
              <Card elevation={1}>
                <CardContent>
                  <Typography
                    sx={{ fontSize: "1.2rem" }}
                    color="primary.main"
                    gutterBottom
                  >
                    {value.label}
                  </Typography>
                  <Typography variant="h5" component="div"></Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {value.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    color="info"
                    onClick={() => router.push(value.path)}
                  >
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
    </Layout>
  );
};

export default Home;
