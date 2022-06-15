import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Layout from "../../../../layout/Layout";
import { Grid, Breadcrumbs, Alert } from "@mui/material";
import Link from "next/link";
import { pid } from "process";
import state from "pusher-js/types/src/core/http/state";
import { useAppSelector, AppState } from "../../../../config/hooks";
import FormGeneral from "./formGeneral";
import FormPassword from "./formPassword";
import FormAdmin from "./formAdmin";
import FormLocation from "./formLocation";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

interface IProps {
  pid?: string;
}

export default function CreateUser(props: IProps) {
  const state = useAppSelector((state: AppState) => state);
  const { pid } = props;
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Layout>
      <Grid container>
        <Grid item xs={12} md={10} sx={{ mx: "auto", my: 4 }}>
          <Typography variant="h3" component="h1" sx={{ fontWeight: "bold" }}>
            {pid ? "Edit User" : "Create a new User"}
          </Typography>

          {(state.user?.error || state.user.passwordActivity?.error) && (
            <Alert severity="error" sx={{ my: 1 }}>
              {state.user?.error}
            </Alert>
          )}

          {(state.user?.success || state.user.passwordActivity?.success) && (
            <Alert severity="success" sx={{ my: 1 }}>
              Operation Successful
            </Alert>
          )}

          <Box sx={{ width: "100%", mt: 5 }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
                component="div"
              >
                {pid && state.home?.user?.id == pid && (
                  <Tab label="General Info" {...a11yProps(0)} component="div" />
                )}
                {pid && state.home?.user?.id == pid && (
                  <Tab label="Location" {...a11yProps(1)} component="div" />
                )}
                {pid && state.home?.user?.id == pid && (
                  <Tab
                    label="Password config"
                    {...a11yProps(2)}
                    component="div"
                  />
                )}

                {pid && state.home?.user?.role?.value == 1 && (
                  <Tab
                    label="Admin"
                    {...a11yProps(state.home?.user?.id == pid ? 3 : 0)}
                    component="div"
                  />
                )}
              </Tabs>
            </Box>

            {pid && state.home?.user?.id == pid && (
              <TabPanel value={value} index={0}>
                <FormGeneral pid={pid} />
              </TabPanel>
            )}

            {pid && state.home?.user?.id == pid && (
              <TabPanel value={value} index={1}>
                <FormLocation pid={pid} />
              </TabPanel>
            )}

            {pid && state.home?.user?.id == pid && (
              <TabPanel value={value} index={2}>
                <FormPassword />
              </TabPanel>
            )}

            {pid && state.home?.user?.role?.value == 1 && (
              <TabPanel
                value={value}
                index={state.home?.user?.id == pid ? 3 : 0}
              >
                <FormAdmin pid={pid} />
              </TabPanel>
            )}
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
}
