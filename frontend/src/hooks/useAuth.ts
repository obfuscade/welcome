import { yupResolver } from "@hookform/resolvers/yup";
import {
  DefaultValues,
  FieldValues,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { useAuthStore } from "../store/authStore";
import { IUserLogin } from "../types";

interface IProps<T extends FieldValues> {
  validation: AnyObjectSchema;
  defaultValues: DefaultValues<T>;
  isLogin: boolean;
}

interface UseAuthReturnType<T extends FieldValues> {
  register: UseFormReturn<T>["register"];
  handleSubmit: ReturnType<UseFormReturn<T>["handleSubmit"]>;
  errors: UseFormReturn<T>["formState"]["errors"];
}

function useAuth<T extends FieldValues>({
  validation,
  defaultValues,
  isLogin,
}: IProps<T>): UseAuthReturnType<T> {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(validation),
    defaultValues,
  });
  const setUser = useAuthStore((state) => state.set);

  const handleSubmitAction = (data: T) => {
    alert(isLogin ? "Login successful" : "Registration successful");

    // Save data to the store
    setUser(data as unknown as IUserLogin);

    // Clear all fields
    reset();
  };

  return {
    register,
    handleSubmit: handleSubmit(handleSubmitAction),
    errors,
  };
}

export default useAuth;
