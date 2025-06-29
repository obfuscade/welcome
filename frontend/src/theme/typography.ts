import { TypographyVariantsOptions } from "@mui/material/styles";
import palette from "./palette";

const typography: TypographyVariantsOptions = {
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 16,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontSize: "2.25rem",
    fontWeight: 600,
    lineHeight: 1.5,
    color: palette.text?.primary,
  },
  body1: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: palette.text?.secondary,
  },
  body2: {
    fontSize: "0.875rem",
    fontWeight: 500,
    lineHeight: 1.5,
    color: palette.text?.primary,
  },
};

export default typography;
