import {
  Paper,
  Grid,
  Typography,
  FormControl,
  FormControlLabel,
  Switch,
} from "@mui/material";

interface IProps {
  active: boolean;
  setActive: (active: boolean) => void;
}

export const SectionCondition = (props: IProps) => {
  return (
    <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Active User
          </Typography>

          <Typography variant="body2" component="p" sx={{ pr: 3 }}>
            only active Users will be displayed on website
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <FormControl fullWidth sx={{ my: 1 }}>
            <FormControlLabel
              control={
                <Switch
                  color="success"
                  value={props.active}
                  checked={props.active}
                  onChange={() => props.setActive(!props.active)}
                />
              }
              label="Active"
            />
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};
