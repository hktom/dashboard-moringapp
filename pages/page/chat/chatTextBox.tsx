import { Box, IconButton, TextField } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { chatActionSaga } from "./reducer";
import { AppState, useAppSelector } from "../../../config/hooks";

function ChatTextBox() {
  const dispatch = useDispatch();
  const state = useAppSelector((state: AppState) => state);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any>();

  const onSubmit = (data: any) => {
    let payload: any = {
      ...data,
      room: state.chat?.room,
      user: state?.home?.user,
    };
    console.log(payload);
    dispatch({
      type: chatActionSaga.UPDATE_ITEM,
      payload: payload,
    });
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        width: "100%",
        alignItems: "top",
        justifyContent: "left",
      }}
    >
      <TextField
        id="chat-message"
        label="Message"
        multiline
        rows={2}
        sx={{ flexGrow: 1 }}
        autoFocus
        {...register("content", { required: true })}
      />

      <IconButton aria-label="submit" type="submit">
        <SendOutlinedIcon />
      </IconButton>
    </Box>
  );
}

export default ChatTextBox;
