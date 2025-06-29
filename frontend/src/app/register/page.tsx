"use client";

import { Box, Typography } from "@mui/material";
import { PATH } from "../../constants";
import Link from "../../components/Link";
import Input from "../../components/Input";
import { validation, defaultValues } from "./form";
import useAuth from "../../hooks/useAuth";
import { IUserRegister } from "../../types";
import * as Styled from "./styles";
import * as GlobalStyled from "../../styles";
import { Control, FieldValues } from "react-hook-form";

const Register = () => {
  const { control, handleSubmit, errors } = useAuth<
    IUserRegister & { confirmPassword: string }
  >({
    validation,
    defaultValues,
  });

  return (
    <GlobalStyled.AuthSection component="section">
      <GlobalStyled.AuthWelcome>
        <Typography variant="h1">Sign up</Typography>

        <Typography variant="body1">
          Create your account to get started.
        </Typography>
      </GlobalStyled.AuthWelcome>

      <Box>
        <GlobalStyled.AuthForm onSubmit={handleSubmit} noValidate>
          <GlobalStyled.AuthInputsWrapper>
            <Input
              type="text"
              name="firstName"
              autoComplete="given-name"
              label="First Name"
              placeholder="Enter your first name"
              control={control as unknown as Control<FieldValues>}
              error={errors?.firstName?.message}
            />

            <Input
              type="text"
              name="lastName"
              autoComplete="family-name"
              label="Last Name"
              placeholder="Enter your last name"
              control={control as unknown as Control<FieldValues>}
              error={errors?.lastName?.message}
            />

            <Input
              type="email"
              name="email"
              autoComplete="email"
              label="Email Address"
              placeholder="Email Address"
              control={control as unknown as Control<FieldValues>}
              error={errors?.email?.message}
            />

            <Input
              type="tel"
              name="phone"
              label="Phone Number"
              autoComplete="email"
              placeholder="Phone Number"
              control={control as unknown as Control<FieldValues>}
              error={errors?.phone?.message}
              isPhone
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              autoComplete="new-password"
              control={control as unknown as Control<FieldValues>}
              error={errors?.password?.message}
              isShowIcon
            />

            <Input
              type="password"
              autoComplete="new-password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              control={control as unknown as Control<FieldValues>}
              error={errors?.confirmPassword?.message}
              isShowIcon
            />
          </GlobalStyled.AuthInputsWrapper>

          <Styled.Button type="submit">Sign Up</Styled.Button>
        </GlobalStyled.AuthForm>

        <Styled.LinkWrapper>
          <Styled.LinkLabel variant="body1">
            Already have an account?
          </Styled.LinkLabel>

          <Link text="Log In" href={PATH.LOGIN} isLinkColor />
        </Styled.LinkWrapper>
      </Box>
    </GlobalStyled.AuthSection>
  );
};

export default Register;
