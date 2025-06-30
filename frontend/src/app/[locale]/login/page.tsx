"use client";

import { Box, Typography } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { Control, FieldValues } from "react-hook-form";
import { PATH } from "../../../constants";
import Link from "../../../components/Link";
import Input from "../../../components/Input";
import { validation, defaultValues } from "./form";
import useAuth from "../../../hooks/useAuth";
import { IUserLogin } from "../../../types";
import * as Styled from "./styles";
import * as GlobalStyled from "../../../styles";

const Login = () => {
  const t = useTranslations("Login");
  const locale = useLocale();
  const { control, handleSubmit, errors } = useAuth<IUserLogin>({
    validation: validation(t),
    defaultValues,
    isLogin: true,
  });

  return (
    <GlobalStyled.AuthSection component="section">
      <GlobalStyled.AuthWelcome>
        <Typography variant="h1">{t("title")}</Typography>

        <Typography variant="body1">{t("subtitle")}</Typography>
      </GlobalStyled.AuthWelcome>

      <Box>
        <GlobalStyled.AuthForm onSubmit={handleSubmit} noValidate>
          <GlobalStyled.AuthInputsWrapper>
            <Input
              type="email"
              name="email"
              autoComplete="email"
              label={t("inputs.email")}
              placeholder={t("inputs.email")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.email?.message}
            />

            <Input
              type="password"
              name="password"
              autoComplete="current-password"
              label={t("inputs.password")}
              placeholder={t("inputs.password")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.password?.message}
              isShowIcon
            />
          </GlobalStyled.AuthInputsWrapper>

          <Styled.Button type="submit">{t("button")}</Styled.Button>
        </GlobalStyled.AuthForm>

        <Styled.LinksWrapper>
          <Link text={t("forgot")} href={`/${locale}${PATH.HOME}`} />

          <Link text={t("create")} href={`/${locale}${PATH.REGISTER}`} />
        </Styled.LinksWrapper>
      </Box>
    </GlobalStyled.AuthSection>
  );
};

export default Login;
