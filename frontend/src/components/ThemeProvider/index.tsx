"use client";

import { ReactNode } from "react";
import { ThemeProvider as MUIThemeProvider } from "@mui/material";
import { Direction } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import getTheme from "../../theme";

interface IProps {
  children: ReactNode;
  direction: Direction;
}

const ThemeProvider = ({ children, direction }: IProps) => {
  return (
    <MUIThemeProvider theme={getTheme(direction)}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
