import Banner from "@/components/landing-page/banner";
import Hero from "@/components/landing-page/Hero";
import NavBar from "@/components/landing-page/navBar";
import { useScrollDirection } from "@/hooks/useScrollDirection";

const Home = () => {
  const { show, setShow } = useScrollDirection();

  return (
    <main className="w-full bg-[#1E1E2F]">
      <div className="min-h-screen m-0 font-sans">
        <div className="relative h-screen w-full bg-[#1E1E2F]">
          <div 
            className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-10 inset-0"
          >
            <div 
              className={`sticky top-0 z-20 transition-transform duration-300 ${
                show ? 'translate-y-0' : '-translate-y-full'
              }`}
              onMouseEnter={() => setShow(true)}
            >
              <Banner/>
              <NavBar />
            </div>
          </div>
          <Hero />
        </div>
      </div>
    </main>
  );
};

export default Home;
