import { Grid, Paper, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import * as React from "react";

import { columnsJob } from "../../../components/columnsJob";
import { useAppSelector, AppState } from "../../../config/hooks";

import Layout from "../../../layout/Layout";

function Job() {
  const homeState = useAppSelector((state: AppState) => state.home);

  return (
    <Layout>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Job
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Paper color="secondary" sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Latest jobs
            </Typography>

            <div style={{ height: 400, width: "100%" }}>
              <div style={{ display: "flex", height: "100%" }}>
                <div style={{ flexGrow: 1 }}>
                  <DataGrid
                    sx={{ border: "none" }}
                    rows={homeState.user?.jobs || []}
                    columns={columnsJob}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                  />
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </Layout>
  );
}

export default Job;
