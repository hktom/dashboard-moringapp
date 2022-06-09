import { Paper, Grid, Typography, TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { IUser } from "../action";

interface IProps {
  register: UseFormRegister<{} | IUser>;
}

export const SectionBasic = (props: IProps) => {
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
            id="name"
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
            id="name"
            label="Last name"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("last_name", { required: false })}
          />

          <TextField
            id="description"
            InputLabelProps={{
              shrink: true,
            }}
            label="Bio"
            multiline
            fullWidth
            sx={{ my: 1 }}
            color="info"
            rows={4}
            {...props.register("bio", { required: false })}
          />

          <TextField
            label="Mobile"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("mobile", { required: false })}
          />

          <TextField
            id="name"
            label="Website link"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("url", { required: false })}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};
