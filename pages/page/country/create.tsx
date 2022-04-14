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
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import {
  addCountry,
  addCountryFailure,
  getCountry,
  ICountry,
  updateCountry,
} from "../../../store/country/action";
import ImageUploader from "../../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { ICountryState } from "../../../store/country/reducer";
import { uploadImageFailure } from "../../../store/image/actions";

interface IProps {
  pid?: string;
}

function CreateCountry(props: IProps) {
  const { pid } = props;

  const state = useSelector(
    (state: IRootState): ICountryState => state.country
  );

  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ICountry | {}>();

  const onSubmit = (data: any) => {
    if (pid) {
      dispatch(updateCountry({ ...data, id: pid }));
    } else {
      dispatch(addCountry(data));
    }
  };

  React.useEffect(() => {
    if (state.success) {
      setImage(undefined);
      dispatch(uploadImageFailure(undefined));
      reset({ data: {} });
    }
  }, [dispatch, reset, state.success, setValue]);

  React.useEffect(() => {
    if (pid) {
      dispatch(getCountry(pid));
    }
  }, [dispatch, pid, setValue]);

  React.useEffect(() => {
    if (state.country && pid) {
      setValue("name", state.country.name);
      setValue("name_fr", state.country.name_fr);
    }
  }, [state.country, setValue, pid]);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit" : "Create"} Country
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/page/">Dashboard</Link>
            <Link href="/page/country">Country</Link>
          </Breadcrumbs>

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
                    label="Name"
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
                    label="Name"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("name_fr", { required: true })}
                  />
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

export default CreateCountry;
