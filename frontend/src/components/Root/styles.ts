"use client";

import styled from "@emotion/styled";
import { Grid, Theme } from "@mui/material";

interface GridWrapperProps {
  isregister?: string;
}

interface GridAsideWrapperProps {
  isregister?: string;
  theme?: Theme;
}

export const GridWrapper = styled(Grid)<GridWrapperProps>(({ isregister }) => ({
  height: isregister === "true" ? "auto" : "100%",
  justifyContent: "center",
  padding: "2rem",
}));

export const GridLayoutWrapper = styled(Grid)({
  height: "100%",
  maxWidth: "39rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "center",
});

export const GridAsideWrapper = styled(Grid)<GridAsideWrapperProps>(
  ({ theme, isregister }) => ({
    display: "none",
    height: isregister === "true" ? "auto" : "100%",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }),
);
