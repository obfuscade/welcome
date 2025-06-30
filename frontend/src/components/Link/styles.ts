"use client";

import styled from "@emotion/styled";
import { Button, ButtonProps } from "@mui/material";

interface LinkProps extends ButtonProps {
  islinkcolor?: string;
}

export const Link = styled(Button)<LinkProps>(({ islinkcolor }) => ({
  fontWeight: islinkcolor === "true" ? 600 : 500,
  color: islinkcolor === "true" ? "var(--general-link-color)" : "inherit",
}));
