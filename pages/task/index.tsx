import { Box, Button, Typography } from "@mui/material";
import * as React from "react";
import Layout from "../../layout/Layout";
import AddIcon from "@mui/icons-material/Add";

function Task() {
  return (
    <>
      <Layout>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            Task
          </Typography>

          <Button variant="contained" color="info" disableElevation>
            <AddIcon /> Add
          </Button>
        </Box>
      </Layout>
    </>
  );
}

export default Task;
