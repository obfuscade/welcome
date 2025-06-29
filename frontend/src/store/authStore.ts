import { create } from "zustand";
import { IUserLogin, IUserRegister } from "../types";

interface AuthState {
  user: IUserLogin | IUserRegister | null;
  set: (user: IUserLogin | IUserRegister) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  set: (user) => {
    set({
      user,
    });
  },
}));
