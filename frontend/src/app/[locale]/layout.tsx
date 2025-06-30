import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { Metadata } from "next";
import { ReactNode } from "react";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getLangDir } from "rtl-detect";
import { notFound } from "next/navigation";
import { Inter } from "next/font/google";
import Root from "../../components/Root";
import ThemeProvider from "../../components/ThemeProvider";
import { routing } from "../../libs/i18n/routing";

export const metadata: Metadata = {
  title: "Welcome",
  description: "Welcome page",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const Layout = ({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) => {
  const direction = getLangDir(params.locale);

  if (!hasLocale(routing.locales, params.locale)) {
    notFound();
  }

  return (
    <html lang={params.locale} dir={direction} className={inter.variable}>
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider direction={direction}>
            <NextIntlClientProvider>
              <Root>{children}</Root>
            </NextIntlClientProvider>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
};

export default Layout;
