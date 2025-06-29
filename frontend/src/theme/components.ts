import { Components } from "@mui/material";
import variables from "./variables";
import palette from "./palette";

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
      ":root": variables,
    },
  },
  MuiButton: {
    styleOverrides: {
      root: {
        fontWeight: 700,
        textTransform: "capitalize",
        borderRadius: "var(--general-border-radius)",
      },
      text: {
        fontSize: "0.875rem",
        fontWeight: 500,
        color: palette.text?.secondary,
      },
    },
    defaultProps: {
      fullWidth: true,
      variant: "contained",
    },
  },
  MuiTextField: {
    defaultProps: {
      fullWidth: true,
      variant: "outlined",
    },
  },
  MuiOutlinedInput: {
    styleOverrides: {
      root: {
        borderRadius: "var(--general-border-radius)",
        font: "inherit",
      },
      input: {
        padding: "0.625rem 0.875rem",

        "&::placeholder": {
          color: palette.text?.secondary,
          opacity: 1,
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        fontSize: "0.75rem",
        fontWeight: 400,
        margin: "0.1875rem 0.875rem -0.625rem",
      },
    },
  },
};

export default components;
