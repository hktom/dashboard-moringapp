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

import { useForm } from "react-hook-form";
import { IUser, updateUser } from "../action";

import { useDispatch, useSelector } from "react-redux";

import { IUserState, userAction, userActionSaga } from "../reducer";

import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../../config/hooks";

import { SectionCity } from "./sectionCity";

interface IProps {
  pid?: string;
}

function FormLocation(props: IProps) {
  const { pid } = props;
  const state = useAppSelector((state: AppState) => state);

  const [city, setCity] = React.useState<string>("");

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

  const onSubmit = (data: any) => {
    let payload: IUser = {
      ...data,

      city: { id: city },
    };

    appDispatch(userAction.activeUserAction());

    if (pid) {
      return dispatch({
        type: userActionSaga.UPDATE_ITEM,
        payload: { ...payload, id: pid },
      });
    }
  };

  React.useEffect(() => {
    if (initialState.current == 0 && pid && state.home?.user) {
      let user: IUser = state.user.list?.find((i: IUser) => i.id == pid)!;

      setValue("street", user?.street || "");

      setValue("zip_code", user?.zip_code || "");

      setCity(user?.city?.id || "");
      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.home?.user, state.user]);

  return (
    <>
      <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>
        {pid && (
          <SectionCity city={city} setCity={setCity} register={register} />
        )}

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
                <CircularProgress color="secondary" size={20} sx={{ ml: 2 }} />
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FormLocation;
