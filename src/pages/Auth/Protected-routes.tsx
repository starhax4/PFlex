import { Navigate } from "react-router-dom";
import { useAuth } from "@/context/authContext";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>; // Or your loading component
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};
