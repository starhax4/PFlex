import { Button } from "../ui/button";
import { Link } from "react-router";
import AnimationWrapper from "../ui/animation-wrapper";
import { tiers } from "@/lib/data/tiers";

const Pricing = () => {
  return (
    <section id="pricing" className="relative py-12 md:py-24">
      <AnimationWrapper>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-space-grotesk text-3xl font-bold text-white sm:text-5xl md:text-6xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 font-['Inter'] text-base text-gray-300 md:text-lg">
              Choose the perfect plan for your portfolio needs. No hidden fees,
              no surprises.
            </p>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className={`rounded-2xl border border-gray-700 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-gray-800/50 xl:p-10 ${tier.recommended ? "border-primary/50" : ""}`}
              >
                <div className="mb-8">
                  <h3 className="font-space-grotesk text-xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-gray-300">
                    {tier.description}
                  </p>
                  <p className="mt-6">
                    <span className="font-space-grotesk text-4xl font-bold text-white">
                      ${tier.price}
                    </span>
                    <span className="font-['Inter'] text-sm text-gray-300">
                      /month
                    </span>
                  </p>
                  <Button
                    asChild
                    className={`mt-6 w-full ${
                      tier.recommended
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    <Link to={tier.href}>{tier.cta}</Link>
                  </Button>
                </div>
                <ul className="space-y-4 text-sm leading-6 text-gray-300">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </AnimationWrapper>
    </section>
  );
};

export default Pricing;
