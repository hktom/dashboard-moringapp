import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getCookie, setCookies } from "cookies-next";
import Cookies from "js-cookie";
import {
  Alert,
  Avatar,
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
import { ILoginState } from "../../store/auth/reducer";
import { useForm } from "react-hook-form";
import { ILoginData, loginUser } from "../../store/auth/actions";
import { IRootState } from "../../config/reducer";
import { useRouter } from "next/router";

function Login() {
  const dispatch = useDispatch();

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
      // router.push("/page/");
      window.location.href = "/page/";
    }
  }, [loginState.login, router]);

  return (
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
            <Typography component="h1" variant="h4" sx={{ fontWeight: "bold" }}>
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
                autoFocus
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
  );
}

export default Login;
