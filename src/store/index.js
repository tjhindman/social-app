import create from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useStore = create(
  devtools(
    persist((set) => ({
      authUser: { token: "" },
      selectedUser: { username: "abc" },
      messages: [
        "thest",
        "thest",
        "thest",
        "thest",
        "thest",
        "thest",
        "thest",
        "thest",
      ],
      users: [],
      login: () => set({ authUser: { token: "abc" } }),
      logout: () => set({ authUser: {} }),
      //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      //   removeAllBears: () => set({ bears: 0 }),
    }))
  )
);
