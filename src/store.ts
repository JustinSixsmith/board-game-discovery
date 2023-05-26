import { create } from "zustand";

interface GameQuery {
  categoryId?: string;
  mechanicId?: string;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setCategoryId: (categoryId: string) => void;
  setMechanicId: (mechanicId: string) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
  setCategoryId: (categoryId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, categoryId } })),
  setMechanicId: (mechanicId) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, mechanicId } })),
  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
