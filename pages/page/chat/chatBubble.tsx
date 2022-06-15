import { Box, Typography } from "@mui/material";
import ReactTimeAgo from "react-time-ago";
import { AppState, useAppSelector } from "../../../config/hooks";

interface IProps {
  chat: any;
}

function ChatBubble(props: IProps) {
  const state = useAppSelector((state: AppState) => state.home?.user);
  return (
    <Box
      className={`chat-bubble ${
        state?.id == props.chat?.user?.id
          ? "chat-bubble-from"
          : "chat-bubble-to"
      }`}
    >
      <Typography
        component="p"
        variant="body1"
        sx={{ textAlign: state?.id == props.chat?.user?.id ? "left" : "right" }}
      >
        {props.chat?.content}
      </Typography>
      <Typography
        component="p"
        variant="subtitle1"
        sx={{
          fontSize: "0.7rem",
          textAlign: state?.id != props.chat?.user?.id ? "left" : "right",
        }}
      >
        <ReactTimeAgo date={Date.parse(props.chat.created_at)} locale="en-US" />
      </Typography>
    </Box>
  );
}

export default ChatBubble;
