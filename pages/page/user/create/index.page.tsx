import * as React from "react";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Grid,
  Typography,
} from "@mui/material";

import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import { IUser, updateUser } from "../action";

import { useDispatch, useSelector } from "react-redux";

import { IUserState, userAction, userActionSaga } from "../reducer";

import { ICondition } from "../../condition/action";
import { useRouter } from "next/router";

import Link from "next/link";
import { registerUser, updatePassword } from "../../../auth/actions";

import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../../config/hooks";
import { SectionEmail } from "./sectionMail";
import { SectionBasic } from "./sectionBasic";
import { SectionAvatar } from "./sectionAvatar";
import { SectionRole } from "./sectionRole";
import { SectionCity } from "./sectionCity";
import { SectionCondition } from "./sectionCondition";
import { SectionPassword } from "./sectionPassword";

interface IProps {
  pid?: string;
}

function CreateUser(props: IProps) {
  const router = useRouter();
  const { pid } = props;
  const state = useAppSelector((state: AppState) => state);

  const [role, setRole] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);

  const initialState = React.useRef<number>(0);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IUser | {}>();

  const onSubmitPassword = (data: any) => {
    appDispatch(userAction.activeUserAction());
    if (data.password != data.confirm_password) {
      return appDispatch(
        userAction.actionUserFailure(
          "Password and Confirm Password must be same"
        )
      );
    }

    dispatch({
      type: userActionSaga.UPDATE_PASSWORD,
      payload: {
        email: data.email,
        password: data.password!,
        confirmNewPassword: data.confirm_password!,
      },
    });
  };

  const onSubmit = (data: any) => {
    let _condition: ICondition[] | undefined = state.condition?.list?.filter(
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

    appDispatch(userAction.activeUserAction());

    if (pid) {
      return dispatch({
        type: userActionSaga.UPDATE_ITEM,
        payload: { ...payload, id: pid },
      });
    }

    if (data.password != data.confirm_password) {
      return appDispatch(
        userAction.actionUserFailure(
          "Password and Confirm Password must be same"
        )
      );
    }

    console.log('payload', payload);

    dispatch({
      type: userActionSaga.ADD_ITEM,
      payload: payload,
    });
  };

  React.useEffect(() => {
    if (initialState.current == 0 && pid && state.home?.user) {
      let user: IUser = state.user.list?.find((i: IUser) => i.id == pid)!;

      setValue("first_name", user?.first_name || "");
      setValue("last_name", user?.last_name || "");
      setValue("email", user?.email || "");
      setValue("street", user?.street || "");
      setValue("mobile", user?.mobile || "");
      setValue("zip_code", user?.zip_code || "");
      setValue("url", user?.url || "");
      setValue("bio", user?.bio || "");
      setActive(user?.condition?.value === 1 ?? false);
      setImage(user?.avatar || "");
      setRole(user?.role?.id || "");
      setCity(user?.city?.id || "");
      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.home?.user, state.user]);

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
            {state.user?.user?.role?.value == 1 && (
              <Link href="/page/user">
                <a style={{ textDecoration: "none" }}>Users</a>
              </Link>
            )}
          </Breadcrumbs>

          <Box
            component="form"
            sx={{ mt: 5 }}
            onSubmit={handleSubmit(onSubmit)}
          >
            {state.user?.error && (
              <Alert severity="error" sx={{ my: 1 }}>
                {state.user?.error}
              </Alert>
            )}

            {state.user?.success && (
              <Alert severity="success" sx={{ my: 1 }}>
                Operation Successful
              </Alert>
            )}

            {!pid && <SectionEmail register={register} />}

            {pid && <SectionBasic register={register} />}

            {pid && <SectionAvatar image={image} setImage={setImage} />}

            {pid && (
              <SectionCity city={city} setCity={setCity} register={register} />
            )}

            {state.home.user?.role?.value == 1 && (
              <SectionRole role={role} setRole={setRole} />
            )}

            {state.home.user?.role?.value == 1 && (
              <SectionCondition active={active} setActive={setActive} />
            )}

            {!pid && <SectionPassword register={register} />}

            <Grid container sx={{ mt: 4 }}>
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
                  {state.user?.isLoading && (
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

          {pid && state.home?.user?.role?.value == 1 && (
            <Box
              component="form"
              sx={{ mt: 5 }}
              onSubmit={handleSubmit(onSubmitPassword)}
            >
              <SectionPassword register={register} />

              <Box sx={{ mt: 3, display: "flex", justifyContent: "end" }}>
                <Button
                  variant="contained"
                  color="info"
                  disableElevation
                  type="submit"
                >
                  Create{" "}
                  {state.user?.isLoading && (
                    <CircularProgress
                      color="secondary"
                      size={20}
                      sx={{ ml: 2 }}
                    />
                  )}
                </Button>
              </Box>
            </Box>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
}

export default CreateUser;
