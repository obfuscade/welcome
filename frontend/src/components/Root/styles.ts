"use client";

import styled from "@emotion/styled";
import { Grid, Theme } from "@mui/material";

export const GridWrapper = styled(Grid)({
  height: "100%",
  padding: "2rem",
});

export const GridLayoutWrapper = styled(Grid)<{ theme?: Theme }>(
  ({ theme }) => ({
    height: "100%",
    maxWidth: "39rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    [theme.breakpoints.up("xs")]: {
      margin: "0 auto",
    },
  }),
);

export const GridAsideWrapper = styled(Grid)<{ theme?: Theme }>(
  ({ theme }) => ({
    display: "none",
    height: "100%",

    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  }),
);
