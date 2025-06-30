import { object, string } from "yup";
import { IUserLogin } from "../../../types";

export const defaultValues: IUserLogin = {
  email: "",
  password: "",
};

export const validation = (t: (key: string) => string) => {
  return object().shape({
    email: string()
      .email(t("validation.invalidEmail"))
      .required(t("validation.requiredEmail")),
    password: string().required(t("validation.requiredPassword")),
  });
};
