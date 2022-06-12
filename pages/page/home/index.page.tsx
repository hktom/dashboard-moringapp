import * as React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../../layout/Layout";
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

import { DataGrid } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
// import { IRootState } from "../../../config/reducer";
import { IHomeState } from "./reducer";
import { IMenu, menu1 } from "../../../layout/IMenu";
import { columnsJob } from "../../../components/columnsJob";
import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../config/hooks";
import ChatItem from "../chat/chatItem";
import { chatAction } from "../chat/reducer";

// import "react-chat-elements/dist/main.css";
// import { ChatItem } from "react-chat-elements-typescript";

const Home: NextPage = () => {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const goToChat = (chat: any) => {
    dispatch(chatAction.getChatsItemSuccess(chat));
    router.push(`/page/chat/`);
  };

  return (
    <Layout>
      {/* <h1>Dashboard</h1> */}
      <Paper
        sx={{
          width: "100%",
          minHeight: "200px",
          backgroundColor: "info.light",
          mt: 5,
          py: 3,
          px: 10,
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h2" color="secondary.main">
          Dashboard
        </Typography>
        <Typography component="p" variant="body1" color="secondary.main">
          Your dashboard has been improved! Explore new features
        </Typography>
        {/* <Button
          variant="contained"
          color="success"
          disableElevation
          sx={{ mt: 2 }}
        >
          <Typography variant="button" color="secondary.main">
            Dismiss banner{" "}
          </Typography>
        </Button> */}
      </Paper>

      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <Grid item xs={12} md={8}>
          <Paper color="secondary" elevation={0} sx={{ px: 2, pb: 2, pt: 3 }}>
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
                rows={state?.home?.user?.jobs || []}
                columns={columnsJob}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper color="secondary" elevation={0} sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Inbox
            </Typography>

            {state.chat?.rooms?.map((item: any) => (
              <ChatItem
                key={item.id}
                user={item.user_to}
                chat={item.chats}
                onClick={() => goToChat(item)}
              />
            ))}
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;
