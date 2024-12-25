// import FeatureCard from "./feature-card";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  return (
    <div>
      <div className="inline-flex h-44 w-72 flex-col items-start justify-start gap-2.5 rounded-lg bg-gray-800 px-7 py-4 md:h-44 md:w-64">
        <div className="flex h-36 flex-col items-start justify-start gap-0.5">
          <div className="relative h-6 w-6 overflow-hidden">
            <img src={icon} alt="icon" />
          </div>
          <div className="self-stretch font-['Inter'] text-lg font-semibold leading-7 text-white">
            {title}
          </div>
          <div className="self-stretch font-['Inter'] text-sm font-normal leading-tight text-white">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

const FeaturesTwo = () => {
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center px-12 py-4 md:py-14">
        <div className="text-center font-space-grotesk text-3xl font-bold text-white sm:text-5xl md:text-6xl">
          Everything you need to make
          <br /> your own website
        </div>
        <div className="mt-4 flex flex-wrap justify-center gap-4 py-8 md:gap-8 md:py-12">
          <FeatureCard
            title={"Drag n Drop"}
            description="Explore the easiest way to create a website if you dont have coding skills or a web developers assistance"
            icon="/icons/drag-and-drop.svg"
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
