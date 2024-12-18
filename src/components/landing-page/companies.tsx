import { companies } from "@/lib/data/companies";

interface CompanyLogoProps {
  link: string;
  alt: string;
}

const CompanyLogo = ({ link, alt }: CompanyLogoProps) => {
  return (
    <img
      src={link}
      alt={alt}
      loading="lazy"
      className="w-[120px] object-contain opacity-50 transition-opacity duration-300 hover:opacity-100 sm:w-[140px] md:w-[auto]"
    />
  );
};

const Companies = () => {
  return (
    <section className="w-full py-8 md:py-16">
      <div className="mb-8 text-center md:mb-12">
        <h2 className="mb-2 text-2xl font-bold text-white md:text-3xl">
          Trusted By
        </h2>
        <p className="text-sm text-gray-400 md:text-base">
          some of the biggest companies in the world
        </p>
      </div>
      <div className="flex w-auto flex-wrap items-center justify-center gap-6 px-4 md:gap-10 md:px-16">
        {companies.map((company, index) => (
          <div key={index} className="flex items-center justify-center">
            <CompanyLogo link={company.link} alt={company.alt} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Companies;
