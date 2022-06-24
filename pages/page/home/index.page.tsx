import * as React from "react";
import { Button, Grid, Paper, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";

import Layout from "../../../layout/Layout";

import { useRouter } from "next/router";

import { DataGrid } from "@mui/x-data-grid";

import { columnsJob } from "../../../components/columnsJob";
import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../config/hooks";
import ChatItem from "../chat/chatItem";
import { chatAction } from "../chat/reducer";

const Home: NextPage = () => {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const goToChat = (chat: any) => {
    dispatch(chatAction.setRoomChats(chat));
    router.push(`/page/chat/`);
  };

  return (
    <Layout>
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          minHeight: "200px",
          backgroundColor: "warning.main",
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
