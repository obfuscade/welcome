"use client";

import { Box, Typography } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { PATH } from "../../constants";
import Link from "../../components/Link";
import Input from "../../components/Input";
import { validation, defaultValues } from "./form";
import useAuth from "../../hooks/useAuth";
import { IUserRegister } from "../../types";
import * as Styled from "./styles";
import * as GlobalStyled from "../../styles";

const Register = () => {
  const { register, handleSubmit, errors } = useAuth<
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
              autocomplete="given-name"
              label="First Name"
              placeholder="Enter your first name"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.firstName?.message}
            />

            <Input
              type="text"
              name="lastName"
              autocomplete="family-name"
              label="Last Name"
              placeholder="Enter your last name"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.lastName?.message}
            />

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
              type="tel"
              name="phone"
              label="Phone Number"
              autocomplete="email"
              placeholder="Phone Number"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.phone?.message}
            />

            <Input
              type="password"
              name="password"
              label="Password"
              placeholder="Password"
              autocomplete="new-password"
              register={register as unknown as UseFormRegister<FieldValues>}
              error={errors?.password?.message}
              isShowIcon
            />

            <Input
              type="password"
              autocomplete="new-password"
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              register={register as unknown as UseFormRegister<FieldValues>}
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
