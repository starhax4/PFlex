import Banner from "@/components/landing-page/banner";
import Companies from "@/components/landing-page/companies";
import FeaturesOne from "@/components/landing-page/features-first";
import FeaturesTwo from "@/components/landing-page/features-second";
import Footer from "@/components/landing-page/footer";
import CTA from "@/components/landing-page/footer-cta";
import Hero from "@/components/landing-page/Hero";
import NavBar from "@/components/landing-page/navBar";
import Pricing from "@/components/landing-page/pricing";
import Steps from "@/components/landing-page/steps";
import { useBannerShowed } from "@/hooks/useBannerShowed";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Home = () => {
  const { show, setShow } = useScrollDirection();
  const { isBannerShowed } = useBannerShowed();

  return (
    <main className="w-full bg-[#1E1E2F]">
      <div className="m-0 min-h-screen font-sans">
        {/* Sticky navbar moved outside */}
        <div
          className={`sticky top-0 z-50 transition-transform duration-300 ${
            show
              ? "translate-y-0 rounded-md backdrop-blur-sm"
              : "-translate-y-full"
          }`}
          onMouseEnter={() => setShow(true)}
        >
          {isBannerShowed || <Banner />}
          <NavBar />
        </div>

        {/* Main content */}
        <div className="relative w-full bg-[#1E1E2F]">
          <div className="fixed inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          <div className="relative z-20 space-y-16 md:space-y-24">
            <Hero />
            <Companies />
            <FeaturesOne />
            <FeaturesTwo />
            <Steps />
            <Pricing />
            <CTA />
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
