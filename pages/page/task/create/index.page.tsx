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

import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import { addTaskFailure, ITask } from "../action";
import { ICategory } from "../../category/action";
import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";

import { ICondition } from "../../condition/action";
import { useRouter } from "next/router";
import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from "../../../../config/hooks";
import { taskAction, taskActionSaga } from "../reducer";

export interface IProps {
  pid?: string;
}
function CreateTask(props: IProps) {
  const [category, setCategory] = React.useState<string>("");
  const { pid } = props;
  const router = useRouter();

  const [can_be_booked, setCanBeBooked] = React.useState<boolean>(false);
  const [can_be_urgent, setCanBeUrgent] = React.useState<boolean>(false);
  const [accept_offer, setAcceptOffer] = React.useState<boolean>(false);
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const state = useAppSelector((state: AppState) => state);

  const initialState = React.useRef<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ITask>();

  const onSubmit = (data: any) => {
    if (!image || !category) {
      appDispatch(
        taskAction.actionTaskFailure("Please select image and category")
      );
      return;
    }

    let _condition: ICondition[] | undefined = state.condition?.list?.filter(
      (i: any) => i.value == +active
    );

    let payload: any = {
      ...data,
      image: image,
      can_be_booked: +can_be_booked,
      can_be_urgent: +can_be_urgent,
      accept_offer: +accept_offer,
      active: { id: active },
      category: { id: category },
      user: { id: state.home.user?.id },
      condition: _condition && _condition[0],
    };

    if (pid) {
      dispatch({
        type: taskActionSaga.ADD_ITEM,
        payload: { ...payload, id: pid },
      });
    } else {
      dispatch({ type: taskActionSaga.ADD_ITEM, payload: payload });
    }
  };

  React.useEffect(() => {
    if (pid && state.task.list!.length > 0 && initialState.current == 0) {
      let task: ITask = state.task.list!.find(
        (i: ITask) => i.id == pid
      ) as ITask;
      setValue("name", task.name);
      setValue("min_price", task.min_price);
      setValue("price_by_hour", task.price_by_hour);
      setValue("description", task.description);

      setCanBeUrgent(task.can_be_urgent == 1 ?? false);
      setCanBeBooked(task.can_be_booked == 1 ?? false);
      setAcceptOffer(task.accept_offer == 1 ?? false);
      setActive(task.condition?.value == 1 ?? false);

      setImage(task.image);

      setCategory(task.category?.id);

      initialState.current++;
    }
  }, [pid, setValue, state.task]);

  const handleChangeCategory = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit" : "Create"} a task
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
              Task
            </Link>
            {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
          </Breadcrumbs>

          <Box
            component="form"
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {state.task.error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {state.task.error}
              </Alert>
            )}

            {state.task.success && (
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
                    label="Name"
                    variant="outlined"
                    fullWidth
                    color="info"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ my: 1 }}
                    {...register("name", { required: true })}
                  />

                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    fullWidth
                    sx={{ my: 1 }}
                    color="info"
                    InputLabelProps={{
                      shrink: true,
                    }}
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
                    Options
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="info"
                          value={can_be_urgent}
                          checked={can_be_urgent}
                          onChange={() => setCanBeUrgent(!can_be_urgent)}
                        />
                      }
                      label="Can be urgent"
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="info"
                          checked={can_be_booked}
                          value={can_be_booked}
                          onChange={() => setCanBeBooked(!can_be_booked)}
                        />
                      }
                      label="Can be booked"
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="info"
                          checked={accept_offer}
                          value={accept_offer}
                          onChange={() => setAcceptOffer(!accept_offer)}
                        />
                      }
                      label="Can accept offer"
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 1 }}>
                    <FormControlLabel
                      control={
                        <Switch
                          color="info"
                          checked={active}
                          value={active}
                          onChange={() => setActive(!active)}
                        />
                      }
                      label="Active"
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Price by hour
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Price"
                      {...register("price_by_hour", { required: true })}
                    />
                  </FormControl>

                  <FormControl fullWidth sx={{ my: 1 }}>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Min Price
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                      label="Min Price"
                      {...register("min_price", { required: false })}
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
                      {(
                        state.category?.list?.filter(
                          (c: ICategory) => c.condition?.value == 1
                        ) ?? []
                      ).map((i: ICategory) => (
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
                  {state.task.isLoading && (
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

export default CreateTask;
