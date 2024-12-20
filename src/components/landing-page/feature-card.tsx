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

export default FeatureCard;
