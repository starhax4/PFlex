import { companies } from "@/lib/data/companies";

interface CompanyLogoProps {
  link: string;
  alt: string;
}

const CompanyLogo = ({ link, alt }: CompanyLogoProps) => {
  return <img src={link} alt={alt} loading="lazy" />;
};

const Companies = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-10 w-full p-16">
      {companies.map((company, index) => (
        <CompanyLogo key={index} link={company.link} alt={company.alt} />
      ))}
    </div>
  );
};

export default Companies;
