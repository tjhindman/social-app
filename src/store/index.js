import create from "zustand";

export const useStore = create((set) => ({
  authUser: { token: "" },
  currentUser: {},
  messages: [],
  users: [],
//   increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
//   removeAllBears: () => set({ bears: 0 }),
}));
