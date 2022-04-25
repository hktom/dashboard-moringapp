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
  Link,
  MenuItem,
  OutlinedInput,
  Paper,
  Select,
  SelectChangeEvent,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import {
  addService,
  addServiceFailure,
  getService,
  IService,
  updateService,
} from "../action";
import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../config/reducer";
import { IServiceState } from "../reducer";
// import { uploadImageFailure } from "../../../store/image/actions";
import { IConditionState } from "../../condition/reducer";
import { ICondition } from "../../condition/action";
import { useRouter } from "next/router";

interface IProps {
  pid?: string;
}

function CreateService(props: IProps) {
  const { pid } = props;

  const router = useRouter();

  const serviceState = useSelector(
    (state: IRootState): IServiceState => state.service
  );

  const conditionState = useSelector(
    (state: IRootState): IConditionState => state.condition
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
  } = useForm<IService | {}>();

  const onSubmit = (data: any) => {
    if (!image) {
      return dispatch(addServiceFailure("Please upload an image"));
    }

    let _condition: ICondition[] | undefined = conditionState?.list?.filter(
      (i: any) => i.value == +active
    );

    if (pid) {
      return dispatch(
        updateService({
          ...data,
          image: image,
          id: pid,
          condition: _condition && _condition[0],
        })
      );
    }

    dispatch(
      addService({
        ...data,
        image: image,
        condition: _condition && _condition[0],
      })
    );
  };

  React.useEffect(() => {
    if (serviceState.success) {
      // setImage(undefined);
      // dispatch(uploadImageFailure(undefined));
      // reset({ data: {} });
      router.reload();
    }

    if (pid) {
      dispatch(getService(pid));
    }

    if (serviceState.service && pid) {
      setValue("name", serviceState.service.name);
      setValue("description", serviceState.service.description);
      setValue("name_fr", serviceState.service.name_fr);
      setActive(serviceState.service.condition?.value === 1 ?? false);
      setImage(serviceState.service?.image);
    }
  }, [
    dispatch,
    pid,
    reset,
    router,
    serviceState.service,
    serviceState.success,
    setValue,
  ]);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit Service" : "Create a new service"}
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Dashboard
            </Link>
            <Link underline="hover" color="inherit" href="#">
              Service
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
          </Breadcrumbs>

          <Box
            component="form"
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {serviceState.error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {serviceState.error}
              </Alert>
            )}

            {serviceState.success && (
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
                    label="Name FR"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("name_fr", { required: false })}
                  />

                  <TextField
                    id="description"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Description"
                    multiline
                    fullWidth
                    sx={{ my: 1 }}
                    color="info"
                    rows={4}
                    {...register("description", { required: true })}
                  />
                </Grid>
              </Grid>
            </Paper>

            <Paper elevation={0} sx={{ mt: 2, p: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4} sx={{ pr: 5 }}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Images
                  </Typography>

                  <Typography variant="body2" component="p">
                    The image will appear on website and mobile app.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <ImageUploader setImageField={setImage} image={image} />
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
                    Active Service
                  </Typography>

                  <Typography variant="body2" component="p" sx={{ pr: 3 }}>
                    only active services will be displayed on website
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="success"
                          value={active}
                          checked={active}
                          onChange={() => setActive(!active)}
                        />
                      }
                      label="Active"
                    />
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
                  {serviceState.isLoading && (
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

export default CreateService;
