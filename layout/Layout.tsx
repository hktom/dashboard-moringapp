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
// import { IRootState } from "../config/reducer";
import { homeActionSaga, IHomeState } from "../pages/page/home/reducer";
import { HOST_URL } from "../config/apollo";
import AccountMenu from "./AccountMenu";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { AppState, useAppSelector } from "../config/hooks";
import { AppBar } from "./constants";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: DashboardLayoutProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  // const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const homeState = useAppSelector((state: AppState) => state.home);
  const initialState = React.useRef<number>(0);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (!homeState.user && initialState.current === 0) {
      dispatch({ type: homeActionSaga.GET_ITEM! });
      initialState.current++;
    }
  }, [dispatch, homeState]);

  React.useEffect(() => {
    let token = Cookies.get("token");
    if (!token) {
      window.location.href = "/auth/login";
    }
  }, []);

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
            </Stack>
          </Toolbar>
        </AppBar>

        <Sidebar
          open={open}
          theme={theme}
          handleDrawerClose={handleDrawerClose}
        />

        <Box
          component="main"
          sx={{ flexGrow: 1, px: 1, pt: 10, maxWidth: "1500px", mx: "auto" }}
        >
          {homeState.isLoading && <LinearProgress />}
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
