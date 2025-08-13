import { createContext, useEffect, useState } from "react";
import {
  initStoreState,
  StoreContextType,
  StoreState,
} from "../interfaces/StoreState";

export const StoreContext = createContext<StoreContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: Props): JSX.Element => {
  const [store, setStore] = useState<StoreState>(initStoreState());

  useEffect(() => {
    console.log(store);
  }, [store]);

  const updateStore = (newData: Partial<StoreState>) => {
    setStore((prevStore) => ({
      ...prevStore,
      ...newData,
    }));
  };

  return (
    <StoreContext.Provider value={{ store, setStore: updateStore }}>
      {children}
    </StoreContext.Provider>
  );
};
