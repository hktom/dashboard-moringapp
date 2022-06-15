import { Paper, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useRef } from "react";

import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from "../../../config/hooks";
import ChatBubble from "./chatBubble";
import ChatTextBox from "./chatTextBox";

import { useSubscription, gql } from "@apollo/client";
import { chatAction } from "./reducer";

function MessagesContent() {
  const state = useAppSelector((state: AppState) => state);
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();

  const { loading, error, data } = useSubscription(
    gql`
    subscription{
      newMessagesInRoom(room_id: "${state?.chat?.room?.id}"){
          id
          content
          image
          user{
              id
              first_name
              last_name
              avatar
              email
          }
          room{
              id
          }
          created_at
      }
  }
    `
  );

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  useEffect(() => {
    if (
      data?.newMessagesInRoom &&
      state.chat?.room?.chats.findIndex(
        (chat: any) => chat.id == data.newMessagesInRoom.id
      ) === -1
    ) {
      dispatch(chatAction.updateChatSuccess(data?.newMessagesInRoom));
      data && console.log("data", data?.newMessagesInRoom);
    }

    error && console.error("error", error);
  }, [data, dispatch, error, loading, state.chat?.room?.chats]);
  return (
    <Paper
      color="secondary"
      elevation={0}
      sx={{
        px: 2,
        pb: 2,
        pt: 3,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <Typography
        component="h2"
        variant="h6"
        sx={{ fontWeight: "bold", px: 2, mb: 2 }}
      >
        Messages
      </Typography>

      <Box
        sx={{
          flexGrow: 1,
          height: "65vh",
          maxHeight: "65vh",
          overflowY: "scroll",
          backgroundColor: '#EBDBCD',
        }}
      >
        {state.chat?.room?.chats &&
          state.chat?.room?.chats.map((item: any) => (
            <Box
              key={item?.id}
              sx={{
                display: "flex",
                px: 4,
                justifyContent:
                  state.home.user?.id == item?.user?.id
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <ChatBubble chat={item} />
            </Box>
          ))}

        {/* {loading && <Box>Loading...</Box>} */}
        {/* {error && <Box>{error}</Box>} */}
        {/* {data && } */}
        <div ref={ref}></div>
      </Box>

      <ChatTextBox />
    </Paper>
  );
}

export default MessagesContent;
