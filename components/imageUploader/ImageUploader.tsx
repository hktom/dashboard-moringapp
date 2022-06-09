import {
  Box,
  Button,
  CardMedia,
  LinearProgress,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { HOST_URL } from "../../config/apollo";
import { useAppSelector, AppState, useAppDispatch } from "../../config/hooks";
// import { IRootState } from "../../config/reducer";
import { uploadImage, uploadImageFailure } from "./actions";
import { IImageState, imageAction, imageActionSaga } from "./reducer";

interface IProps {
  setImageField: (image: string | undefined) => void;
  image: string | undefined;
}

function ImageUploader(props: IProps) {
  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const imageState = useAppSelector((state: AppState) => state.image);

  const { setImageField, image } = props;
  const fileInputRef = React.useRef<any>();

  const submitImage = () => {
    if (fileInputRef.current.files.length > 0) {
      appDispatch(imageAction.uploadImage());
      dispatch({
        type: imageActionSaga.ADD_ITEM,
        payload: fileInputRef.current.files[0],
      });
    }
  };

  const removeImage = () => {
    setImageField(undefined);
    appDispatch(imageAction.uploadSuccess(undefined));
  };

  const fileInputClicked = () => {
    fileInputRef.current.click();
  };

  React.useEffect(() => {
    if (imageState.image && !image) {
      setImageField(imageState.image);
    }
  }, [imageState, setImageField, image]);

  return (
    <>
      {image ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "end",
            justifyContent: "end",
            width: "100%",
          }}
        >
          <CardMedia
            component="img"
            alt={image}
            sx={{ maxWidth: "300px", maxHeight: "300px" }}
            src={`${HOST_URL}storage/${image}`}
          />
          <Button
            variant="text"
            color="error"
            sx={{ mt: 2 }}
            onClick={removeImage}
          >
            {" "}
            Remove{" "}
          </Button>
        </Box>
      ) : (
        <>
          <Box
            onClick={fileInputClicked}
            sx={{
              display: "flex",
              cursor: "pointer",
              justifyContent: "center",
              alignItems: "center",
              height: "200px",
              border: `2px dashed ${grey[200]}`,
              backgroundColor: grey[100],
            }}
          >
            <Typography variant="body1" component="p">
              Upload image
            </Typography>
          </Box>
          {imageState.loading && <LinearProgress color="info" />}
        </>
      )}
      <input
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/jpeg, image/png"
        onChange={submitImage}
      />
    </>
  );
}

export default ImageUploader;
