import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { AppRouter } from "./routes.tsx";
import { AuthProvider } from "./context/authContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  </StrictMode>,
);
