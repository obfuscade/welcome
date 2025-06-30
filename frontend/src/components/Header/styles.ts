"use client";

import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NextLink from "next/link";

export const Header = styled.header({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Link = styled(NextLink)<{ isselected?: string }>(
  ({ isselected }) => ({
    textDecoration: isselected === "true" ? "underline" : "none",
  }),
);

export const LinksWrapper = styled(Box)({
  display: "flex",
});
