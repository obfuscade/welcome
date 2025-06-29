import { object, string } from "yup";
import { VALIDATION_MESSAGES } from "../../constants";
import { IUserLogin } from "../../types";

export const defaultValues: IUserLogin = {
  email: "",
  password: "",
};

export const validation = object().shape({
  email: string()
    .email(VALIDATION_MESSAGES.INVALID("email"))
    .required(VALIDATION_MESSAGES.REQUIRED("Email")),
  password: string().required(VALIDATION_MESSAGES.REQUIRED("Password")),
});
