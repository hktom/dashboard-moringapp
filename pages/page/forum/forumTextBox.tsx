import { Box, Chip, IconButton, TextField, Typography } from "@mui/material";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
// import { chatActionSaga } from "./reducer";
import { AppState, useAppSelector } from "../../../config/hooks";
import { useState } from "react";
import { forumActionSaga, replyActionSaga } from "./reducer";

interface IProps {
  isReply?: boolean;
}

function ForumTextBox(props: IProps) {
  const dispatch = useDispatch();
  const state = useAppSelector((state: AppState) => state);
  const [category, setCategory] = useState<any>(undefined);
  const [service, setService] = useState<any>(undefined);
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
      user: state?.home?.user,
      condition: state.condition.list?.find((i: any) => i.value == 3),
    };

    if (props.isReply) {
      dispatch({
        type: replyActionSaga.ADD_ITEM,
        payload: { ...payload, question: state.forum.forum },
      });
      return;
    }
    category && (payload.category = category);
    service && (payload.service = service);
    dispatch({
      type: forumActionSaga.ADD_ITEM,
      payload: payload,
    });
    setValue("content", "");
  };

  const categoryService = () => {
    return (
      <>
        <Typography
          component="h2"
          variant="body2"
          sx={{ fontWeight: "bold", px: 2, mb: 1, mt: 2 }}
        >
          Whats your question is about ?
        </Typography>
        <Box
          sx={{
            overflowX: "scroll",
            width: "100%",
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            pb: 5,
          }}
        >
          {state.category.list?.map((i: any) => (
            <Chip
              onClick={() => {
                setCategory(i);
                setService(undefined);
              }}
              key={i.id}
              label={i.name}
              size="small"
              sx={{ my: 1, mx: 1, borderRadius: 2, py: 1 }}
              color={category?.id === i.id ? "warning" : "info"}
            />
          ))}

          {state.service.list?.map((i: any) => (
            <Chip
              key={i.id}
              onClick={() => {
                setCategory(undefined);
                setService(i);
              }}
              label={i.name}
              size="small"
              color={service?.id === i.id ? "warning" : "info"}
              sx={{ my: 1, mx: 1, borderRadius: 2, py: 1 }}
            />
          ))}
        </Box>
      </>
    );
  };
  return (
    <>
      {!props.isReply && (
        <Typography
          component="h2"
          variant="h4"
          sx={{ fontWeight: "bold", px: 2, mb: 2 }}
        >
          Whats up today ?
        </Typography>
      )}
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
          label={props.isReply ? "Reply" : "Question"}
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

      {!props.isReply && categoryService()}
    </>
  );
}

export default ForumTextBox;
