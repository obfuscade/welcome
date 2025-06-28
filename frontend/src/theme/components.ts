import { Components } from "@mui/material";
import variables from "./variables";

const components: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        margin: 0,
        padding: 0,
        boxSizing: "border-box",
        overscrollBehavior: "none",
      },
      "html, body": {
        height: "100%",
        width: "100%",
      },
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontSize: "1rem",
      },
      ":root": variables,
    },
  },
};

export default components;
