import { Link } from "react-router";
import { Button } from "../ui/button";
import AnimationWrapper from "../ui/animation-wrapper";

export default function CTA() {
  return (
    <div className="py-12 md:py-24">
      <AnimationWrapper>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-gray-900/50 px-6 pt-16 shadow-2xl backdrop-blur-sm transition-colors duration-300 hover:bg-gray-800/50 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            {/* Gradient Background */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <div className="absolute size-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent" />
            </div>

            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="font-space-grotesk text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                Start Building Your
                <br />
                Portfolio Today
              </h2>
              <p className="mt-6 font-['Inter'] text-base text-gray-300 md:text-lg">
                Create, customize, and launch your professional portfolio in
                minutes. Join thousands of creators who trust PFlex for their
                online presence.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button
                  asChild
                  className="px-6 py-2 text-sm md:px-10 md:py-3 md:text-base"
                >
                  <Link to="/sign-up">Get started</Link>
                </Button>
                <Link
                  to="#features"
                  className="font-['Inter'] text-sm font-semibold text-white transition-colors hover:text-primary"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="relative mt-16 h-80 lg:mt-8">
              <img
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="/images/hero-image.png"
                alt="Editor preview"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </div>
  );
}
