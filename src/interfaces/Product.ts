export interface Product {
  id?: string;
  name: string;
  description: string;
  img: string;
  type: ProductType;
  quantity: number;
  buyPrice: number;
  sellPrice: number;
  profit: number;
  state: ProductState;
  data?: ProductData;
}

export interface ProductSell extends Product {
  total: number,
  quantitySell: number;
}

export type ProductData =
  | RectangularProduct
  | RoundProduct
  | FoldeProduct
  | AnchorProduct;

export enum ProductState {
  AVAILABLE = "Disponible",
  UNAVAILABLE = "Unavaibale",
}

export enum ProductType {
  RECTANGULAR = "Rectangular",
  CIRCULAR = "Circular",
  PLEGADO = "Plegado",
  ANCLAJE = "Anclaje",
}

export interface RectangularProduct {
  firstSide: number;
  secondSide: number;
  thickness: number;
  holes: number;
}

export interface RoundProduct {
  diameter: number;
  thickness: number;
  holes: number;
}

export interface FoldeProduct {
  holes: number;
  base: number;
  leftSide: number;
  rightSide: number;
  numberOfFolds: number;
  large: number;
  thickness: number;
}

export interface AnchorProduct {
  metric: number;
  large: number;
}

export const initProduct = (): Product => ({
  name: "",
  description: "",
  img: "",
  type: ProductType.RECTANGULAR,
  quantity: 0,
  buyPrice: 0,
  sellPrice: 0,
  profit: 40,
  state: ProductState.AVAILABLE,
});
