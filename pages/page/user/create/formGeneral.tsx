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

import {
  useAppSelector,
  AppState,
  useAppDispatch,
} from "../../../../config/hooks";
import { SectionEmail } from "./sectionMail";
import { SectionBasic } from "./sectionBasic";
import { SectionAvatar } from "./sectionAvatar";

import { SectionPassword } from "./sectionPassword";
import { SectionCondition } from "./sectionCondition";
import { SectionRole } from "./sectionRole";
import { ICondition } from "../../condition/action";

interface IProps {
  pid?: string;
}

function FormGeneral(props: IProps) {
  const { pid } = props;
  const state = useAppSelector((state: AppState) => state);

  const [image, setImage] = React.useState<string | undefined>(undefined);

  const initialState = React.useRef<number>(0);

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();

  const [role, setRole] = React.useState<string>("");
  const [active, setActive] = React.useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<IUser | {}>();

  const onSubmit = (data: any) => {
    let _condition: ICondition | undefined = state.condition?.list?.find(
      (i: any) => i.value == +active
    );

    let payload: IUser = {
      ...data,
      role: { id: role },
      condition: _condition && _condition,
      avatar: image,
    };

    appDispatch(userAction.activeUserAction());

    if (pid) {
      console.log("submit", payload);
      return dispatch({
        type: userActionSaga.UPDATE_ITEM,
        payload: { ...payload, id: pid },
      });
    }

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

      setValue("mobile", user?.mobile || "");
      setValue("zip_code", user?.zip_code || "");
      setValue("url", user?.url || "");
      setValue("bio", user?.bio || "");

      setImage(user?.avatar || "");

      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.home?.user, state.user]);

  return (
    <>
      <Box component="form" sx={{ mt: 5 }} onSubmit={handleSubmit(onSubmit)}>
        {!pid && <SectionEmail register={register} />}

        {pid && <SectionBasic register={register} />}

        {pid && <SectionAvatar image={image} setImage={setImage} />}

        {state.home.user?.role?.value == 1 && !pid && (
          <SectionRole role={role} setRole={setRole} />
        )}

        {state.home.user?.role?.value == 1 && !pid && (
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
                <CircularProgress color="secondary" size={20} sx={{ ml: 2 }} />
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default FormGeneral;
