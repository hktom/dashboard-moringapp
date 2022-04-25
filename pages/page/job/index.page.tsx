import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
  DataGrid,
} from "@mui/x-data-grid";
import * as React from "react";
import { useSelector } from "react-redux";
import { columnsJob } from "../../../components/columnsJob";
import { IRootState } from "../../../config/reducer";
import Layout from "../../../layout/Layout";
import { IHomeState } from "../home/reducer";

function Job() {
  const homeState = useSelector((state: IRootState): IHomeState => state.home);
  const [jobFilters, setJobFilters] = React.useState<{}>({});


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
                    rows={homeState.jobs || []}
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
