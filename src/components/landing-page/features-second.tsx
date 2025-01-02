// import FeatureCard from "./feature-card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div className="group transition-all duration-300 hover:scale-105">
      <div className="inline-flex h-52 w-80 flex-col items-start justify-start gap-3 rounded-xl bg-gray-800 px-8 py-6 shadow-lg transition-all duration-300 hover:bg-gray-700/90 md:h-56 md:w-[340px]">
        <div className="flex h-full flex-col items-start justify-start gap-3">
          <div className="relative h-8 w-8 overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <img src={icon} alt="icon" className="h-full w-full" />
          </div>
          <div className="self-stretch font-['Inter'] text-xl font-semibold leading-7 text-white transition-colors ">
            {title}
          </div>
          <div className="self-stretch font-['Inter'] text-base font-normal leading-relaxed text-gray-300 transition-colors group-hover:text-white">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesTwo = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto flex w-full flex-col items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h2 className="font-space-grotesk text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Everything you need to make
            <br /> your own website
          </h2>
        </div>
        <div className="mt-16 grid w-full max-w-[800px] grid-cols-1 place-items-center gap-8 md:grid-cols-2">
          <FeatureCard
            title={"Drag n Drop"}
            description="Explore the easiest way to create a website if you dont have coding skills or a web developers assistance"
            icon="/icons/grip.svg"
          />
          <FeatureCard
            title={"Templates"}
            description="Provides user with pre-built website templates that can be customized to fit their needs."
            icon="/icons/template.svg"
          />
          <FeatureCard
            title={"Secure by default"}
            description="your portfolio is secured and hosted on one of the best cloud provider over globe."
            icon="/icons/secure.svg"
          />
          <FeatureCard
            title={"No heavy JavaScript"}
            description="your site is SEO optimized as It is in Raw HTML and CSS to boost sites speed."
            icon="/icons/speed.svg"
          />
        </div>
      </div>
    </section>
  );
};
export default FeaturesTwo;
