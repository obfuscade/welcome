"use client";

import styled from "@emotion/styled";
import { Box, Theme } from "@mui/material";
import PhoneInputBase from "react-phone-input-2";

export const Wrapper = styled(Box)({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
});

export const PhoneInputWrapper = styled(Box)<{
  iserror?: string;
  theme?: Theme;
}>(({ theme, iserror }) => ({
  display: "flex",
  width: "100%",
  border: `0.0625rem solid ${
    iserror === "true" ? theme.palette.error.main : "rgba(0, 0, 0, 0.23)"
  }`,
  borderRadius: "var(--general-border-radius)",

  "&:hover": {
    borderColor:
      iserror === "true"
        ? theme.palette.error.main
        : theme.palette.secondary.main,
  },

  "&:focus-within, &:has(.open)": {
    borderColor:
      iserror === "true"
        ? theme.palette.error.main
        : theme.palette.primary.main,
    boxShadow: `0 0 0 0.0625rem ${
      iserror === "true" ? theme.palette.error.main : theme.palette.primary.main
    }`,
  },

  ".flag-dropdown": {
    backgroundColor: "transparent",
    border: "none",
    padding: "0 0.5rem",
    display: "flex",
    alignItems: "center",
  },

  ".form-control": {
    width: "100%",
    height: "auto",
    flex: 1,
    border: "none",
    backgroundColor: "transparent",
    font: "inherit",
    padding: "0.625rem 0.875rem",
    paddingLeft: "3.625rem",
  },
}));

export const PhoneInput = styled(PhoneInputBase)({
  width: "100%",
});
