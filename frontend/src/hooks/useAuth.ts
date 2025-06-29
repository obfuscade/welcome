import { yupResolver } from "@hookform/resolvers/yup";
import {
  Control,
  DefaultValues,
  FieldValues,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { AnyObjectSchema } from "yup";
import { useAuthStore } from "../store/authStore";
import { IUserLogin, IUserRegister } from "../types";

interface IProps<T extends FieldValues> {
  validation: AnyObjectSchema;
  defaultValues: DefaultValues<T>;
  isLogin?: boolean;
}

interface UseAuthReturnType<T extends FieldValues> {
  control: Control<T>;
  handleSubmit: ReturnType<UseFormReturn<T>["handleSubmit"]>;
  errors: UseFormReturn<T>["formState"]["errors"];
}

function useAuth<T extends FieldValues>({
  validation,
  defaultValues,
  isLogin = false,
}: IProps<T>): UseAuthReturnType<T> {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<T>({
    resolver: yupResolver(validation),
    defaultValues,
  });
  const setUser = useAuthStore((state) => state.set);

  const handleSubmitAction = (data: T) => {
    alert(isLogin ? "Login successful" : "Registration successful");

    // Save data to the store
    setUser(data as unknown as IUserLogin | IUserRegister);

    // Clear all fields
    reset();
  };

  return {
    control,
    handleSubmit: handleSubmit(handleSubmitAction),
    errors,
  };
}

export default useAuth;
