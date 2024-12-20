import { Link } from "react-router";
import { Button } from "../ui/button";
import GradientBg from "./gradient";
import AnimationWrapper from "../ui/animation-wrapper";

const FeaturesOne = () => {
  return (
    <section id="features" className="relative mx-auto">
      <AnimationWrapper>
        <div className="absolute inset-0 z-0">
          <GradientBg />
        </div>

        <div className="relative z-10 flex w-full flex-col-reverse gap-8 px-4 py-12 md:flex-row md:items-center md:justify-evenly md:px-36 md:py-24">
          <div className="relative z-10 text-center md:text-left">
            <div className="font-space-grotesk text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Features
              <br />
              you would love
            </div>
            <div className="pt-4 font-['Inter'] text-base font-normal text-white sm:text-xl md:pt-10 md:text-2xl">
              Create your portfolio site in just minutes.
              <br className="hidden sm:block" />
              Select, tweak and Publish. Its that easy
            </div>
            <div className="pt-6 md:pt-10">
              <Button
                asChild
                className="px-6 py-2 text-sm md:px-10 md:py-3 md:text-base"
              >
                <Link to="/sign-up"> try these out </Link>
              </Button>
            </div>
          </div>
          <div className="relative z-10 flex justify-center md:justify-end">
            <img
              src="/images/features-1.svg"
              alt="features_sidebar"
              loading="lazy"
              className="h-auto w-[280px] sm:w-[350px] md:w-[416px]"
              width={416}
              height={533}
            />
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};
export default FeaturesOne;
