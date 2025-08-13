import { StoreContext } from "../../../contexts/StoreProvider";
import { useContext } from "react";

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context)
    throw new Error("useStore debe ser usado dentro de un StoreProvider");

  return context;
};
