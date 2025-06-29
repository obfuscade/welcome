"use client";

import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

interface LinkProps extends ButtonProps {
  isLinkColor?: boolean;
}

export const Link = styled(Button, {
  shouldForwardProp: (prop) => prop !== "isLinkColor",
})<LinkProps>(({ isLinkColor }) => ({
  fontWeight: isLinkColor ? 600 : 500,
  color: isLinkColor ? "var(--general-link-color)" : "inherit",
}));
