import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Sidebar from "./Sidebar";
import { Alert, Avatar, LinearProgress, Stack } from "@mui/material";
import { getUserProfile } from "../pages/page/home/actions";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../config/reducer";
import { IHomeState } from "../pages/page/home/reducer";
import { HOST_URL } from "../config/apollo";
import AccountMenu from "./AccountMenu";
import Head from "next/head";
import { useRouter } from "next/router";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

type DashboardLayoutProps = {
  children: React.ReactNode;
};
export interface ISidebar {
  open: boolean;
  handleDrawerClose: () => void;
  theme: Theme;
}
const Layout = ({ children }: DashboardLayoutProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const homeState = useSelector((state: IRootState): IHomeState => state.home);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!homeState.user) dispatch(getUserProfile());
  }, [dispatch, homeState]);

  return (
    <>
      <Head>
        <title>Dashboard</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} color="secondary" elevation={0}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", justifyContent: "start" }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: 5,
                  ...(open && { display: "none" }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Moringapp
              </Typography>
            </Box>

            <Stack>
              <AccountMenu user={homeState.user}></AccountMenu>
              {/* <Avatar
              alt={homeState.user?.first_name + " " + homeState.user?.last_name}
              src={HOST_URL + "storage/" + homeState.user?.avatar}
              sx={{ width: 35, height: 35 }}
            /> */}
            </Stack>
          </Toolbar>
        </AppBar>

        <Sidebar
          open={open}
          theme={theme}
          handleDrawerClose={handleDrawerClose}
        ></Sidebar>

        <Box
          component="main"
          sx={{ flexGrow: 1, px: 1, pt: 10, maxWidth: "1330px", mx: "auto" }}
        >
          {homeState.loading && <LinearProgress />}
          {homeState.error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {homeState.error}
            </Alert>
          )}
          {children}
        </Box>
      </Box>
    </>
  );
};

export default Layout;
