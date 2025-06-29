"use client";

import { Box, Typography } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { PATH } from "../../constants";
import Link from "../../components/Link";
import Input from "../../components/Input";
import { validation, defaultValues } from "./form";
import useAuth from "../../hooks/useAuth";
import { IUserLogin } from "../../types";
import * as Styled from "./styles";
import * as GlobalStyled from "../../styles";

const Login = () => {
  const { register, handleSubmit, errors } = useAuth<IUserLogin>({
    validation,
    defaultValues,
    isLogin: true,
  });

  return (
    <GlobalStyled.AuthSection component="section">
      <GlobalStyled.AuthWelcome>
        <Typography variant="h1">Log in</Typography>

        <Typography variant="body1">Welcome! Login to continue</Typography>
      </GlobalStyled.AuthWelcome>

      <Box>
        <GlobalStyled.AuthForm onSubmit={handleSubmit} noValidate>
          <GlobalStyled.AuthInputsWrapper>
            <Input
              type="email"
              name="email"
              autocomplete="email"
              label="Email Address"
              placeholder="Email Address"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.email?.message}
            />

            <Input
              type="password"
              name="password"
              autocomplete="current-password"
              label="Password"
              placeholder="Password"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.password?.message}
              isShowIcon
            />
          </GlobalStyled.AuthInputsWrapper>

          <Styled.Button type="submit">Log In</Styled.Button>
        </GlobalStyled.AuthForm>

        <Styled.LinksWrapper>
          <Link text="Forgot Password?" href={PATH.HOME} />

          <Link text="Create New Account" href={PATH.REGISTER} />
        </Styled.LinksWrapper>
      </Box>
    </GlobalStyled.AuthSection>
  );
};

export default Login;
