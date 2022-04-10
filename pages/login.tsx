import * as React from "react";
import { useDispatch } from "react-redux";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
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
import { useState } from "react";
import { ILoginState } from "../reducer/login/reducer";
import { useForm } from "react-hook-form";
import { ILoginData, loginUser } from "../reducer/login/actions";

function Login() {
  const dispatch = useDispatch();
  
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

            <Alert severity="error" sx={{ width: "100%" }}>
              This is an error alert — check it out!
            </Alert>

            <Alert severity="success" sx={{ width: "100%" }}>
              This is a success alert — check it out!
            </Alert>

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
                disableElevation
                color="info"
                sx={{ mt: 3, mb: 2, py: 1.2 }}
              >
                Sign In
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
