export interface User {
  id?: string;
  name: string;
  email: string;
  photo: string;
  rol: UserRol;
  status: UserStatus;
}

export enum UserRol {
  ADMIN = "Administrador",
  DISPACHER = "Despachador",
  SELLER = "Vendedor",
  CLIENT = "Comprador",
}

export enum UserStatus {
  WAITING = "En espera",
  ACTIVE = "Activo",
  BLOCKED = "Bloqueado",
}

export interface LoginData {
  email: string;
  password: string;
}

export const initLoginData = (): LoginData => ({
  email: "",
  password: "",
});

export const initUser = (): User => ({
  name: "",
  email: "",
  photo: "",
  rol: UserRol.CLIENT,
  status: UserStatus.WAITING,
});
