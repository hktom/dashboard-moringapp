import { TextField } from "@mui/material";
import { UseFormRegister } from "react-hook-form";

interface IProps {
  id: string;
  data: string;
  register: UseFormRegister<{} | any>;
  required?: boolean;
}

function CustomTextField(props: IProps) {
  return (
    <>
      <TextField
        id={props.id}
        InputLabelProps={{
          shrink: true,
        }}
        label={props.id}
        variant="outlined"
        fullWidth
        color="info"
        sx={{ my: 1 }}
        {...props.register(props.data, { required: props.required || false })}
      />
    </>
  );
}

export default CustomTextField;
