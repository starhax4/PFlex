import { useState, useEffect } from "react";

export const useBannerShowed = () => {
  const [isBannerShowed, setIsBannerShowed] = useState<boolean>(false);

  useEffect(() => {
    const isBannerShowed = sessionStorage.getItem("bannerShow");
    if (isBannerShowed === null) {
      setIsBannerShowed(false);
    } else {
      setIsBannerShowed(true);
    }
  }, []);

  const setBannerShowed = () => {
    sessionStorage.setItem("bannerShow", JSON.stringify(true));
  };

  return { isBannerShowed, setBannerShowed };
};
