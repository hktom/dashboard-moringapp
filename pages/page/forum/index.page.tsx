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
  const [category, setCategory] = useState<string>("");
  const [service, setService] = useState<string>("");
  const [forum, setForum] = useState<any[]>([]);

  const filterCategory = (id: string) => {
    if (id == category) {
      setCategory("");
      setForum(state.forum?.list!);
      return;
    }
    setCategory(id);
    setForum(
      state.forum?.list!.filter((item: any) => item.category?.id === id)
    );
  };

  const filterService = (id: string) => {
    if (id == service) {
      setCategory("");
      setForum(state.forum?.list!);
      return;
    }
    setCategory(id);
    setForum(state.forum?.list!.filter((item: any) => item.service?.id === id));
  };

  useEffect(() => {
    if (state.home?.user && initialState.current == 0) {
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
                    <Chip
                      key={i.id}
                      label={i.name}
                      sx={{ my: 1, mx: 1 }}
                      color={category == i.id ? "primary" : "default"}
                      onClick={() => filterCategory(i.id)}
                    />
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
                    <Chip
                      key={i.id}
                      label={i.name}
                      sx={{ my: 1, mx: 1 }}
                      color={category == i.id ? "primary" : "default"}
                      onClick={() => filterService(i.id)}
                    />
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
