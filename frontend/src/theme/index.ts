import { createTheme, Theme } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";

const theme: Theme = createTheme({
  typography,
  breakpoints,
  components,
  palette,
});

export default theme;
