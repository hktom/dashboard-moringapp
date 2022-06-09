import * as React from "react";
import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  CircularProgress,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";

import Link from "next/link";

import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";
import {
  // addRole,
  // addRoleFailure,
  // getRole,
  // getRoleListSuccess,
  // getRoleSuccess,
  IRole,
  // updateRole,
} from "../action";

import { useDispatch, useSelector } from "react-redux";

import { IRoleState, roleActionSaga } from "../reducer";
import { useAppSelector, AppState } from "../../../../config/hooks";

interface IProps {
  pid?: string;
}

function CreateRole(props: IProps) {
  const { pid } = props;

  const state = useAppSelector((state: AppState) => state.role);
  const initialState = React.useRef<number>(0);

  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IRole | {}>();

  const onSubmit = (data: any) => {
    if (pid) {
      dispatch({
        type: roleActionSaga.UPDATE_ITEM,
        payload: { ...data, id: pid },
      });
    } else {
      dispatch({
        type: roleActionSaga.UPDATE_ITEM,
        payload: data,
      });
    }
    initialState.current = 1;
  };

  // React.useEffect(() => {
  //   if (state.success && initialState.current === 1) {
  //     dispatch(
  //       getRoleListSuccess(
  //         state.list
  //           ?.filter((i: IRole) => i.id !== state.role?.id)
  //           .concat(state.role!)!
  //       )
  //     );
  //     initialState.current++;
  //   }
  // }, [dispatch, state.list, state.role, state.success]);

  React.useEffect(() => {
    if (pid && initialState.current === 0) {
      let role: IRole = state.list?.find((item: IRole) => item.id === pid)!;
      // dispatch(getRoleSuccess(role));
      setValue("name", role?.name!);
      setValue("value", role?.value!);
      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.list]);

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit" : "Create"} Role
          </Typography>

          <Breadcrumbs aria-label="breadcrumb">
            <Link href="/page/">Dashboard</Link>
            <Link href="/page/role">role</Link>
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
                    inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
                    label="value"
                    variant="outlined"
                    fullWidth
                    color="info"
                    sx={{ my: 1 }}
                    {...register("value", { required: true })}
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

export default CreateRole;
