import { createContext, useContext, useState } from "react";
// import { AuthContext } from "./authContext";

interface SiteContext {
  siteId: string | null;
  setSiteId: React.Dispatch<React.SetStateAction<string | null>>;
}
// eslint-disable-next-line react-refresh/only-export-components
export const SiteContext = createContext<SiteContext>({
  siteId: null,
  setSiteId: () => {},
});

export const SiteProvider = ({ children }: { children: React.ReactNode }) => {
  const [siteId, setSiteId] = useState<string | null>(null);

  return (
    <SiteContext.Provider value={{ siteId, setSiteId }}>
      {children}
    </SiteContext.Provider>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export const useSite = () => {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
