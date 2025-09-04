import { Movement, initMovement } from "../../interfaces/Movement";
import { Product } from "../../interfaces/Product";
import { create } from "zustand";

interface CartState {
  cart: Movement;
  addItem: (product: Product) => void;
  setItems: (products: Product[]) => void;
  getItems: () => Product[];
  deleteItem: (index: number) => void;
  clear: () => void;
}

const useCartStore = create<CartState>((set, get) => ({
  cart: initMovement(),

  addItem: (product: Product) => {
    if (product.totalStock > 1) {
      set((state) => ({
        cart: {
          ...state.cart,
          items: [...state.cart.items, product],
        },
      }));
    }
  },

  setItems: (products: Product[]) => {
    set(() => ({
      cart: {
        ...get().cart,
        items: products,
      },
    }));
  },

  getItems: () => {
    return get().cart.items;
  },

  deleteItem: (index: number) => {
    set((state) => ({
      cart: {
        ...state.cart,
        items: state.cart.items.filter((_, i) => i !== index),
      },
    }));
  },

  clear: () => {
    set(() => ({
      cart: initMovement(),
    }));
  },
}));

export default useCartStore;
