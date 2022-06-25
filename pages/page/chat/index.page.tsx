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

import { getFirestore, collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "../../_app.page";

function Chat() {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();

  const [value, loading, error] = useCollection(
    query(
      collection(getFirestore(firebaseApp), "rooms"),
      where("users", "array-contains", state.home.user?.id || "")
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const goToChat = (chat: any) => {
    dispatch(chatAction.setRoomChats(chat));
  };

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

            {/* {state.chat?.rooms?.map((item: any) => (
              <ChatItem
                key={item?.id}
                user={
                  item?.user_to?.id == state.home?.user?.id
                    ? item?.user_from
                    : item?.user_to
                }
                chat={item?.chats || []}
                onClick={() => goToChat(item)}
              />
            ))} */}

            {error && <strong>Error: {JSON.stringify(error)}</strong>}
            {loading && <span>Collection: Loading...</span>}
            {value &&
              value?.docs
                .sort(
                  (a: any, b: any) =>
                    a.data().updated_at.seconds * 1000 -
                    b.data().updated_at.seconds * 1000
                )
                .map((doc) => (
                  <ChatItem
                    key={doc.id}
                    data={doc.data()}
                    onClick={() => goToChat(doc.id)}
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
