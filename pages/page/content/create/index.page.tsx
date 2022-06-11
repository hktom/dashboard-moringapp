import * as React from "react";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

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
import { grey } from "@mui/material/colors";
import Layout from "../../../../layout/Layout";
import { useForm } from "react-hook-form";

import ImageUploader from "../../../../components/imageUploader/ImageUploader";
import { useDispatch, useSelector } from "react-redux";

import {
  AppState,
  useAppDispatch,
  useAppSelector,
} from "../../../../config/hooks";
import Head from "next/head";
import dynamic from "next/dynamic";

interface IProps {
  pid?: string;
}

function CreateContent(props: IProps) {
  const { pid } = props;

  const state = useAppSelector((state: AppState) => state.content);
  const [editorState, setEditorState] = React.useState("");

  const dispatch = useDispatch();
  const appDispatch = useAppDispatch();
  const initialState = React.useRef<number>(0);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm<any | {}>();

  const onSubmit = (data: any) => {
    if (pid) {
    } else {
    }
    initialState.current = 1;
  };

  React.useEffect(() => {
    if (pid && initialState.current == 0 && state.list) {
      let condition: any | undefined = state.list.find(
        (item: any) => item.id == pid
      );

      setValue("name", condition?.name!);
      setValue("value", condition?.value!);

      initialState.current++;
    }
  }, [dispatch, pid, setValue, state.list]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Layout>
        <Grid container>
          <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
              {pid ? "Edit" : "Create"} Content
            </Typography>

            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/page/">Dashboard</Link>
              <Link href="/page/condition">Condition</Link>
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
                    {/* <TextField
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
                  /> */}

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

                    <Box>
                      <ReactQuill
                        value={editorState}
                        onChange={setEditorState}
                      />
                    </Box>

                    {/* 
                    <Editor
                      
                      
                      editorState={editorState}
                      wrapperClassName="demo-wrapper"
                      editorClassName="demo-editor"
                      
                    /> */}
                    {/* <textarea
                      disabled
                      value={draftToHtml(
                        convertToRaw(editorState.getCurrentContent())
                      )}
                    /> */}
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
    </>
  );
}

export default CreateContent;
