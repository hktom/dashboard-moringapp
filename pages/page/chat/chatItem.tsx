import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React from "react";
import { HOST_URL } from "../../../config/apollo";
import ReactTimeAgo from "react-time-ago";

interface IProps {
  user: any;
  chat: any;
  onClick: (chats: any) => void;
}

function ChatItem(props: IProps) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={props.user?.first_name + "-" + props.user?.last_name}
              src={
                props.user?.avatar && HOST_URL + "storage/" + props.user?.avatar
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={props.user?.first_name + " " + props.user?.last_name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.chat.length > 0 &&
                    props.chat[0]?.content?.substr(0, 20)}
                </Typography>
                <ReactTimeAgo
                  date={
                    props.chat.length > 0 && props.chat[0]?.content?.created_at
                  }
                  locale="en-US"
                />
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}

export default ChatItem;
