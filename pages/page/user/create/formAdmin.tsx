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

import { ICondition } from "../../condition/action";
import { useRouter } from "next/router";

import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../../config/hooks";

import { SectionRole } from "./sectionRole";

import { SectionCondition } from "./sectionCondition";

interface IProps {
  pid?: string;
}

function FormAdmin(props: IProps) {
  const { pid } = props;
  const state = useAppSelector((state: AppState) => state);

  const [role, setRole] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);

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
    let _condition: ICondition[] | undefined = state.condition?.list?.filter(
      (i: any) => i.value == +active
    );

    let payload: any = {
      role: { id: role },
      condition: _condition && _condition[0],
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
    // console.log(user);
    if (initialState.current == 0 && pid && state.home?.user) {
      let user: IUser = state.user.list?.find((i: IUser) => i.id == pid)!;
      setActive(user?.condition?.value === 1 ?? false);
      setRole(user?.role?.id || "");
      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.home?.user, state.user]);

  return (
    <>
      <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>
        {state.home.user?.role?.value == 1 && (
          <SectionRole role={role} setRole={setRole} />
        )}

        {state.home.user?.role?.value == 1 && (
          <SectionCondition active={active} setActive={setActive} />
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

export default FormAdmin;
