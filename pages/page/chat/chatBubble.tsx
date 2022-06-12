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
      <Typography component="p" variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos dolore
        dolorum quasi illo culpa provident, aperiam totam excepturi praesentium
        beatae labore! Aperiam, perspiciatis! Maxime laudantium quos, voluptate
        architecto ut minima?
      </Typography>
      <Typography component="p" variant="subtitle1">
        <ReactTimeAgo
          date={props.chat.length > 0 && props.chat[0]?.content?.created_at}
          locale="en-US"
        />
      </Typography>
    </Box>
  );
}

export default ChatBubble;
