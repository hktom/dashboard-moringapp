import {
  Paper,
  Grid,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { UseFormRegister } from "react-hook-form";
import { AppState, useAppSelector } from "../../../../config/hooks";
import { ICity } from "../../city/action";
import { IUser } from "../action";

interface IProps {
  register: UseFormRegister<{} | IUser>;
  setCity: (city: string) => void;
  city: string;
}

export const SectionCity = (props: IProps) => {
  const state = useAppSelector((state: AppState) => state);

  const handleChangeCity = (event: SelectChangeEvent) => {
    props.setCity(event.target.value as string);
  };

  return (
    <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
      <Grid container>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            City *
          </Typography>
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Zip code"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("zip_code", { required: false })}
          />

          <TextField
            label="Street"
            variant="outlined"
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
            color="info"
            sx={{ my: 1 }}
            {...props.register("street", { required: false })}
          />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={props.city}
              label="City"
              onChange={handleChangeCity}
            >
              {(state.city?.list ?? []).map((i: ICity) => (
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
