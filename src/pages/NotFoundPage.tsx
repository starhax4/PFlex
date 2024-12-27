import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/ui/animation-wrapper";

export default function NotFoundPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#1E1E2F]">
      <div className="fixed inset-0 z-10 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <AnimationWrapper>
        <div className="relative z-20 grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-primary md:text-lg">
              404
            </p>
            <h1 className="mt-4 font-space-grotesk text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Page not found
            </h1>
            <p className="mt-6 text-pretty text-base text-gray-400 sm:text-lg md:text-xl">
              Sorry, we couldn't find the page you're looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                className="px-6 py-2 text-sm md:px-8 md:py-3 md:text-base"
              >
                <Link to="/">Go back home</Link>
              </Button>
              
              <a
                href="mailto:starhax4@gmail.com"
                target="_blank"
                className="text-sm font-semibold text-white transition-colors hover:text-primary md:text-base"
              >
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </AnimationWrapper>
    </main>
  );
}
