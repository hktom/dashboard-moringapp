import { Grid, Paper, Typography } from "@mui/material";
import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../config/hooks";
import Layout from "../../../layout/Layout";
import ChatItem from "./chatItem";
import { chatAction } from "./reducer";

function Chat() {
  const state = useAppSelector((state: AppState) => state);
  const dispatch = useAppDispatch();

  const goToChat = (chat: any) => {
    dispatch(chatAction.getChatsItemSuccess(chat));
  };
  return (
    <Layout>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10 }}>
        <Grid item xs={12} md={4}>
          <Paper color="secondary" elevation={0} sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Inbox
            </Typography>

            {state.chat?.rooms?.map((item: any) => (
              <ChatItem
                key={item.id}
                user={item.user_to}
                chat={item.chats}
                onClick={() => goToChat(item.chats)}
              />
            ))}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}></Grid>
      </Grid>
    </Layout>
  );
}

export default Chat;
