import { Link } from "react-router";
import { Button } from "../ui/button";
import GradientBg from "./gradient";

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-center z-20 p-4 md:p-6 md:px-7 pt-1 relative md:top-12">
        <div className="flex flex-col md:block">
          <span className="text-white text-3xl md:text-[4.5rem] sm:text-5xl lg:text-7xl font-bold font-space-grotesk leading-relaxed md:leading-relaxed ">
            Build your Dream{" "}
          </span>
          <span className="text-primary text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold font-space-grotesk underline">
            Portfolio
          </span>
          <span className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-7xl font-bold font-space-grotesk">
            {" "}
            {/* <br className="md:hidden" />
            <span className="hidden md:inline"> </span> */}
            site
            <br />
            in minutes, not hours
          </span>
        </div>

        <div className="text-center text-white text-base sm:text-xl md:text-2xl font-normal font-['Inter'] pt-4 md:pt-6">
          Create your portfolio site in just minutes.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Select, tweak and Publish. Its that easy
        </div>

        <div className="flex justify-center items-center pt-6 md:pt-8 z-20 relative">
          <Button
            asChild
            className="px-6 md:px-10 py-2 md:py-3 text-sm md:text-base"
          >
            <Link to="/sign-up"> Get Started </Link>
          </Button>
        </div>

        <div className="flex justify-center items-center relative md:top-[12rem] top-[3rem]">
          <GradientBg />
        </div>

        <div className="flex justify-center items-center pt-6 md:pt-10 z-20 relative">
          <img
            className="rounded-lg w-full max-w-[90vw] md:max-w-[1200px] "
            src="https://grapesjs.com/assets/images/sc-grapesjs-newsletter-demo.jpg"
            alt="editor_image"
            fetchPriority="high"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
