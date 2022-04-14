import {
  Avatar,
  Box,
  Button,
  CardMedia,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  DataGrid,
} from "@mui/x-data-grid";

import * as React from "react";
import Layout from "../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import { grey } from "@mui/material/colors";

function Profile() {
  return (
    <>
      <Layout>
        <Grid container>
          <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: "bold" }}
              >
                Profile
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} md={8} sx={{ pl: { xs: 0, md: 12 } }}>
            <List sx={{ width: "100%", maxWidth: "100%" }}>
              <ListItem alignItems="flex-start">
                <ListItemAvatar sx={{ mr: 3 }}>
                  <Avatar
                    sx={{ width: 70, height: 70 }}
                    alt="Remy Sharp"
                    src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/avatars/5e/5e0832fcdd1f5cf564497e91bafed886264a4fdd_full.jpgƒ"
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <>
                      <Typography
                        variant="h4"
                        component="h3"
                        color="text.primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        tom@gmail.com
                      </Typography>

                      <Typography
                        variant="body1"
                        component="p"
                        color="text.primary"
                      >
                        user : ucymkqsjh490v15b3jy198gvzsevjf8fal4e6
                      </Typography>
                    </>
                  }
                />
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={12}
            md={3}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "end",
            }}
          >
            <Box sx={{ bgColor: "blue" }}>
              <Button variant="contained" color="info" disableElevation>
                <EditIcon /> Edit
              </Button>
            </Box>
          </Grid>

          <Grid item xs={12} md={10} sx={{ mx: "auto", mt: 3 }}>
            <Paper elevation={0} sx={{ py: 3, px: 3 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Details
              </Typography>
              <Divider />
              {/* {[1, 2, 3, 4, 5].map((i) => (
                <>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "start",
                      py: 2,
                    }}
                  >
                    <Box sx={{ minWidth: 200 }}>
                      <Typography variant="body1">Email</Typography>
                    </Box>
                    <Box>
                      <Typography variant="body1" sx={{ color: grey[500] }}>
                        tom@gmail.com
                      </Typography>
                    </Box>
                  </Box>
                  <Divider />
                </>
              ))} */}
            </Paper>

            <Paper elevation={0} sx={{ py: 3, px: 3, mt: 5 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Role
              </Typography>
              <Divider />
            </Paper>

            <Paper elevation={0} sx={{ py: 3, px: 3, mt: 5 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Status
              </Typography>
              <Divider />
            </Paper>

            <Paper elevation={0} sx={{ py: 3, px: 3, mt: 5, mb: 5 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Data Management
              </Typography>
              <Divider />

              <Button
                variant="outlined"
                color="error"
                disableElevation
                sx={{ mt: 4 }}
              >
                Delete Account
              </Button>

              <Typography
                component="p"
                variant="body1"
                sx={{ mt: 2, color: grey[500] }}
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Commodi quaerat amet corporis corrupti recusandae.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Profile;
