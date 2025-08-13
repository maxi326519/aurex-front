import { initMovement, Movement } from "./Movement";
import { Product } from "./Product";

// Context types
export interface StoreContextType {
  store: StoreState;
  setStore: (newData: Partial<StoreState>) => void;
}

// Items store types
export type LoadingState = boolean;
export type CartState = Movement;
export type ProductState = Product[];
export type HistoryState = Movement[];

// Global store type
export interface StoreState {
  loading: boolean;
  cart: CartState;
  products: ProductState;
  history: HistoryState;
}

export const initLoadingState = (): LoadingState => false;
export const initCartState = (): CartState => initMovement();
export const initProductState = (): ProductState => [];
export const initHistoryState = (): HistoryState => [];

export const initStoreState = (): StoreState => ({
  loading: initLoadingState(),
  cart: initCartState(),
  products: initProductState(),
  history: initHistoryState(),
});
