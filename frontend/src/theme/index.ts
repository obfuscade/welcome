import { createTheme, Direction } from "@mui/material/styles";
import typography from "./typography";
import breakpoints from "./breakpoints";
import components from "./components";
import palette from "./palette";

const getTheme = (direction: Direction) =>
  createTheme({
    direction,
    typography,
    breakpoints,
    components,
    palette,
  });

export default getTheme;
