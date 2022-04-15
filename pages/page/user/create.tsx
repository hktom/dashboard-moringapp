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
  addUser,
  addUserFailure,
  getUser,
  IUser,
  updateUser,
} from "../../../store/user/action";
import ImageUploader from "../../../components/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../config/reducer";
import { IUserState } from "../../../store/user/reducer";
import { uploadImageFailure } from "../../../store/image/actions";
import { IConditionState } from "../../../store/condition/reducer";
import { ICondition } from "../../../store/condition/action";
import { useRouter } from "next/router";
import { IRoleState } from "../../../store/role/reducer";
import { ICityState } from "../../../store/city/reducer";
import { IRole } from "../../../store/role/action";
import { ICity } from "../../../store/city/action";

interface IProps {
  pid?: string;
}

function CreateUser(props: IProps) {
  const { pid } = props;
  const router = useRouter();

  const state = useSelector((state: IRootState): IUserState => state.user);
  const conditionState = useSelector(
    (state: IRootState): IConditionState => state.condition
  );
  const roleState = useSelector((state: IRootState): IRoleState => state.role);
  const cityState = useSelector((state: IRootState): ICityState => state.city);

  const [role, setRole] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
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
  } = useForm<IUser | {}>();

  const onSubmit = (data: any) => {

    let _condition: ICondition[] | undefined = conditionState?.list?.filter(
      (i: any) => i.value == +active
    );

    let payload: IUser = {
      ...data,
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      bio: data.bio,
      street: data.street,
      zip_code: data.zip_code,
      url: data.url,
      avatar: image,
      role: { id: role },
      city: { id: city },
      condition: _condition && _condition[0],
    };

    if (pid) {
      return dispatch(
        updateUser({
          ...payload,
          id: pid
        })
      );
    }

    dispatch(addUser(payload));
  };

  React.useEffect(() => {
    if (state.success) {
      router.reload();
    }

    if (pid) {
      dispatch(getUser(pid));
    }

    if (state.user && pid) {
      setValue("first_name", state.user?.first_name);
      setValue("last_name", state.user?.last_name);
      setValue("email", state.user?.email);
      setValue("street", state.user?.street);
      setValue("mobile", state.user?.mobile);
      setValue("zip_code", state.user?.zip_code);
      setValue("url", state.user?.url);
      setValue("bio", state.user?.bio);
      setActive(state.user.condition?.value === 1 ?? false);
      setImage(state.user?.avatar);
      setRole(state.user?.role?.id);
      setCity(state.user?.city?.id);
    }
  }, [dispatch, pid, reset, router, state.success, setValue, state.user]);

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit User" : "Create a new User"}
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="#">
              Dashboard
            </Link>
            <Link underline="hover" color="inherit" href="#">
              User
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="First name"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("first_name", { required: true })}
                  />

                  <TextField
                    id="name"
                    label="Last name"
                    variant="outlined"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("last_name", { required: false })}
                  />

                  <TextField
                    id="description"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    label="Bio"
                    multiline
                    fullWidth
                    sx={{ my: 1 }}
                    color="info"
                    rows={4}
                    {...register("bio", { required: true })}
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
                    Avatar
                  </Typography>

                  <Typography variant="body2" component="p">
                    The image will appear on your profile
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
                    City *
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={city}
                      label="City"
                      onChange={handleChangeCity}
                    >
                      {(cityState?.list ?? []).map((i: ICity) => (
                        <MenuItem value={i.id} key={i.id}>
                          {i.name}
                        </MenuItem>
                      ))}
                    </Select>
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
                    Role *
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={role}
                      label="Role"
                      onChange={handleChangeRole}
                    >
                      {(roleState?.list ?? []).map((i: IRole) => (
                        <MenuItem value={i.id} key={i.id}>
                          {i.name}
                        </MenuItem>
                      ))}
                    </Select>
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
                    Active User
                  </Typography>

                  <Typography variant="body2" component="p" sx={{ pr: 3 }}>
                    only active Users will be displayed on website
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
              {/* <Grid item xs={12} md={8}>
                <Button variant="text" color="error">
                  Delete
                </Button>
              </Grid> */}

              <Grid
                item
                xs={12}
                md={12}
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

export default CreateUser;
