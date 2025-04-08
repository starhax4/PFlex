import { create } from "zustand";
import { getAllSites } from "@/lib/db/sites";

interface SiteState {
  templates: Site[] | null;
  isLoading: boolean;
  fetchTempltes: () => Promise<void>;
}
interface Site {
  id: string;
  title: string;
  published: boolean;
  subdomain: string;
  updatedAt: string;
}

export const useTemplatesStore = create<SiteState>((set) => ({
  templates: null,
  isLoading: false,
  fetchTempltes: async () => {
    set({ isLoading: true });
    const data = await getAllSites();
    set({ templates: data as Site[] });
    set({ isLoading: false });
  },
}));
