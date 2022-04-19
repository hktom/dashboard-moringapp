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
import Layout from "../../../layout/Layout";
import { useForm } from "react-hook-form";
import {
  addCategoryFailure,
  ICategory,
} from "../../../store/category/action";
import ImageUploader from "../../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { ICategoryState } from "../../../store/category/reducer";
import {
  addCategory,
  getCategory,
  updateCategory,
} from "../../../store/category/action";
import { uploadImageFailure } from "../../../store/image/actions";
import {
  getConditionList,
  ICondition,
} from "../../../store/condition/action";
import { IConditionState } from "../../../store/condition/reducer";
import { useRouter } from "next/router";
import { IServiceState } from "../../../store/service/reducer";
import { IService } from "../../../store/service/action";

interface IProps {
  pid?: string;
}

function CreateCategory(props: IProps) {
  const { pid } = props;
  const router = useRouter();

  const [service, setService] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const state = useSelector(
    (state: IRootState): ICategoryState => state.category
  );

  const conditionState = useSelector(
    (state: IRootState): IConditionState => state.condition
  );

  const serviceState = useSelector(
    (state: IRootState): IServiceState => state.service
  );

  const dispatch = useDispatch();

  const handleChangeService = (event: SelectChangeEvent) => {
    setService(
      serviceState.list.filter(
        (item) => item.id === (event.target.value as string)
      )[0]?.id
    );
  };

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ICategory>();

  const onSubmit = (data: any) => {
    if (!image) {
      return dispatch(addCategoryFailure("Please upload an image"));
    }

    let _condition: ICondition[] | undefined = conditionState?.list?.filter(
      (i: any) => i.value == +active
    );

    if (pid) {
      return dispatch(
        updateCategory({
          ...data,
          image: image,
          service: { id: service },
          condition: _condition && _condition[0],
          id: pid,
        })
      );
    }

    dispatch(
      addCategory({
        ...data,
        image: image,
        service: { id: service },
        condition: _condition && _condition[0],
      })
    );
  };

  React.useEffect(() => {
    if (state.success) {
      router.reload();
      return;
    }

    if (pid) {
      dispatch(getCategory(pid));
    }

    if (state.category && pid) {
      setValue("name", state.category.name);
      setValue("name_fr", state.category.name_fr);
      setValue("description", state.category.description);
      setActive(state.category?.condition?.value == 1 ?? false);
      setService(state.category.service?.id);
      setImage(state.category?.image);
    }
  }, [
    dispatch,
    reset,
    state.success,
    setValue,
    pid,
    state.category,
    conditionState.list,
    state.list,
    router,
  ]);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            Create a new category
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
              Dashboard
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/material-ui/getting-started/installation/"
            >
              category
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
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
                    label="Name EN"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("name", { required: true })}
                  />

                  <TextField
                    id="name"
                    label="Name FR"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                    {...register("name_fr", { required: false })}
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    fullWidth
                    sx={{ my: 1 }}
                    color="info"
                    rows={4}
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    Active category
                  </Typography>

                  <Typography variant="body2" component="p">
                    only active category will be displayed on website
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="info"
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

            <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Service *
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Service
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={service}
                      label="Category"
                      onChange={handleChangeService}
                    >
                      {(serviceState.list ?? []).map((item: IService) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
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

export default CreateCategory;
