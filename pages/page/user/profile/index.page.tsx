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
import Layout from "../../../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from "@mui/icons-material/Edit";

import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

import { grey } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { IHomeState } from "../../home/reducer";
import { IRootState } from "../../../../config/reducer";
import { HOST_URL } from "../../../../config/apollo";
import { useRouter } from "next/router";
import { getUser, IUser } from "../action";
import { IUserState } from "../reducer";

interface IProps {
  label: string;
  value: string | undefined | number;
}

function ProfileItem(props: IProps) {
  const { label, value } = props;
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "start",
          flexDirection: { md: "row", xs: "column" },
          flexWrap: "wrap",
          py: 2,
        }}
      >
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="body1">{label}</Typography>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ color: grey[500] }}>
            {value}
          </Typography>
        </Box>
      </Box>
      <Divider />
    </>
  );
}

// interface IProfileProps {
//   pid?: string;
// }

function Profile() {
  const [state, setState] = React.useState<IUser | any>(undefined);
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const userState = useSelector((state: IRootState): IUserState => state.user);
  const dispatch = useDispatch();
  const router = useRouter();
  const pid: any = router.query?.pid;

  React.useEffect(() => {
    if (pid) {
      dispatch(getUser(pid));
    } else {
      setState({
        ...homeState.user,
        role: homeState?.role,
        condition: homeState?.condition,
      });
    }

    if (pid && userState.user) {
      setState(userState.user);
    }
  }, [
    dispatch,
    homeState.condition,
    homeState.role,
    homeState.user,
    pid,
    userState.user,
  ]);

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
                    alt={state?.first_name + " " + state?.last_name}
                    src={HOST_URL + "storage/" + state?.avatar}
                  />
                </ListItemAvatar>
                <ListItemText
                  secondary={
                    <>
                      <Typography
                        variant="h4"
                        component="span"
                        color="text.primary"
                        sx={{ fontWeight: "bold", display: "block" }}
                      >
                        {state?.email}
                      </Typography>

                      <Typography
                        variant="body1"
                        component="span"
                        color="text.primary"
                      >
                        user : {state?.id}
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
              <Button
                variant="contained"
                color="info"
                disableElevation
                onClick={() =>
                  router.push(
                    "/page/" +
                      (homeState.role?.value == 1 ? "user" : "profile") +
                      "/update?pid=" +
                      state?.id
                  )
                }
              >
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

              <ProfileItem label="First Name" value={state?.first_name} />
              <ProfileItem label="Last Name" value={state?.last_name} />
              <ProfileItem label="Email" value={state?.email} />
              <ProfileItem label="Mobile" value={state?.mobile} />
              <ProfileItem label="Url" value={state?.url} />
            </Paper>

            <Paper elevation={0} sx={{ py: 3, px: 3 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Bio
              </Typography>
              <Divider />

              <ProfileItem label="Bio" value={state?.bio} />
            </Paper>

            <Paper elevation={0} sx={{ py: 3, px: 3 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{ fontWeight: "bold", mb: 4 }}
              >
                Location
              </Typography>
              <Divider />

              <ProfileItem label="Street" value={state?.street} />
              <ProfileItem label="City" value={state?.city?.name} />
              <ProfileItem label="Country" value={state?.city?.country?.name} />
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
              <ProfileItem label="Role" value={state?.role?.name} />
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
              <Chip
                size="medium"
                label={state?.condition?.name}
                color={state?.condition?.value == 1 ? "success" : "error"}
                sx={{
                  mt: 2,
                  color: "secondary.main",
                  textTransform: "uppercase",
                  fontSize: "0.7rem",
                  fontWeight: "bold",
                }}
              />
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
                This action will delete your account and all your data forever.
                be sure to know what you are doing. If there is any problem let
                us know and we will help you. You can write to us at
                help@moringapp.com or call us at +966 544 544 544.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Layout>
    </>
  );
}

export default Profile;
