import { object, ref, string } from "yup";
import {
  MAX_NAME_LETTER,
  MIN_NAME_LETTER,
  REGEXP_NAME,
  REGEXP_PASSWORD,
  REGEXP_PHONE,
} from "../../../constants";
import { IUserRegister } from "../../../types";

export const defaultValues: IUserRegister & { confirmPassword: string } = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validation = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string, params?: Record<string, any>) => string,
) => {
  return object().shape({
    email: string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.requiredEmail")),
    password: string()
      .required(t("validation.requiredPassword"))
      .matches(REGEXP_PASSWORD, t("validation.passwordRequirements")),
    confirmPassword: string()
      .oneOf([ref("password")], t("validation.passwordsDoNotMatch"))
      .required(t("validation.requiredConfirmPassword")),
    phone: string()
      .required(t("validation.requiredPhoneNumber"))
      .matches(REGEXP_PHONE, t("validation.phoneNumberInvalid")),
    firstName: string()
      .required(t("validation.requiredFirstName"))
      .matches(REGEXP_NAME, t("validation.onlyLettersFirstName"))
      .min(MIN_NAME_LETTER, t("validation.minName", { len: MIN_NAME_LETTER }))
      .max(MAX_NAME_LETTER, t("validation.maxName", { len: MAX_NAME_LETTER })),
    lastName: string()
      .required(t("validation.requiredLastName"))
      .matches(REGEXP_NAME, t("validation.onlyLettersLastName"))
      .min(MIN_NAME_LETTER, t("validation.minName", { len: MIN_NAME_LETTER }))
      .max(MAX_NAME_LETTER, t("validation.maxName", { len: MAX_NAME_LETTER })),
  });
};
