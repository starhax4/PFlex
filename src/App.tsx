import { useEffect } from "react";
import { useAuth } from "@/context/authContext";
import { useNavigate } from "react-router-dom";

function App() {
  const { clearError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const unlisten = navigate.listen(() => {
      clearError();
    });
    return unlisten;
  }, [clearError, navigate]);

  return <div></div>;
}

export default App;
