"use client";

import styled from "@emotion/styled";
import { Box, Theme, Button as MUIButton } from "@mui/material";

export const Button = styled(MUIButton)(({ theme }: { theme?: Theme }) => ({
  backgroundColor: theme?.palette.secondary.main,
  border: `0.0625rem solid ${theme?.palette.primary.main}`,

  "&:hover": {
    backgroundColor: theme?.palette.primary.main,
  },
}));

export const LinksWrapper = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
});
