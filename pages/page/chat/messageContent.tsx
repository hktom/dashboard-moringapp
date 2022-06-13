// import { ChatBubble } from "@mui/icons-material";
import { Paper, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useRef } from "react";
// import { useDispatch } from "react-redux";
import { AppState, useAppSelector } from "../../../config/hooks";
import ChatBubble from "./chatBubble";
import ChatTextBox from "./chatTextBox";
// import { chatActionSaga } from "./reducer";
import { useSubscription, gql } from "@apollo/client";

function MessagesContent() {
  const state = useAppSelector((state: AppState) => state);
  const ref = useRef<any>(null);
  // const initialState = useRef<number>(0);
  // const dispatch = useDispatch();

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
    console.log("data", data?.newMessagesInRoom);
    console.log("loading", loading);
    console.error("error", error);
  }, [data, error, loading]);
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
        // alignItems:"flex-end"
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
          backgroundColor: grey[100],
        }}
      >
        {state.chat?.room?.chats &&
          state.chat?.room?.chats
            .concat(data?.newMessagesInRoom || [])
            .map((item: any) => (
              <Box
                key={item.id}
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
