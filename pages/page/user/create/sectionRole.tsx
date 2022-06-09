import {
  Paper,
  Grid,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useAppSelector, AppState } from "../../../../config/hooks";
import { IRole } from "../../role/action";

interface IProps {
  setRole: (role: string) => void;
  role: string;
}

export const SectionRole = (props: IProps) => {
  const state = useAppSelector((state: AppState) => state);

  const handleChangeRole = (event: SelectChangeEvent) => {
    props.setRole(event.target.value as string);
  };

  return (
    <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            Role *
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Role</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.role}
              label="Role"
              onChange={handleChangeRole}
            >
              {(state.role?.list ?? []).map((i: IRole) => (
                <MenuItem value={i.id} key={i.id}>
                  {i.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};
