import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import { AuthState, User } from "@/types/auth";
import { firebaseAuth } from "@/lib/firebase/auth";
import { AuthError } from "@/types/auth";
import {
  getAuthErrorMessage,
  getSignUpErrorMessage,
} from "@/utils/auth-errors";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<boolean>;
  registerUser: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  googleLogin: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  isAuthenticated: () => boolean;
  clearError: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
      setState((prev) => ({
        ...prev,
        user: user as User | null,
        loading: false,
      }));
    });

    return () => unsubscribe();
  }, []);

  const clearError = useCallback(() => {
    setState((prev) => ({ ...prev, error: null }));
  }, []);

  const value = {
    ...state,
    login: async (email: string, password: string) => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));
        await firebaseAuth.login(email, password);
        return true; // Login successful
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: getAuthErrorMessage((error as AuthError).code),
        }));
        return false; // Login failed
      } finally {
        setState((prev) => ({ ...prev, loading: false }));
      }
    },
    registerUser: async (email: string, password: string) => {
      try {
        await firebaseAuth.register(email, password);
        return true;
      } catch (error) {
        setState((prev) => ({
          ...prev,
          error: getSignUpErrorMessage((error as AuthError).code),
        }));
        return false;
      }
    },
    logout: async () => {
      try {
        await firebaseAuth.logout();
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      }
    },
    googleLogin: async () => {
      try {
        await firebaseAuth.googleLogin();
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      }
    },
    resetPassword: async (email: string) => {
      try {
        await firebaseAuth.resetPassword(email);
      } catch (error) {
        setState((prev) => ({ ...prev, error: (error as Error).message }));
      }
    },
    isAuthenticated: () => {
      return !!state.user;
    },
    clearError, // Add this line
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
