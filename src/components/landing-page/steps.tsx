import { Link } from "react-router";
import { Button } from "../ui/button";

const Steps = () => {
  return (
    <section>
      <div>
        <div className="relative z-10 flex w-full flex-col-reverse gap-8 px-4 py-12 md:flex-row md:items-center md:justify-center md:px-36 md:py-24">
          <div className="relative z-10 text-center md:text-left">
            <div className="font-space-grotesk text-3xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              its that
              <br />
              Simple
            </div>
            <div className="px-9 pt-4 font-['Inter'] text-base font-normal text-white sm:px-0 sm:text-xl md:pt-10 md:text-2xl">
              Create your portfolio site in just minutes.
              <br className="hidden sm:block" />
              Select, tweak and Publish. Its that easy
            </div>
            <div className="pt-6 md:pt-10">
              <Button
                asChild
                className="px-6 py-2 text-sm md:px-10 md:py-3 md:text-base"
              >
                <Link to="/sign-up"> Get started </Link>
              </Button>
            </div>
          </div>
          <div className="relative z-10 flex justify-center md:justify-end">
            <div>
              <FeatureBar
                title="Sign Up at PFlex"
                description="Go sign up using Google , Facebook , or simply a username and password"
                icon="/icons/users.svg"
              />
              <FeatureBar
                title="Select a template"
                description="Select a pre-built niche specific template, edit it according to your needs and save it"
                icon="/icons/template-white.svg"
              />
              <FeatureBar
                title="Publish & Go live"
                description="Publish your customized template in single click, and go live"
                icon="/icons/live.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Steps;

interface FeatureBarProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureBar = ({ title, description, icon }: FeatureBarProps) => {
  return (
    <div className="mb-4 w-full px-4 sm:px-0">
      <div className="group relative flex w-full cursor-pointer flex-col rounded-lg border border-gray-400 p-4 transition-all duration-300 hover:bg-gray-800 sm:w-96">
        <div className="flex items-start gap-4">
          <div className="flex h-6 w-6 items-center justify-center overflow-hidden rounded-sm">
            <img src={icon} alt="icon" className="h-4 w-4" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-['Inter'] text-lg font-semibold leading-7 text-white">
              {title}
            </h3>
            <p className="font-['Inter'] text-sm font-normal leading-tight text-white">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
