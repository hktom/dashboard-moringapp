import {
  Alert,
  Card,
  CardMedia,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useRef, useState } from "react";
import { HOST_URL } from "../../../config/apollo";
import { AppState, useAppSelector } from "../../../config/hooks";
import Layout from "../../../layout/Layout";
import ForumItem from "./forumItem";
import ForumTextBox from "./forumTextBox";
import Questions from "./questions";
import Replies from "./replies";

function Forums() {
  const state = useAppSelector((state: AppState) => state);
  const initialState = useRef<number>(0);
  // const [forumPage, setForumPage] = useState<any>(undefined);

  const [forum, setForum] = useState<any[]>([]);

  useEffect(() => {
    if (state.home?.user && initialState.current == 0) {
      // setForumPage(state.content?.list?.find((i: any) => i.value == "forum"));
      setForum(state.forum?.list!);
      initialState.current++;
    }
  }, [state.forum?.list, state.home?.user]);
  return (
    <Layout>
      <Grid container spacing={3} sx={{ mt: 1, mb: 10, px: 2 }}>
        <Grid item xs={12} md={12}>
          <Paper color="secondary" elevation={0} sx={{ mb: 4, pt: 5 }}>
            <Typography
              component="h2"
              variant="h4"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Forum
            </Typography>

            <Box
              sx={{
                backgroundImage: "url(/mob-people-forum.jpeg)",
                width: "100%",
                height: "100px",
                backgroundSize: "contain",
                backgroundRepeat: "repeat-x",
                backgroundPosition: "bottom",
              }}
            />
          </Paper>

          {state.forum.error && (
            <Alert severity="error" sx={{ my: 1 }}>
              {state.forum.error}
            </Alert>
          )}

          {state.forum.success && (
            <Alert severity="success" sx={{ my: 1 }}>
              Your post is under review. It will be published after approval.
            </Alert>
          )}

          <Grid container spacing={3} sx={{ mt: 1 }}>
            <Grid item xs={12} md={8}>
              {state.forum.screen == 0 ? (
                <Questions forum={forum} />
              ) : (
                <Replies />
              )}
            </Grid>
            <Grid item xs={12} md={4}>
              {/* {forumPage && (
                <Card elevation={0}>
                  <CardMedia
                    component="img"
                    src={HOST_URL + "storage/" + forumPage.image}
                    alt="Forum"
                    sx={{ width: "100%", height: "250px" }}
                  />

                  <Typography
                    component="h3"
                    variant="h5"
                    sx={{ fontWeight: "bold", px: 2, mb: 2 }}
                  >
                    {forumPage.title}
                  </Typography>
                </Card>
              )} */}

              <Paper elevation={0} color="secondary" sx={{ px: 2, py: 2 }}>
                <Typography
                  component="h3"
                  variant="body1"
                  sx={{ fontWeight: "bold", px: 2, mb: 2, mt: 5 }}
                >
                  Filter
                </Typography>

                <Divider />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    mt: 2,
                    mb: 2,
                  }}
                >
                  {state.category.list?.map((i: any) => (
                    <Chip key={i.id} label={i.name} sx={{ my: 1, mx: 1 }} />
                  ))}
                </Box>

                <Divider />

                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "start",
                    flexWrap: "wrap",
                    mt: 2,
                  }}
                >
                  {state.service.list?.map((i: any) => (
                    <Chip key={i.id} label={i.name} sx={{ my: 1, mx: 1 }} />
                  ))}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Forums;
