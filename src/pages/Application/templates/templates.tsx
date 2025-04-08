import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import TemplateCard from "./template-card";
import { getAllSites } from "@/lib/db/sites";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Site {
  id: string;
  title: string;
  tagline: string;
  person: {
    profession: string;
  };
}

export default function Templates() {
  const [data, setData] = useState<Site[]>();
  useEffect(() => {
    async function fetchSite() {
      try {
        const fetchedData = await getAllSites();
        setData(fetchedData as Site[]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchSite();
  }, []);

  const handleCategory = (value: string) => {
    setCategory(value);
  };
  console.log(data);
  const [searchParams] = useSearchParams();
  const [category, setCategory] = useState<string>(
    searchParams.get("category") ?? "",
  );

  return (
    <div className="flex flex-col items-center">
      <div>
        <Select
          name="category"
          defaultValue={category}
          onValueChange={handleCategory}
        >
          <SelectTrigger id="profession">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="developer">Developer</SelectItem>
            <SelectItem value="designer">Designer</SelectItem>
            <SelectItem value="student">Student</SelectItem>
            <SelectItem value="other">Other / site</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        {category
          ? data
              ?.filter((site) => site.person.profession === category)
              .map((site) => (
                <TemplateCard
                  key={site.id}
                  id={site.id}
                  title={site.title}
                  description={site.tagline}
                  img="https://i.ibb.co/Z1k0fPhP/shoes.jpg"
                  tags={[site.person.profession]}
                />
              ))
          : data?.map((site) => (
              <TemplateCard
                key={site.id}
                id={site.id}
                title={site.title}
                description={site.tagline}
                img="https://i.ibb.co/Z1k0fPhP/shoes.jpg"
                tags={[site.person.profession]}
              />
            ))}

        {/* <TemplateCard />
      <TemplateCard /> */}
      </div>
    </div>
  );
}
