import * as React from "react";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { grey } from "@mui/material/colors";
import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import { addCity, addCityFailure, getCity, ICity, updateCity } from "../action";
// import ImageUploader from "../../../components/ImageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../config/reducer";
import { ICityState } from "../reducer";
// import { uploadImageFailure } from "../../../store/image/actions";
import { ICountryState } from "../../country/reducer";
// import { getCountryList, ICountry } from "../../../store/country/action";
import { useRouter } from "next/router";
import PageBreadCrumb from "../../../../components/PageBreadCrumb";
import { ICountry } from "../../country/action";

interface IProps {
  pid?: string;
}

function CreateCity(props: IProps) {
  const { pid } = props;

  const state = useSelector((state: IRootState): ICityState => state.city);

  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [country, setCountry] = React.useState<string>("");
  // const [countryOptions, setCountryOptions] = React.useState<ICountry[]>([]);

  const dispatch = useDispatch();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ICity | {}>();

  const onSubmit = (data: any) => {
    if (pid) {
      dispatch(updateCity({ ...data, id: pid, country: { id: country } }));
    } else {
      dispatch(addCity({ ...data, country: { id: country } }));
    }
  };

  const stateCountry = useSelector(
    (state: IRootState): ICountryState => state.country
  );

  React.useEffect(() => {
    if (state.success) {
      router.reload();
    }
    // if (stateCountry.list) {
    //   setCountryOptions(stateCountry.list);
    // }

    if (!state.city && pid) {
      dispatch(getCity(pid));
    }

    if (state.city && pid) {
      setValue("name", state.city.name);
      setValue("name_fr", state.city.name_fr);
      setCountry(state.city.country?.id);
    }
  }, [
    dispatch,
    pid,
    router,
    setValue,
    state.city,
    state.success,
    stateCountry,
  ]);

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit" : "Create"} City
          </Typography>

          <PageBreadCrumb page="city" link="city"></PageBreadCrumb>

          <Box
            component="form"
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {state.error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {state.error}
              </Alert>
            )}

            {state.success && (
              <Alert severity="success" sx={{ my: 1 }}>
                Operation Successful
              </Alert>
            )}

            <Paper elevation={0} sx={{ p: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Basic details
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <TextField
                    id="name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Name EN"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("name", { required: true })}
                  />
                  <TextField
                    id="name"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Name FR"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("name_fr", { required: false })}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Country
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={country}
                      label="Country"
                      onChange={handleChangeCountry}
                    >
                      {(stateCountry.list ?? []).map((i: ICountry) => (
                        <MenuItem value={i.id} key={i.id}>
                          {i.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>

            <Grid container sx={{ mt: 4 }}>
              <Grid item xs={12} md={8}>
                <Button variant="text" color="error">
                  Delete
                </Button>
              </Grid>

              <Grid
                item
                xs={12}
                md={4}
                sx={{ justifyContent: "end", display: "flex" }}
              >
                <Button variant="outlined" color="info" sx={{ mx: 2 }}>
                  Cancel
                </Button>

                <Button
                  variant="contained"
                  color="info"
                  disableElevation
                  type="submit"
                >
                  Create{" "}
                  {state.isLoading && (
                    <CircularProgress
                      color="secondary"
                      size={20}
                      sx={{ ml: 2 }}
                    />
                  )}
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default CreateCity;
