import { Link } from "react-router";
import { Button } from "../ui/button";
import GradientBg from "./gradient";

const Hero = () => {
  return (
    <section id="hero">
      <div className="text-center z-20 p-6 pt-1 relative top-12">
        <span className="text-white text-7xl font-bold font-space-grotesk leading-relaxed">
          Build your Dream{" "}
        </span>
        <span className="text-primary text-7xl font-bold font-space-grotesk underline ">
          Portfolio
        </span>
        <span className="text-white text-7xl font-bold font-space-grotesk ">
          {" "}
          site
          <br />
          in minutes, not hours
        </span>
        <div className="text-center text-white text-2xl font-normal font-['Inter'] pt-2">
          Create your portfolio site in just minutes.Select,
          <br />
          tweak and Publish.Its that easy
        </div>
        <div className="flex justify-center items-center pt-6 z-20 relative">
          <Button asChild className="px-10">
            <Link to="/sign-up"> Get Started </Link>
          </Button>
        </div>
        <div className="flex justify-center relative top-[-22rem] ">
          <GradientBg />
          {/* <div className="w-96 h-96 bg-primary rounded-full blur-3xl" /> */}
        </div>

        <div className="flex justify-center items-center pt-10 z-20 relative ">
          <img
            className="rounded-lg"
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
