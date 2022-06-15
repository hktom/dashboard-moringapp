import { Box, Button, CircularProgress } from "@mui/material";
import state from "pusher-js/types/src/core/http/state";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  useAppDispatch,
  useAppSelector,
  AppState,
} from "../../../../config/hooks";
import { IUser } from "../action";
import { userAction, userActionSaga } from "../reducer";
import { SectionPassword } from "./sectionPassword";

function FormPassword() {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const state = useAppSelector((state: AppState) => state);

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
        email: state.home?.user?.email,
        password: data.password!,
        confirmNewPassword: data.confirm_password!,
      },
    });
  };

  return (
    <Box
      component="form"
      sx={{ mt: 5 }}
      onSubmit={handleSubmit(onSubmitPassword)}
    >
      <SectionPassword register={register} />

      <Box sx={{ mt: 3, display: "flex", justifyContent: "end" }}>
        <Button variant="contained" color="info" disableElevation type="submit">
          Create{" "}
          {state.user?.passwordActivity?.loading && (
            <CircularProgress color="secondary" size={20} sx={{ ml: 2 }} />
          )}
        </Button>
      </Box>
    </Box>
  );
}

export default FormPassword;
