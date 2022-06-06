import * as React from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
  // Breadcrumbs,
  // FormControl,
  // FormControlLabel,
  // InputAdornment,
  // InputLabel,
  // MenuItem,
  // OutlinedInput,
  // Select,
  // SelectChangeEvent,
  // Switch,
} from "@mui/material";

import Link from "next/link";
import { grey } from "@mui/material/colors";
import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import {
  addCountry,
  // addCountryFailure,
  getCountry,
  getCountryListSuccess,
  ICountry,
  updateCountry,
} from "../action";
// import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../config/reducer";
import { ICountryState } from "../reducer";
// import { uploadImageFailure } from "../../../store/image/actions";
import { useRouter } from "next/router";
import PageBreadCrumb from "../../../../components/PageBreadCrumb";

interface IProps {
  pid?: string;
}

function CreateCountry(props: IProps) {
  const { pid } = props;

  const state = useSelector(
    (state: IRootState): ICountryState => state.country
  );

  const router = useRouter();
  const initialState = React.useRef<number>(0);

  // const [active, setActive] = React.useState<boolean>(false);
  // const [image, setImage] = React.useState<string | undefined>(undefined);

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
    initialState.current = 1;
  };

  React.useEffect(() => {
    if (state.success && initialState.current === 1) {
      dispatch(
        getCountryListSuccess(
          state.list
            ?.filter((item: ICountry) => item.id !== state.country?.id)
            .concat(state.country!)!
        )
      );
      initialState.current++;
    }
  }, [dispatch, state.country, state.list, state.success]);

  React.useEffect(() => {
    if (pid && initialState.current === 0) {
      let country: ICountry | undefined = state.list?.find(
        (item: ICountry) => item.id === pid
      );
      setValue("name", country?.name!);
      setValue("name_fr", country?.name_fr!);
    }
  }, [pid, setValue, state.list]);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit" : "Create"} Country
          </Typography>

          <PageBreadCrumb page="Countries" link="country" />

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
