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
  data: any;
  onClick: (chats: any) => void;
}

function ChatItem(props: IProps) {
  const { data, onClick } = props;
  const state = useAppSelector((state: AppState) => state);
  const user = state.home.user?.id == data.from?.id ? data.to : data.from;

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
              alt={user?.first_name + "-" + user?.last_name}
              src={user?.avatar && HOST_URL + "storage/" + user?.avatar}
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span style={{ fontWeight: "700" }}>
                {user?.first_name + " " + user?.last_name}
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
                  {data.last_message.substring(0, 20)}
                  ...
                </Typography>

                <ReactTimeAgo
                  date={new Date(data.updated_at.seconds * 1000)}
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
