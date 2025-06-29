import { create } from "zustand";
import { IUserLogin } from "../types";

interface AuthState {
  user: IUserLogin | null;
  set: (user: IUserLogin) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  set: (user) => {
    set({
      user,
    });
  },
}));
