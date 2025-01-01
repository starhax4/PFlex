import { Link } from "react-router";
import { Button } from "../ui/button";
import GradientBg from "./gradient";
import AnimationWrapper from "../ui/animation-wrapper";
import { Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero">
      <AnimationWrapper>
        <div className="relative z-20 p-4 pt-1 text-center md:top-12 md:p-6 md:px-7">
          <div className="flex flex-col md:block">
            <span className="font-space-grotesk text-3xl font-bold leading-relaxed text-white sm:text-5xl md:text-[4.5rem] md:leading-relaxed lg:text-7xl">
              Build your Dream{" "}
            </span>
            <span className="font-space-grotesk text-3xl font-bold text-primary underline sm:text-5xl md:text-7xl lg:text-7xl">
              Portfolio
            </span>
            <span className="font-space-grotesk text-3xl font-bold text-white sm:text-5xl md:text-7xl lg:text-7xl">
              {" "}
              {/* <br className="md:hidden" />
              <span className="hidden md:inline"> </span> */}
              site
              <br />
              in minutes, not hours
            </span>
          </div>

          <div className="pt-4 text-center font-['Inter'] text-base font-normal text-white sm:text-xl md:pt-6 md:text-2xl">
            Create your portfolio site in just minutes.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Select, tweak and Publish. Its that easy
          </div>

          <div className="relative z-20 flex items-center justify-center pt-6 md:pt-8">
            <Button
              asChild
              className="px-6 py-2 text-sm md:px-10 md:py-3 md:text-base"
            >
              <Link to="/sign-up">
                <Sparkles className="mr-2" /> Start Building Now
              </Link>
            </Button>
          </div>

          <div className="relative top-[3rem] flex items-center justify-center md:top-[12rem]">
            <GradientBg />
          </div>

          <div className="relative z-20 flex items-center justify-center pt-6 md:pt-10">
            <img
              className="w-full max-w-[90vw] rounded-lg md:max-w-[1200px]"
              src="/images/hero-image.png"
              alt="editor_image"
              fetchPriority="high"
              loading="eager"
              width={1200}
              height={645}
            />
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Hero;
