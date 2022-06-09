import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  Paper,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "../action";

interface IProps {
  register: UseFormRegister<{} | IUser>;
}

export const SectionPassword = (props: IProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Password
          </Typography>

          <Typography variant="body2" component="p" sx={{ pr: 3 }}>
            {"Leave blank if you don't want to change it"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              {...props.register("password", { required: false })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Confirm password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showConfirmPassword ? "text" : "password"}
              {...props.register("confirm_password", { required: false })}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};
