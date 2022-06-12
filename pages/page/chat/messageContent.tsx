// import { ChatBubble } from "@mui/icons-material";
import { Paper, Typography, Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useRef } from "react";
import { AppState, useAppSelector } from "../../../config/hooks";
import ChatBubble from "./chatBubble";
import ChatTextBox from "./chatTextBox";

function MessagesContent() {
  const state = useAppSelector((state: AppState) => state);
  const ref = useRef<any>(null);
  const initialState = useRef<number>(0);

  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });
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
        {state.chat?.room?.chats.map((item: any) => (
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
        <div ref={ref}></div>
      </Box>

      <ChatTextBox />
    </Paper>
  );
}

export default MessagesContent;
