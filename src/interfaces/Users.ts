export interface User {
  id?: string;
  name: string;
  email: string;
  rol: UserRol;
}

export enum UserRol {
  SUPER_ADMIN = "Super Admin",
  ADMIN = "Admin",
  CLIENT = "Client",
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
  rol: UserRol.CLIENT,
});
