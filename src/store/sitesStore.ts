import { create } from "zustand";
import { getAllSites } from "@/lib/db/sites";

interface SiteState {
  sites: Site[] | null;
  isLoading: boolean;
  fetchSites: () => Promise<void>;
}
interface Site {
  id: string;
  title: string;
  published: boolean;
  subdomain: string;
  updatedAt: string;
}

export const useSitesStore = create<SiteState>((set) => ({
  sites: null,
  isLoading: false,
  fetchSites: async () => {
    set({ isLoading: true });
    const data = await getAllSites();
    set({ sites: data as Site[] });
    set({ isLoading: false });
  },
}));
