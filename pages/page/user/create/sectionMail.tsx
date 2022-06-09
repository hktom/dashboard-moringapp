import { Paper, Grid, Typography, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "../action";

interface IProps {
  register: UseFormRegister<{} | IUser>;
}

export const SectionEmail = (props: IProps) => {
  return (
    <Paper elevation={0} sx={{ p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Basic details
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            id="first name"
            InputLabelProps={{
              shrink: true,
            }}
            label="First name"
            variant="outlined"
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("first_name", { required: true })}
          />

          <TextField
            id="last name"
            InputLabelProps={{
              shrink: true,
            }}
            label="Last name"
            variant="outlined"
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("last_name", { required: true })}
          />

          <TextField
            id="email"
            label="Email"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("email", { required: true })}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
