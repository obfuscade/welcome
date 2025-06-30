export const PATH = {
  HOME: "/login",
  REGISTER: "/register",
  LOGIN: "/login",
};

export const MAX_NAME_LETTER = 30;
export const MIN_NAME_LETTER = 2;

export const REGEXP_NAME = /^[A-Za-z]+$/;
export const REGEXP_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const REGEXP_PHONE = /^\+?[0-9]{10,14}$/;

export const DEFAULT_COUNTRY = "us";

export const LOCALES = [
  { code: "en", label: "English" },
  { code: "he", label: "עברית" },
];
