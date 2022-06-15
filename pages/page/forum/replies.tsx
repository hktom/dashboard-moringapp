import { Paper, Divider, Typography, Box, IconButton } from "@mui/material";
import state from "pusher-js/types/src/core/http/state";
import ForumItem from "./forumItem";
import ForumTextBox from "./forumTextBox";
import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from "../../../config/hooks";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { forumAction } from "./reducer";

function Replies() {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();
  return (
    <Paper
      color="secondary"
      elevation={0}
      sx={{ mb: 4, pt: 5, px: 2, pb: 5, minHeight: "70vh" }}
    >
      <IconButton
        aria-label="back"
        onClick={() => dispatch(forumAction.setScreen(0))}
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <ForumItem question={state.forum.forum} onClick={() => {}} />

      <ForumTextBox isReply={true} />

      <Divider sx={{ mt: 4 }} />

      <Typography
        component="h3"
        variant="h6"
        sx={{ fontWeight: "bold", px: 2, mb: 5, mt: 5 }}
      >
        Replies
      </Typography>

      {state.forum!.forum.replies!.length == 0 && (
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            component="h3"
            variant="body1"
            sx={{ fontWeight: "bold", px: 2, mb: 5, mt: 5 }}
          >
            No replies
          </Typography>
        </Box>
      )}

      {state.forum!.forum?.replies!.length > 0 &&
        state.forum!.forum?.replies!.map((i: any) => (
          <ForumItem key={i.id} question={i} onClick={() => {}} />
        ))}
    </Paper>
  );
}

export default Replies;
