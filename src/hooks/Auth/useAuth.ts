import axios, { AxiosError } from "axios";
import { LoginData, User } from "../../interfaces/Users";
import { useAuthStore } from "./useAuthStore";
import { useEffect } from "react";

interface UseAuth {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (loginData: LoginData) => Promise<void>;
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

  const login = async (loginData: LoginData): Promise<void> => {
    setLoading(true);
    try {
      // Login
      const response = await axios.post("/login", loginData);

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
      const response = await axios.post("/login/token");

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
    login,
    logout,
    reLogin,
  };
};
