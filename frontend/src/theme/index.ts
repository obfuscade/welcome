import { createTheme, Theme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import transitions from "./transitions";
import components from "./components";
import palette from "./palette";

const theme: Theme = createTheme({
  typography,
  breakpoints,
  transitions,
  components,
  palette,
});

export default theme;
