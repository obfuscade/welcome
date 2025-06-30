"use client";

import { Box, Typography } from "@mui/material";
import { PATH } from "../../../constants";
import Link from "../../../components/Link";
import Input from "../../../components/Input";
import { validation, defaultValues } from "./form";
import useAuth from "../../../hooks/useAuth";
import { IUserRegister } from "../../../types";
import * as Styled from "./styles";
import * as GlobalStyled from "../../../styles";
import { Control, FieldValues } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";

const Register = () => {
  const t = useTranslations("Register");
  const locale = useLocale();
  const { control, handleSubmit, errors } = useAuth<
    IUserRegister & { confirmPassword: string }
  >({
    validation: validation(t),
    defaultValues,
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
              type="text"
              name="firstName"
              autoComplete="given-name"
              label={t("inputs.firstName")}
              placeholder={t("inputs.firstName")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.firstName?.message}
            />

            <Input
              type="text"
              name="lastName"
              autoComplete="family-name"
              label={t("inputs.lastName")}
              placeholder={t("inputs.lastName")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.lastName?.message}
            />

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
              type="tel"
              name="phone"
              autoComplete="tel"
              label={t("inputs.phone")}
              placeholder={t("inputs.phone")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.phone?.message}
              isPhone
            />

            <Input
              type="password"
              name="password"
              label={t("inputs.password")}
              placeholder={t("inputs.password")}
              autoComplete="new-password"
              control={control as unknown as Control<FieldValues>}
              error={errors?.password?.message}
              isShowIcon
            />

            <Input
              type="password"
              autoComplete="new-password"
              name="confirmPassword"
              label={t("inputs.confirmPassword")}
              placeholder={t("inputs.confirmPassword")}
              control={control as unknown as Control<FieldValues>}
              error={errors?.confirmPassword?.message}
              isShowIcon
            />
          </GlobalStyled.AuthInputsWrapper>

          <Styled.Button type="submit">{t("button")}</Styled.Button>
        </GlobalStyled.AuthForm>

        <Styled.LinkWrapper>
          <Styled.LinkLabel variant="body1">{t("exists")}</Styled.LinkLabel>

          <Link text={t("link")} href={`/${locale}${PATH.LOGIN}`} isLinkColor />
        </Styled.LinkWrapper>
      </Box>
    </GlobalStyled.AuthSection>
  );
};

export default Register;
