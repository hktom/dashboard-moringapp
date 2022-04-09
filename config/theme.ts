// import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    // type: "light",
    primary: {
      main: "#0E121E",
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
      main: "#FDA209",
    },
    success: {
      main: "#17B06D",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "6rem",
    },
  },
});

export default theme;
