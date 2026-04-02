import { create } from "zustand";
import { persist } from "zustand/middleware";
import axios from "axios";

interface IUser {
  id: number;
  email: string;
}

interface AuthState {
  user: IUser | null;
  token: string | null;

  setUser: (data: { user: IUser; token: string }) => void;

  login: (data: { email: string; password: string }) => Promise<void>;
  register: (data: {
    username: string;
    email: string;
    password: string;
  }) => Promise<void>;

  logout: () => void;

  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(

    (set) => ({
      user: null,
      token: null,

      isAuthenticated: false,

      // ✅ set user
      setUser: ({ user, token }) => {
        set({
          user,
          token,
          isAuthenticated: true,
        });
      },

      // 🔥 LOGIN
      login: async (data) => {
        const res = await axios.post(
          "http://localhost:3000/login",
          data
        );

        set({
          user: res.data.user,
          token: res.data.accessToken,
          isAuthenticated: true,
        });
      },

      // 🔥 REGISTER + AUTO LOGIN
      register: async (data) => {
        const res = await axios.post(
          "http://localhost:3000/register",
          data
        );

        set({
          user: res.data.user,
          token: res.data.accessToken,
          isAuthenticated: true,
        });
      },

      // 🔥 LOGOUT
      logout: () => {
        set({
          user: null,
          token: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
    }
  )
);