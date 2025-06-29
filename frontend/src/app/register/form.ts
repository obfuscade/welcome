import { object, ref, string } from "yup";
import {
  MAX_NAME_LETTER,
  MIN_NAME_LETTER,
  REGEXP_NAME,
  REGEXP_PASSWORD,
  REGEXP_PHONE,
  VALIDATION_MESSAGES,
} from "../../constants";
import { IUserRegister } from "../../types";

export const defaultValues: IUserRegister & { confirmPassword: string } = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const validation = object().shape({
  email: string()
    .email(VALIDATION_MESSAGES.INVALID("email"))
    .required(VALIDATION_MESSAGES.REQUIRED("Email")),
  password: string()
    .required(VALIDATION_MESSAGES.REQUIRED("Password"))
    .matches(REGEXP_PASSWORD, VALIDATION_MESSAGES.PASSWORD),
  confirmPassword: string()
    .oneOf([ref("password")], VALIDATION_MESSAGES.DO_NOT_MATCH("Passwords"))
    .required(VALIDATION_MESSAGES.REQUIRED("Confirm password")),
  phone: string()
    .required(VALIDATION_MESSAGES.REQUIRED("Phone number"))
    .matches(REGEXP_PHONE, VALIDATION_MESSAGES.INVALID("phone number")),
  firstName: string()
    .required(VALIDATION_MESSAGES.REQUIRED("First name"))
    .matches(REGEXP_NAME, VALIDATION_MESSAGES.ONLY_LETTERS("First name"))
    .min(MIN_NAME_LETTER, VALIDATION_MESSAGES.MIN(MIN_NAME_LETTER))
    .max(MAX_NAME_LETTER, VALIDATION_MESSAGES.MAX(MAX_NAME_LETTER)),
  lastName: string()
    .required(VALIDATION_MESSAGES.REQUIRED("Last name"))
    .matches(REGEXP_NAME, VALIDATION_MESSAGES.ONLY_LETTERS("Last name"))
    .min(MIN_NAME_LETTER, VALIDATION_MESSAGES.MIN(MIN_NAME_LETTER))
    .max(MAX_NAME_LETTER, VALIDATION_MESSAGES.MAX(MAX_NAME_LETTER)),
});
