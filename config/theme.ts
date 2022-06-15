// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // type: "light",
    primary: {
      // main: "#0E121E",
      main: "#323D54",
    },
    secondary: {
      main: "#fff",
    },
    background: {
      default: "#F7F9FB",
    },
    info: {
      main: "#3C21E2",
    },
    error: {
      main: "#C72C30",
    },
    warning: {
      main: "#F38219",
    },
    success: {
      main: "#17B06D",
    },
  },
  typography: {
    fontFamily: "Inter, arial",
    h1: {
      fontSize: "6rem",
    },
  },
});

export default theme;
