import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebase/auth";

interface UserState {
  user: User | null;
  userId: string | null;
  isLoading: boolean;
  fetchUser: () => Promise<void>;
  logout: () => void;
}

export const useUsersStore = create<
  UserState,
  [["zustand/persist", UserState]]
>(
  persist(
    (set) => ({
      user: null,
      userId: null,
      isLoading: false,
      fetchUser: async () => {
        set({ isLoading: true });
        const user = await firebaseAuth.getUser();
        set({ user: user });
        set({ userId: user?.uid });
        set({ isLoading: false });
      },
      logout: () => {},
    }),
    {
      name: "userStore",
    },
  ),
);
