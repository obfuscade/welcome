"use client";

import styled from "@emotion/styled";
import { Box, Theme, Button as MUIButton, Typography } from "@mui/material";

export const Button = styled(MUIButton)(({ theme }: { theme?: Theme }) => ({
  "&:hover": {
    backgroundColor: theme?.palette.primary.main,
  },
}));

export const LinkWrapper = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export const LinkLabel = styled(Typography)({
  fontSize: "0.875rem",
});
