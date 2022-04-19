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

  // React.useEffect(() => {
  //   let data: any = [];
  //   if (homeState.jobs?.length > 0) {
  //     homeState.jobs.forEach((item: any) => {
  //       switch (item?.condition?.name) {
  //         case "pending":
  //           data["pending"] = item;
  //           break;

  //         case "completed":
  //           data["completed"] = item;
  //           break;

  //         case "rejected":
  //           data["rejected"] = item;
  //           break;

  //         case "waiting_payment":
  //           data["waiting_payment"] = item;
  //           break;

  //         default:
  //           break;
  //       }
  //     });
  //   }
  //   setJobFilters(data);
  // }, [homeState, jobFilters]);

  return (
    <Layout>
      <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
        Job
      </Typography>

      {/* <Grid container spacing={3} sx={{ mt: 0 }}>
        {[].map((value) => (
          <Grid item xs={12} md={3} key={value}>
            <Card elevation={1}>
              <CardContent>
                <Typography sx={{ mb: 1.5 }} color="primary.light">
                  {
                    [
                      "waiting for approval",
                      "approved",
                      "waiting for payment",
                      "rejected",
                    ][value - 1]
                  }
                </Typography>
                <Typography
                  variant="h3"
                  sx={{ fontWeight: "bold" }}
                  color="primary.main"
                  gutterBottom
                >
                  890k
                </Typography>
              </CardContent>
              <Divider />
              <CardActions>
                <Button size="small" sx={{ color: "info.main" }}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid> */}

      <Grid container spacing={3} sx={{ mt: 1 }}>
        <Grid item xs={12}>
          <Paper color="secondary" sx={{ px: 2, pb: 2, pt: 3 }}>
            <Typography
              component="h2"
              variant="h6"
              sx={{ fontWeight: "bold", px: 2, mb: 2 }}
            >
              Latest transactions
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
