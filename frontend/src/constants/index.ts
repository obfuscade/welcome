export const PATH = {
  HOME: "/login",
  REGISTER: "/register",
  LOGIN: "/login",
};

export const VALIDATION_MESSAGES = {
  REQUIRED: (text: string) => `${text} is required`,
  INVALID: (text: string) => `Invalid ${text}`,
  DO_NOT_MATCH: (text: string) => `${text} do not match`,
  MIN: (len: number) => `Minimum length is ${len}`,
  MAX: (len: number) => `Maximum length is ${len}`,
  ONLY_LETTERS: (text: string) => `${text} must contain only letters`,
  PASSWORD:
    "Password must be at least 8 english characters, and contain 1 uppercase, 1 lowercase and 1 digit",
};

export const MAX_NAME_LETTER = 30;
export const MIN_NAME_LETTER = 2;
export const REGEXP_NAME = /^[A-Za-z]+$/;
export const REGEXP_PASSWORD = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
export const REGEXP_PHONE = /^\+?[0-9]{10,14}$/;
