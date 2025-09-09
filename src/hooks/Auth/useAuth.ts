import { LoginData, User, UserRol } from "../../interfaces/Users";
import axios, { AxiosError } from "axios";
import { useAuthStore } from "./useAuthStore";
import { useEffect } from "react";

interface UseAuth {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  register: (
    email: string,
    password: string,
    role: UserRol
  ) => Promise<User | undefined>;
  login: (loginData: LoginData) => Promise<User | undefined>;
  logout: () => Promise<void>;
  reLogin: () => Promise<void>;
}

export const useAuth = (): UseAuth => {
  const {
    user,
    token,
    isAuthenticated,
    loading,
    setUser,
    setToken,
    setLoading,
    logout: logoutStore,
  } = useAuthStore();

  useEffect(() => {
    console.log(user, isAuthenticated);
  }, [user, isAuthenticated]);

  const configureAxiosInterceptor = (token: string) => {
    axios.interceptors.request.clear();
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });
  };

  const register = async (
    email: string,
    password: string,
    role: UserRol
  ): Promise<User | undefined> => {
    try {
      const response = await axios.post("/sesion/signup", {
        email,
        password,
        role,
      });
      console.log(response);
      if (!response.data?.user) throw new Error("Error to create user");

      return response.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (loginData: LoginData): Promise<User | undefined> => {
    setLoading(true);
    try {
      // Login
      const response = await axios.post("/sesion/login", loginData);

      // Get TOKEN and user
      const userData = response.data.user;
      const token = response.data.token;

      if (!userData) throw new Error("User not found");
      if (!token) throw new Error("Token error");

      // Configure axios interceptor
      configureAxiosInterceptor(token);

      // Save token to localStorage (manualmente para consistencia)
      localStorage.setItem("token", token);

      // Update store
      setUser({ ...userData, token });
      setToken(token);

      return userData;
    } catch (error) {
      console.error("Login error:", error);
      if (error instanceof AxiosError) {
        throw new Error(
          error?.response?.data?.error || error.message || "Login failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async (): Promise<void> => {
    setLoading(true);
    try {
      // Clear localStorage
      localStorage.removeItem("token");

      // Clear axios interceptors
      axios.interceptors.request.clear();

      // Update store
      logoutStore();
    } catch (error) {
      console.error("Logout error:", error);
      if (error instanceof AxiosError) {
        throw new Error(
          error?.response?.data?.error || error.message || "Logout failed"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const reLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      // Check token
      if (!token) throw new Error("Token doesn't exist");

      // Configure axios interceptor
      configureAxiosInterceptor(token);

      // Login with token
      const response = await axios.post("/sesion/login/token");

      // Update store
      setUser({ ...response.data, token });
      setToken(token);
    } catch (error) {
      console.error("Relogin error:", error);

      // Clear invalid token
      localStorage.removeItem("token");
      logoutStore();

      if (error instanceof AxiosError) {
        throw new Error(
          error?.response?.data?.error || error.message || "Session expired"
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return {
    user,
    token,
    isAuthenticated,
    loading,
    register,
    login,
    logout,
    reLogin,
  };
};
