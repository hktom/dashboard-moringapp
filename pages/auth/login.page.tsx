import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCookie, setCookies } from "cookies-next";
import Cookies from "js-cookie";
import {
  Alert,
  Avatar,
  Backdrop,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  CssBaseline,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Copyright } from "@mui/icons-material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useEffect, useState } from "react";
import { ILoginState } from "./reducer";
import { useForm } from "react-hook-form";
import { ILoginData, loginUser, ssoLogin } from "./actions";
import { IRootState } from "../../config/reducer";
import { useRouter } from "next/router";
import Head from "next/head";

function Login() {
  const dispatch = useDispatch();

  const [openBackdrop, setOpenBackdrop] = useState<boolean>(false);

  const handleCloseBackdrop = () => {
    setOpenBackdrop(false);
  };

  const loginState = useSelector(
    (state: IRootState): ILoginState => state.login
  );

  const router = useRouter();

  const goTo = (path: string) => router.push(path);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILoginData>();

  const onSubmit = (data: any) => {
    dispatch(loginUser(data!));
    console.log(data);
  };

  useEffect(() => {
    if (loginState.login?.token) {
      Cookies.set("token", loginState.login.token!, { expires: 7 });
      window.location.href = "/page/home";
    }

    if (loginState.login.error) {
      setOpenBackdrop(false);
    }

    if (router?.query?.id && !loginState.login?.sso) {
      dispatch(ssoLogin(router?.query?.id));
      setOpenBackdrop(true);
    }
  }, [dispatch, loginState.login, router]);

  useEffect(() => {
    let token = Cookies.get("token");
    if (token) {
      window.location.href = "/page/home";
    }
  }, []);

  return (
    <>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackdrop}
        onClick={handleCloseBackdrop}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Box
        sx={{
          minHeight: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ maxWidth: "50rem", pb: 8 }} color="#fff">
          <Container component="main" maxWidth="xs">
            <CssBaseline />

            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                component="h1"
                variant="h4"
                sx={{ fontWeight: "bold" }}
              >
                Log in
              </Typography>

              {loginState.login.error && (
                <Alert severity="error" sx={{ width: "100%" }}>
                  {loginState.login.error}
                </Alert>
              )}

              {loginState.login.token && (
                <Alert severity="success" sx={{ width: "100%" }}>
                  You are logged in!
                </Alert>
              )}

              <Box
                component="form"
                noValidate
                sx={{ mt: 1 }}
                onSubmit={handleSubmit(onSubmit)}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoComplete="email"
                  disabled={loginState.login.loading}
                  autoFocus
                  // defaultValue={
                  //   new URLSearchParams(window.location.search)?.get("id") ?? ""
                  // }
                  {...register("email", { required: true })}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  {...register("password", { required: true })}
                  label="Password"
                  type="password"
                  id="password"
                  disabled={loginState.login.loading}
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  disabled={loginState.login.loading}
                  disableElevation
                  color="info"
                  sx={{ mt: 3, mb: 2, py: 1.2 }}
                >
                  Sign In{" "}
                  {loginState.login.loading && (
                    <CircularProgress
                      color="secondary"
                      size={20}
                      sx={{ ml: 2 }}
                    />
                  )}
                </Button>

                <Box sx={{ mx: "auto", textAlign: "center" }}>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Box>
              </Box>
            </Box>
          </Container>
        </Paper>
      </Box>
    </>
  );
}

export default Login;
