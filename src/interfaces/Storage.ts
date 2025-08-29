export interface Storage {
  id?: string;
  name: string;
  height: number;
  width: number;
  large: number;
  currentCapacity: number;
  estimatedCapacity: number;
  allowedQuantity: number;
}

export const initStorage = (): Storage => ({
  name: "",
  height: 0,
  width: 0,
  large: 0,
  currentCapacity: 0,
  estimatedCapacity: 0,
  allowedQuantity: 0,
});
