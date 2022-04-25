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
  IconButton,
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
import { grey } from "@mui/material/colors";
import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import { addUser, addUserFailure, getUser, IUser, updateUser } from "../action";
import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../../config/reducer";
import { IUserState } from "../reducer";
// import { uploadImageFailure } from "../../../store/image/actions";
import { IConditionState } from "../../condition/reducer";
import { ICondition } from "../../condition/action";
import { useRouter } from "next/router";
import { IRoleState } from "../../role/reducer";
import { ICityState } from "../../city/reducer";
import { IRole } from "../../role/action";
import { ICity } from "../../city/action";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import Link from "next/link";
import { registerUser, updatePassword } from "../../../auth/actions";
import { ILoginState } from "../../../auth/reducer";
import { IHomeState } from "../../home/reducer";

interface IProps {
  pid?: string;
}

function CreateUser(props: IProps) {
  const { pid } = props;
  const router = useRouter();
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const state = useSelector((state: IRootState): IUserState => state.user);
  const authState = useSelector(
    (state: IRootState): ILoginState => state.login
  );

  const conditionState = useSelector(
    (state: IRootState): IConditionState => state.condition
  );
  const roleState = useSelector((state: IRootState): IRoleState => state.role);
  const cityState = useSelector((state: IRootState): ICityState => state.city);

  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const [role, setRole] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const dispatch = useDispatch();

  const updatePasswordAction = (data: IUser) => {
    if (data.password != data.confirm_password) {
      return dispatch(
        addUserFailure("Password and Confirm Password must be same")
      );
    } else {
      return dispatch(
        updatePassword({
          email: data.email,
          password: data.password!,
          confirmNewPassword: data.confirm_password!,
        })
      );
    }
  };

  const createUserAction = (data: IUser, condition: any) => {
    if (data.password != data.confirm_password) {
      return dispatch(
        addUserFailure("Password and Confirm Password must be same")
      );
    }

    dispatch(
      registerUser({
        first_name: data.first_name,
        auth: "dashboard",
        last_name: data.last_name,
        email: data.email,
        password: data.password!,
        confirm_password: data.confirm_password!,
        role: { id: role },
        condition: condition && condition[0],
      })
    );
  };

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
      // update user
      if (data.password == "" && data.confirm_password == "") {
        return dispatch(
          updateUser({
            ...payload,
            id: pid,
          })
        );
      } else {
        // update password
        return updatePasswordAction(data);
      }
    }

    // create user
    return createUserAction(data, _condition);
  };

  React.useEffect(() => {
    if (
      state.success ||
      authState.register?.success ||
      authState.updatePassword?.success
    ) {
      router.reload();
    }

    if (pid) {
      dispatch(getUser(pid));
    }

    if (state.user && pid) {
      setValue("first_name", state.user?.first_name || "");
      setValue("last_name", state.user?.last_name || "");
      setValue("email", state.user?.email || "");
      setValue("street", state.user?.street || "");
      setValue("mobile", state.user?.mobile || "");
      setValue("zip_code", state.user?.zip_code || "");
      setValue("url", state.user?.url || "");
      setValue("bio", state.user?.bio || "");
      setActive(state.user.condition?.value === 1 ?? false);
      setImage(state.user?.avatar || "");
      setRole(state.user?.role?.id || "");
      setCity(state.user?.city?.id || "");
    }
  }, [
    dispatch,
    pid,
    reset,
    router,
    state.success,
    setValue,
    state.user,
    authState.register?.success,
    authState.updatePassword?.success,
  ]);

  const handleChangeRole = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const citySection = () => {
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
              {...register("zip_code", { required: false })}
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
              {...register("street", { required: false })}
            />

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
    );
  };

  const sectionAvatar = (
    setImage: React.Dispatch<React.SetStateAction<string | undefined>>,
    image: string | undefined
  ) => {
    return (
      <Paper elevation={0} sx={{ mt: 2, p: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4} sx={{ pr: 5 }}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
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
    );
  };

  const sectionBasic = () => {
    return (
      <Paper elevation={0} sx={{ p: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
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
              {...register("bio", { required: false })}
            />

            <TextField
              label="Mobile"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              color="info"
              sx={{ my: 1 }}
              {...register("mobile", { required: false })}
            />

            <TextField
              id="name"
              label="Website link"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              color="info"
              sx={{ my: 1 }}
              {...register("url", { required: false })}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  };

  const sectionEmail = () => {
    return (
      <Paper elevation={0} sx={{ p: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
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
              InputLabelProps={{
                shrink: true,
              }}
              label="Last name"
              variant="outlined"
              fullWidth
              color="info"
              sx={{ my: 1 }}
              {...register("last_name", { required: true })}
            />

            <TextField
              id="name"
              label="Email"
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              fullWidth
              color="info"
              sx={{ my: 1 }}
              {...register("email", { required: true })}
            />
          </Grid>
        </Grid>
      </Paper>
    );
  };

  const sectionCondition = () => {
    return (
      <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
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
    );
  };

  const sectionRole = () => {
    return (
      <Paper elevation={0} sx={{ mt: 4, p: 4 }}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
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
    );
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit User" : "Create a new User"}
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/page/">
              <a style={{ textDecoration: "none" }}>Dashboard</a>
            </Link>
            {state.user?.role?.value == 1 && (
              <Link href="/page/user">
                <a style={{ textDecoration: "none" }}>Users</a>
              </Link>
            )}

            {/* {pid && (
              <Link href={"/page/"+(state.user?.role?.value == 1?"user":"profile")+"/profile/" + pid}>
                <a style={{ textDecoration: "none" }}>Profile</a>
              </Link>
            )} */}
          </Breadcrumbs>

          <Box
            component="form"
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {(state.error ||
              authState.register?.error ||
              authState.updatePassword?.error) && (
              <Alert severity="error" sx={{ my: 1 }}>
                {state.error ||
                  authState.register?.error ||
                  authState.updatePassword?.error}
              </Alert>
            )}

            {(state.success ||
              authState.register?.success ||
              authState.updatePassword?.success) && (
              <Alert severity="success" sx={{ my: 1 }}>
                Operation Successful
              </Alert>
            )}

            {!pid && sectionEmail()}

            {pid && sectionBasic()}

            {pid && sectionAvatar(setImage, image)}

            {pid && citySection()}

            {homeState.role?.value == 1 && sectionRole()}

            {homeState.role?.value == 1 && sectionCondition()}

            <Paper elevation={0} sx={{ p: 4, mt: 4 }}>
              <Grid container>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="h6"
                    component="h2"
                    sx={{ fontWeight: "bold" }}
                  >
                    Password
                  </Typography>

                  <Typography variant="body2" component="p" sx={{ pr: 3 }}>
                    {"Leave blank if you don't want to change it"}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={8}>
                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: false })}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">
                      Confirm password
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-password"
                      type={showConfirmPassword ? "text" : "password"}
                      {...register("confirm_password", { required: false })}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showConfirmPassword ? (
                              <VisibilityOff />
                            ) : (
                              <Visibility />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      label="Password"
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
                  {(state.isLoading ||
                    authState.register?.loading ||
                    authState.updatePassword?.loading) && (
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
