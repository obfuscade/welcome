"use client";

import styled from "@emotion/styled";
import { Box, BoxProps } from "@mui/material";

export const AuthSection = styled(Box)<BoxProps>({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const AuthWelcome = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
});

export const AuthForm = styled.form({
  marginBottom: "1rem",
});

export const AuthInputsWrapper = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  marginBottom: "1rem",
});
