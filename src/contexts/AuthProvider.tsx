import { createContext, useEffect, useState } from "react";
import {
  AuthContextType,
  AuthState,
  initAuthState,
} from "../interfaces/AuthState";

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface Props {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [auth, setAuth] = useState<AuthState>(initAuthState());

  useEffect(() => {
    console.log(auth);
  }, [auth]);

  const updateStore = (newData: Partial<AuthState>) => {
    setAuth((prev) => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <AuthContext.Provider value={{ sesion: auth, setSesion: updateStore }}>
      {children}
    </AuthContext.Provider>
  );
};
