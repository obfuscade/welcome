import ThemeProvider from "@/components/ThemeProvider";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome page",
};

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <main>{children}</main>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default Layout;
