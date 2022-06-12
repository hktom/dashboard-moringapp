import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../config/hooks";
import Layout from "../../../layout/Layout";
import ChatItem from "./chatItem";
import ChatTextBox from "./chatTextBox";
import MessagesContent from "./messageContent";
import { chatAction } from "./reducer";

function Chat() {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();

  const goToChat = (chat: any) => {
    console.log(chat);
    dispatch(chatAction.setRoomChats(chat));
  };

  React.useEffect(() => {
    console.log(state.chat?.rooms);
  }, [state.chat?.rooms]);

  return (
    <Layout>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <Grid item xs={12} md={4}>
          <Paper
            color="secondary"
            elevation={0}
            sx={{ px: 2, pb: 2, pt: 3, height: "100%" }}
          >
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Inbox
            </Typography>

            {state.chat?.rooms?.map((item: any) => (
              <ChatItem
                key={item?.id || ""}
                user={item?.user_to || ""}
                chat={item?.chats || []}
                onClick={() => goToChat(item)}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          {state.chat?.room && <MessagesContent />}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Chat;
