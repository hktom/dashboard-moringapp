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
import { ICategory } from "../../../reducer/category/action";
import ImageUploader from "../../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { ICategoryState } from "../../../reducer/category/reducer";
import {
  addCategory,
  getCategory,
  updateCategory,
} from "../../../reducer/category/action";
import { uploadImageFailure } from "../../../reducer/image/actions";
import {
  getConditionList,
  ICondition,
} from "../../../reducer/condition/action";
import { IConditionState } from "../../../reducer/condition/reducer";

interface IProps {
  pid?: string;
}

function CreateCategory(props: IProps) {
  const { pid } = props;

  // const [condition, setCondition] = React.useState<string | null>(null);
  // const [category, setCategory] = React.useState<string>("");
  // const [categoryList, setCategoryList] = React.useState<
  //   ICategory[] | undefined
  // >([]);
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const state = useSelector(
    (state: IRootState): ICategoryState => state.category
  );

  const conditionState = useSelector(
    (state: IRootState): IConditionState => state.condition
  );

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<ICategory>();

  // const onSubmit = (data: any) => {
  //   // dispatch(loginUser(data!));
  //   console.log(
  //     data,
  //     +can_be_booked,
  //     +can_be_urgent,
  //     +accept_offer,
  //     +active,
  //     image
  //   );
  // };

  // const handleChangeCategory = (event: SelectChangeEvent) => {
  //   setCategory(event.target.value as string);
  // };

  const onSubmit = (data: any) => {
    if (pid) {
      dispatch(updateCategory({ ...data, id: pid }));
    } else {
      dispatch(addCategory(data));
    }
  };

  React.useEffect(() => {
    // if (!conditionState.list) {
    //   dispatch(getConditionList());
    // } else {
    //   setCategoryList(state.list);
    // }

    if (state.success) {
      setImage(undefined);
      dispatch(uploadImageFailure(undefined));
      // reset({ data: {} });
    }

    if (pid) {
      dispatch(getCategory(pid));
    }

    if (state.category && pid) {
      setValue("name", state.category.name);
      setValue("name_fr", state.category.name_fr);
      setValue("description", state.category.description);
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
                    {...register("name", { required: true })}
                  />

                  <TextField
                    id="name"
                    label="Name FR"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("name_fr", { required: true })}
                  />

                  <TextField
                    id="outlined-multiline-static"
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
                          onChange={() => setActive(!active)}
                        />
                      }
                      label="Active"
                    />
                  </FormControl>
                </Grid>
              </Grid>
            </Paper>

            {/* <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Category *
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={category}
                      label="Category"
                      onChange={handleChangeCategory}
                    >
                      {categoryList?.map((item: ICategory) => (
                        <MenuItem value={item.id} key={item.id}>
                          {item.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
            </Paper> */}

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
                  <CircularProgress
                    color="secondary"
                    size={20}
                    sx={{ ml: 2 }}
                  />
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
