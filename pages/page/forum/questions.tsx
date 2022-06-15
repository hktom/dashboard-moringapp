import { Paper, Divider, Typography, Box } from "@mui/material";
import state from "pusher-js/types/src/core/http/state";
import { useAppDispatch } from "../../../config/hooks";
import ForumItem from "./forumItem";
import ForumTextBox from "./forumTextBox";
import { forumAction } from "./reducer";

interface IProps {
  forum: any;
}

function Questions(props: IProps) {
  const dispatch = useAppDispatch();
  return (
    <Paper
      color="secondary"
      elevation={0}
      sx={{ mb: 4, pt: 5, px: 2, pb: 5, minHeight: "70vh" }}
    >
      <ForumTextBox />

      <Divider sx={{ mt: 4 }} />

      <Typography
        component="h3"
        variant="h6"
        sx={{ fontWeight: "bold", px: 2, mb: 5, mt: 5 }}
      >
        Recent Questions
      </Typography>

      {props.forum!.length == 0 && (
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
            No Question found
          </Typography>
        </Box>
      )}

      {props.forum!.length > 0 &&
        props.forum!.map((i: any) => (
          <ForumItem
            key={i.id}
            question={i}
            onClick={() => {
              dispatch(forumAction.setScreen(1));
              dispatch(forumAction.setForum(i));
            }}
          />
        ))}
    </Paper>
  );
}

export default Questions;
