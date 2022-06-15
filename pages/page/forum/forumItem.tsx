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
  question: any;
  onClick: (chats: any) => void;
}

function ForumItem(props: IProps) {
  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "background.paper",
          cursor: "pointer",
        }}
        onClick={props.onClick}
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar
              alt={
                props.question?.user?.first_name +
                "-" +
                props.question?.user?.last_name
              }
              src={
                props.question?.user?.avatar &&
                HOST_URL + "storage/" + props.question?.user?.avatar
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary={
              <span style={{ fontWeight: "700" }}>
                {props.question?.user?.first_name +
                  " " +
                  props.question?.user?.last_name}
              </span>
            }
            secondary={
              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "start",
                  alignItems: "start",
                  marginTop: "5px",
                }}
              >
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {props.question?.content}
                </Typography>

                <span
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                  }}
                >
                  <ReactTimeAgo
                    date={Date.parse(props.question?.created_at)}
                    locale="en-US"
                    style={{ fontSize: "0.7rem", marginTop: "6px" }}
                  />

                  {props.question?.replies && (
                    <Typography
                      sx={{ fontSize: "0.7rem", marginTop: "6px" }}
                      component="span"
                      color="text.primary"
                    >
                      {props.question?.replies.length} replies
                    </Typography>
                  )}
                </span>
              </span>
            }
          />
        </ListItem>
        <Divider />
      </List>
    </>
  );
}

export default ForumItem;
