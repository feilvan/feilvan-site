import { create } from "zustand";

interface StoreState {
  preloadedCount: number;
  increasePreloadedCount: () => void;
}

export const useStore = create<StoreState>((set) => ({
  preloadedCount: 0,
  increasePreloadedCount: () =>
    set((state) => ({ preloadedCount: state.preloadedCount + 1 })),
}));
