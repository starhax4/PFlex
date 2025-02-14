import { useEffect } from "react";
import SiteCard from "./siteCard";
import { useSitesStore } from "@/store/sitesStore";

const Sites = () => {
  const { sites, isLoading, fetchSites } = useSitesStore();
  useEffect(() => {
    if (!sites) fetchSites();
  }, [sites, fetchSites]);
  return (
    <>
      {isLoading ? (
        <div className="mx-auto flex items-center justify-center h-screen">
          <p className="text-xl">loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-3">
          {sites?.map((site) => {
            return (
              <SiteCard
                id={site.id}
                title={site.title}
                img=""
                siteUrl={site.subdomain}
                published={site.published}
                updatedAt={site.updatedAt}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sites;
