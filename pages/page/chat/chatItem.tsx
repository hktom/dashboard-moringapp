import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Divider,
} from "@mui/material";
import React, { useEffect } from "react";
import { HOST_URL } from "../../../config/apollo";
import ReactTimeAgo from "react-time-ago";
import { AppState, useAppSelector } from "../../../config/hooks";

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
            primary={
              <span style={{ fontWeight: "700" }}>
                {props.user?.first_name + " " + props.user?.last_name}
              </span>
            }
            secondary={
              <span
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                  marginTop: "5px",
                }}
              >
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.chat.length > 0 &&
                    [...props.chat].reverse()[0]?.content?.substring(0, 20)}
                  ...
                </Typography>

                <ReactTimeAgo
                  date={Date.parse(props.chat[0]?.created_at)}
                  locale="en-US"
                  style={{ fontSize: "0.7rem" }}
                />
              </span>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}

export default ChatItem;
