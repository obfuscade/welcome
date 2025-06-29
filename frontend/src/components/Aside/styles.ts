"use client";

import styled from "@emotion/styled";
import NextImage from "next/image";

export const Image = styled(NextImage)({
  display: "block",
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "var(--general-border-radius)",
});
