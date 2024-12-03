import { create } from "zustand";

interface Item {
  id: number;
  name: string;
}

interface CartState {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
}

const useCartStore = create<CartState>((set) => ({
  items: [],
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) =>
    set((state) => ({ items: state.items.filter((item) => item.id !== id) })),
  clearCart: () => set({ items: [] }),
}));

export default useCartStore;
