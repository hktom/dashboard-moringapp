import { Paper, Typography, Box } from "@mui/material";
import ChatTextBox from "./chatTextBox";

function MessagesContent() {
  return (
    <Paper
      color="secondary"
      elevation={0}
      sx={{
        px: 2,
        pb: 2,
        pt: 3,
        height: "85vh",
        maxHeight: "85vh",
        overflowY: "scroll",
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

      <Box sx={{ flexGrow: 1 }}></Box>

      <ChatTextBox />
    </Paper>
  );
}

export default MessagesContent;
