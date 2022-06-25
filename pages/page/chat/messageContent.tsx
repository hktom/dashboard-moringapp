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

import { getFirestore, collection, query, where } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { firebaseApp } from "../../_app.page";

function MessagesContent() {
  const state = useAppSelector((state: AppState) => state);
  const ref = useRef<any>(null);
  const dispatch = useAppDispatch();

  const [value, loading, error] = useCollection(
    query(
      collection(getFirestore(firebaseApp), "messages"),
      where("room", "==", state.chat.room)
    ),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

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
          backgroundColor: "#EBDBCD",
        }}
      >
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value &&
          value.docs.map((doc) => (
            <Box
              key={doc.id}
              sx={{
                display: "flex",
                px: 4,
                justifyContent:
                  state.home.user?.id == doc.data().user
                    ? "flex-end"
                    : "flex-start",
              }}
            >
              <ChatBubble chat={doc.data()} />
            </Box>
          ))}

        <div ref={ref}></div>
      </Box>

      <ChatTextBox />
    </Paper>
  );
}

export default MessagesContent;
