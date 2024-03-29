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
  addCategoryFailure,
  getCategoryListSuccess,
  getCategorySuccess,
  ICategory,
} from "../action";
import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
// import { IRootState } from "../../../../config/reducer";
import { categoryAction, categoryActionSaga, ICategoryState } from "../reducer";
import { addCategory, getCategory, updateCategory } from "../action";
// import { uploadImageFailure } from "../../../store/image/actions";
import { getConditionList, ICondition } from "../../condition/action";
import { IConditionState } from "../../condition/reducer";
import { useRouter } from "next/router";
import { IServiceState } from "../../service/reducer";
import { IService } from "../../service/action";
import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from "../../../../config/hooks";

interface IProps {
  pid?: string;
}

function CreateCategory(props: IProps) {
  const { pid } = props;
  const router = useRouter();

  const [service, setService] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const initialState = React.useRef<number>(0);

  const state = useAppSelector((state: AppState) => state);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const handleChangeService = (event: SelectChangeEvent) => {
    setService(event.target.value as string);
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
      return appDispatch(
        categoryAction.actionCategoryFailed("Please upload image")
      );
    }

    let _condition: ICondition[] | undefined = state.condition?.list?.filter(
      (i: any) => i.value == +active
    );

    initialState.current == 1;

    let payload: any = {
      ...data,
      image: image,
      service: { id: service },
      condition: _condition && _condition[0],
    };

    appDispatch(categoryAction.activeCategoryAction());

    if (pid) {
      dispatch({
        type: categoryActionSaga.UPDATE_ITEM,
        payload: { ...payload, id: pid },
      });
    } else {
      dispatch({ type: categoryActionSaga.ADD_ITEM, payload: payload });
    }
  };

  // React.useEffect(() => {
  //   if (state.category.success && initialState.current == 1) {
  //     dispatch(
  //       getCategoryListSuccess(
  //         state.category
  //           ?.list!?.filter(
  //             (i: ICategory) => i.id != state.category.category?.id!
  //           )
  //           .concat(state.category.category!)!
  //       )
  //     );
  //     initialState.current++;
  //   }
  // }, [dispatch, state.category]);

  React.useEffect(() => {
    if (initialState.current == 0 && pid && state.category?.list!.length > 0) {
      let category: ICategory = state.category?.list?.find(
        (i: ICategory) => i.id === pid
      )!;
      dispatch(getCategorySuccess(category || undefined));
      setValue("name", category?.name || "");
      setValue("name_fr", category?.name_fr || "");
      setValue("description", category?.description || "");
      setActive(category?.condition?.value == 1 ?? false);
      setService(category?.service?.id || null);
      setImage(category?.image || undefined);

      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.category]);

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
            {state.category?.error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {state.category?.error}
              </Alert>
            )}

            {state.category?.success && (
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
                      {(state.service?.list ?? []).map((item: IService) => (
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
                  {state.category.isLoading && (
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
