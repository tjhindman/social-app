import create from "zustand";

export const useStore = create((set) => ({
  authUser: { token: "abc" },
  currentUser: {},
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
  //   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  //   removeAllBears: () => set({ bears: 0 }),
}));
